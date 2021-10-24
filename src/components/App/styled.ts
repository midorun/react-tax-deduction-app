import styled from 'styled-components/macro'

import { COLORS } from 'constants/colors';

export const App = styled.div`
 
`;

export const ButtonWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), ${COLORS.RED};

  display: flex;
  justify-content: center;
  align-items: center;
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

export const InputWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const PaymentsTitle = styled.span`
  width: 160px;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.5rem;
`;

export const PaymentsList = styled.ul`
  overflow: auto;
`;

export const PaymentsItem = styled.li`
  
`;

export const PaymentsSettings = styled.div`
  display: flex;
  
`;

export const SettingsTitle = styled.span`
  margin-right: 32px;
`;