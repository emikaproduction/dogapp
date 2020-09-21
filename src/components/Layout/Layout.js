import React, { useCallback, useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import GridOfItems from '../GridOfItems/GridOfItems';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import { ModalBody, ModalTitle, ModalImage, ModalFooter } from '../Modal/modalStyles';
import { CloseButton, PrimaryButton} from '../../styles/styles';

const DOG_API_URL= 'https://dog.ceo/api';

const Layout = () => {
    const [currentItem, setCurrentItem] = useState('');
    const [currentImg, setCurrentImg] = useState(null);
    const [loadingImg, setLoadingImg] = useState(false);
    const [open, setOpen] = useState(false);
    const { data, isLoading, errorMessage } = useFetch(`${DOG_API_URL}/breeds/list/all`);

    useEffect(() => {
        currentItem && setOpen(true);
    }, [currentItem]);


  const handleClose = () => {
    setOpen(false);
    setCurrentItem(null);
  }

    const fetchImage = useCallback(() => {
        setLoadingImg(true);
        const prepareCurrentItemName = currentItem && currentItem.split('-').join('/');
        fetch(`${DOG_API_URL}/breed/${prepareCurrentItemName}/images/random`)
            .then(res => res.json())
            .then(
                ({ message }) => {
                    setCurrentImg(message);
                    setLoadingImg(false);
                },
                error => console.log(error)
            );
    }, [currentItem]);

    useEffect(() => {
        if (open) {
            fetchImage();
        }
    }, [open, fetchImage]);

    if (errorMessage) {
        return <ErrorBanner message={errorMessage} />;
    } else if (isLoading) {
        return <Header>Czekaj...</Header>;
    } else {
        return (
            <>
                <Header>Lista wszystkich ras psów</Header>
                <GridOfItems items={data} setCurrentItem={setCurrentItem} />
                <Modal open={open}>
                    <ModalBody>
                        <ModalTitle>Rasa: {currentItem}</ModalTitle>
                        {loadingImg ? <div>Czekaj...</div> : <ModalImage src={currentImg} alt="dog" />}
                        <ModalFooter>
                            <CloseButton onClick={handleClose}>Zamknij</CloseButton>
                            <PrimaryButton onClick={fetchImage}>Losuj kolejne zdjęcie rasy</PrimaryButton>    
                        </ModalFooter>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Layout;
