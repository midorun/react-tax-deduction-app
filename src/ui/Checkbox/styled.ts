import { COLORS } from 'constants/colors';
import styled from 'styled-components/macro';

export const Checkbox = styled.div`
  #checkbox {
    visibility: hidden;
  }
`;

type TLabelProps = {
  isChecked: boolean
  isDisabled?: boolean
}
export const Label = styled.label<TLabelProps>`
  padding-bottom: 16px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 11px;
  border-bottom: 1px solid ${COLORS.GRAY};
  cursor: pointer;
  


  :before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid ${COLORS.GRAY};
    border-radius: 6px;
    background: ${({isChecked, isDisabled}) =>
            isDisabled ?
                    COLORS.GRAY
                    :
                    isChecked ? COLORS.RED : COLORS.WHITE
    };
  }

  :after {
    content: '';
    position: absolute;
    display: ${({isChecked, isDisabled}) =>
            isDisabled || isChecked ? 'block' : 'none'};
    top: 10px;
    left: 5px;
    transform: rotate(45deg) translate(-50%, -50%);
    width: 5px;
    height: 12px;
    border: solid ${COLORS.WHITE};
    border-width: 0 2px 2px 0;

  }
`;

export const Sum = styled.span`
  font-size: 0.875rem;
`;

export const Year = styled.span`
  color: ${COLORS.GRAY};
`;