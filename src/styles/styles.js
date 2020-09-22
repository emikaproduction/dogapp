import styled from 'styled-components';

const linearGradient = 'linear-gradient(to right, #00954d, #085689 100%)';

export const Container = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    position: relative;
    display: flex;
    padding: 1.2em 2em;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    border-radius: 7px;
    border: none;
    justify-content: space-between;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    transition: all .3s;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
    }
`;

export const ButtonGradient = styled(Button)`
    padding: 25px;
    background: ${linearGradient};
    border-radius: 7px;
    text-align: center;
    color: white;
    flex: 1 0 15%;
    border: none;
    outline: none;
    margin: 10px;
    text-transform: capitalize;
    &:hover{
        cursor: pointer;
    }
`;

export const CloseButton = styled(Button)`
    background-color: #085689;
    padding: 10px;
`;

export const PrimaryButton = styled(Button)`
    background-color: #00954d;
    margin-top: 15px;
`;

export const Loading = styled.div`
    border: 2px dashed #00954d;
    width: 200px;
    padding: 15px;
    margin: 15px auto;
    border-radius: 7px;
    text-align: center;
`;

export const Title = styled.h1`
    padding: 25px;
    background: ${linearGradient};
    text-align: center;
    color: white;
`;

export const Image = styled.img`
    max-height: 70vh;
`;
