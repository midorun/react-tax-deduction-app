import Container from 'components/Container';
import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import * as ST from './styled';

export type TModalProps = {
  showModal: boolean
  container: Element
  closeModal: () => void
}

const Modal: FC<TModalProps> = ({container, showModal, closeModal}) => {
  return showModal ? (
    ReactDOM.createPortal(
      <ST.Modal>
        <ST.Overlay onClick={closeModal}>
          <Container>
            <ST.Inner>

            </ST.Inner>
          </Container>
        </ST.Overlay>
      </ST.Modal>
      , container)
  ) : null;
};

export default Modal;
