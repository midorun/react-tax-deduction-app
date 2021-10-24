import React, { ChangeEvent, FC } from 'react';

import * as ST from './styled';

export type TInputProps = {
  title?: string;
  onChange?: (e: ChangeEvent) => void
}

const Input: FC<TInputProps> = ({title, onChange}) => {

  return (
    <>
      {title && <ST.Title>{title}</ST.Title>}
      <ST.Input onChange={onChange}/>
    </>

  );
};

export default Input;
