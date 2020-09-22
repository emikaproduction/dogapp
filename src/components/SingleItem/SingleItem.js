import React from 'react';
import useFetch from '../../hooks/useFetch';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import { PrimaryButton, Image, Loading } from '../../styles/styles';
import { DOG_API_URL } from '../../constans/apiPath';

const SingleItem = ({ breedName }) => {
    const prepareBreedName = breedName.split('-').join('/');
    const { data, isLoading, errorMessage, refetch } = useFetch(`${DOG_API_URL}/breed/${prepareBreedName}/images/random`);
    const imageUrl = data && data.message;

    const randomImage = () => {
        refetch();
    }

    if (errorMessage) return <ErrorBanner message={errorMessage} />;
    if (isLoading) return <Loading>Czekaj...</Loading>;
    return (
        <>
            <Image src={imageUrl} alt="dog" />
            <PrimaryButton onClick={randomImage}>Losuj kolejne zdjęcie rasy</PrimaryButton>
        </>
    );
}

export default SingleItem;
