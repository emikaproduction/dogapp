import React from 'react';
import { Container, ButtonGradient } from '../../styles/styles';
import { preprareBreeds } from "../../utils/preprareBreeds";

const GridOfItems = ({ items, setCurrentItem }) => {
    const handleClick = item => {
        setCurrentItem(item);
    }

    const generatedList = items && preprareBreeds(items.message).map(item => (
        <ButtonGradient key={item} onClick={() => handleClick(item)}>{item}</ButtonGradient>
    ));

    return (
        <Container>
            {generatedList}
        </Container>
    );
}

export default GridOfItems;
