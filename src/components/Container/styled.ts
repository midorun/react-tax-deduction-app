import { BREAKPOINTS } from 'constants/breakpoints';
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1440px;
  padding: 10px;
  
  @media (max-width: ${BREAKPOINTS.TABLET}){
    max-width: calc(${BREAKPOINTS.TABLET} - 20);
  }
  
  @media (max-width: ${BREAKPOINTS.PHONE}){
    max-width: ${BREAKPOINTS.PHONE}
  }
`;