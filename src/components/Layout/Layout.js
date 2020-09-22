import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import GridOfItems from '../GridOfItems/GridOfItems';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import { ModalBody, ModalTitle, ModalContent } from '../Modal/modalStyles';
import { CloseButton, Loading } from '../../styles/styles';
import { DOG_API_URL } from '../../constans/apiPath';
import SingleItem from '../SingleItem/SingleItem';

const Layout = () => {
    const [currentItem, setCurrentItem] = useState('');
    const [open, setOpen] = useState(false);
    const { data, isLoading, errorMessage } = useFetch(`${DOG_API_URL}/breeds/list/all`);

    useEffect(() => {
        currentItem && setOpen(true);
    }, [currentItem]);


    const handleClose = () => {
        setOpen(false);
        setCurrentItem('');
    };

    if (errorMessage) return <ErrorBanner message={errorMessage} />;
    if (isLoading) return <Loading>Czekaj...</Loading>;
    return (
        <>
            <Header>Lista wszystkich ras psów</Header>
            <GridOfItems items={data} setCurrentItem={setCurrentItem} />
            <Modal open={open}>
                <ModalBody>
                    <ModalTitle>
                        <div>Rasa: {currentItem}</div>
                        <CloseButton onClick={handleClose}>X</CloseButton> 
                    </ModalTitle>
                    <ModalContent>
                        <SingleItem breedName={currentItem} />
                    </ModalContent>
                </ModalBody>
            </Modal>
        </>
    );
}

export default Layout;
