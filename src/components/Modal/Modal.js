import React, { memo } from 'react';
import { createPortal } from 'react-dom';
import {ModalContainer} from './modalStyles';

const Modal = memo(({ open, children }) => {
    const modalDomEl = document.getElementById('modal-root');

    if (!modalDomEl) return null;

    return createPortal(
        open && (
            <ModalContainer>
                {children}
            </ModalContainer>
        ),
        modalDomEl
    )
});

export default Modal;
