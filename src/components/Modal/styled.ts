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
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  padding: 32px;
  width: 25%;
  height: 75%;
  background: ${COLORS.WHITE};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
`;

export const Subtitle = styled.h2`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.TEXT_GRAY};
  line-height: 24px;
`;