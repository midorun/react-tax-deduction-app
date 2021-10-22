import React, { FC, useRef } from 'react';
import ReactDOM from 'react-dom';

import * as ST from './styled';

export type TModalProps = {
  showModal: boolean
  container: Element
  closeModal: () => void
}

const Modal: FC<TModalProps> = ({container, showModal, closeModal}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    target !== ref.current && closeModal();
  };

  return showModal ? (
    ReactDOM.createPortal(
      <ST.Modal onClick={(e) => handleClickOutside(e)}>
        <ST.Overlay>
          <ST.Inner ref={ref}>
            <ST.Title>Налоговый вычет</ST.Title>
            <ST.Subtitle>
              Используйте налоговый вычет чтобы погасить ипотеку досрочно.
              Размер налогового вычета составляет не более 13% от своего официального годового дохода.
            </ST.Subtitle>

            {/*<ST.InputWrapper>*/}
            {/*  <ST.InputTitle>Ваша зарплата в месяц</ST.InputTitle>*/}
            {/*</ST.InputWrapper>*/}
          </ST.Inner>
        </ST.Overlay>
      </ST.Modal>
      , container)
  ) : null;
};

export default Modal;