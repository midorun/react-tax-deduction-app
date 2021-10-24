import React, { FC, useState } from 'react';

import * as ST from './styled';

export type TCheckboxProps = {
  payment: number,
  index: number
}

const Checkbox: FC<TCheckboxProps> = ({payment, index}) => {
  const [isChecked, setIsChecked] = useState(false);

  const getYear = (index: number) => {
    const year = index + 1;

    if (index === 1){
      return `во ${year}-ой год`
    }
    return `в ${year}-ый год`
  }


  return (
    <ST.Checkbox>
      <input id={'checkbox'} type={'checkbox'}/>
      <ST.Label
        htmlFor={'checkbox'}
        onClick={() => setIsChecked(!isChecked)}
        isChecked={isChecked}

      >
        <ST.Sum>{payment}</ST.Sum>
        <ST.Year>{getYear(index)}</ST.Year>
      </ST.Label>
    </ST.Checkbox>

  );
};

export default Checkbox;
