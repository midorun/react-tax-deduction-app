import styled from 'styled-components/macro';

import { COLORS } from 'constants/colors';

type TButtonProps = {
  width?: string,
  height?: string,
  padding?: string
}

const Button = styled.div<TButtonProps>`
  width: ${({width}) => width};
  height: ${({height}) => height};
  padding: ${({padding}) => padding};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.WHITE};
  border-radius: 6px;
  color: ${COLORS.WHITE};
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), ${COLORS.RED};
  cursor: pointer;

  &:hover, &:active {
    box-shadow: 0 0 24px rgba(234, 0, 41, 0.33);
    background: #EA0029;
  }

  &:disabled {
    background: ${COLORS.GRAY};
  }
`

export default Button