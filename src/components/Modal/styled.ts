import { COLORS } from 'constants/colors';
import styled from 'styled-components/macro';

const XYContentCentering = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${COLORS.GRAY};
  ${XYContentCentering}
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  ${XYContentCentering}
`;

export const Inner = styled.div`
  position: absolute;
  padding: 32px;
  width: 25%;
  height: 75%;
  background: ${COLORS.WHITE};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

