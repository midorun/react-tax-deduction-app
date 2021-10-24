import styled from 'styled-components/macro';

import { COLORS } from 'constants/colors';

export const Input = styled.input`
  padding: 8px 10px;
  height: 40px;
  border: 1px solid ${COLORS.GRAY};
  border-radius: 3px;
  font-size: 0.875rem;
`;

export const Title = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
`;