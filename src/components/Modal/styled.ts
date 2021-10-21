import { COLORS } from 'constants/colors';
import styled from 'styled-components/macro'

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${COLORS.GRAY};
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: ${COLORS.GRAY};
`;