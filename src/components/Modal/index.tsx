import React, { FC, useRef } from 'react';
import ReactDOM from 'react-dom';

import * as ST from './styled';

export type TModalProps = {
  showModal: boolean
  container: Element
  closeModal: () => void
}

const Modal: FC<TModalProps> = ({container, showModal, closeModal, children}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    target !== ref.current && closeModal();
  };

  return showModal ? (
    ReactDOM.createPortal(
      <ST.Modal >
        <ST.Overlay onClick={(e) => handleClickOutside(e)}/>
          <ST.Inner ref={ref}>
            {children}
          </ST.Inner>

      </ST.Modal>
      , container)
  ) : null;
};

export default Modal;