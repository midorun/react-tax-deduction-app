import React, { FC } from 'react';

import * as ST from './styled';

export type TTextButtonProps = {
  text: string
  onClick: () => void
}

const TextButton: FC<TTextButtonProps> = ({text, onClick}) => {
  return (
    <ST.TextButton onClick={onClick}>
      {text}
    </ST.TextButton>
  );
};

export default TextButton;
