import React, { FC } from 'react';

import * as ST from './styled';

export type TContainerProps = {}

const Container: FC<TContainerProps> = ({children}) => {
  return (
    <ST.Container>
      {children}
    </ST.Container>
  );
};

export default Container;
