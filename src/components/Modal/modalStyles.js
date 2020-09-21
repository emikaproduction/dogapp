import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ModalBody = styled.div`
    background: white;
    border-radius: 7px;
    padding: 15px;
    min-width: 500px;
`;

export const ModalTitle = styled.div`
    font-weight: 700;
    margin: 15px 0;
`;

export const ModalImage = styled.img`
    max-height: 80vh;
`;

export const ModalFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 0;
`;