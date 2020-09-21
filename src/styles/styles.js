import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ButtonGradient = styled.button`
  padding: 25px;
  background: linear-gradient(to right, #00954d, #085689 100%);
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
`;

export const CloseButton = styled(Button)`
    background-color: #085689;
`;

export const PrimaryButton = styled(Button)`
    background-color: #00954d;
`;

export const Title = styled.h1`
    padding: 25px;
    background: linear-gradient(to right, #00954d, #085689 100%);
    text-align: center;
    color: white;
`;
