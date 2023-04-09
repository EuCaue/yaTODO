/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { breakPoints } from '../../assets/styles/breakpoints';
import { hoverButtonStyles } from '../../assets/styles/hoverButtonStyles';

export const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.3rem;
  max-width: 50%;
  min-width: 15%;
  background-color: ${(props) => props.theme.secondary};
  cursor: pointer;
  border-bottom: 2px solid ${(props) => props.theme.accentColor};

  :hover,
  :focus-visible {
    ${hoverButtonStyles}
  }
  :disabled {
    cursor: not-allowed;
    border-bottom: 2px solid ${(props) => props.theme.error};
    :hover {
      background-color: ${(props) => props.theme.error};
      box-shadow: 0 0 5px 1px ${(props) => props.theme.error};
    }
  }

  @media screen and (min-width: ${breakPoints.tabletMin}) and (max-width: ${breakPoints.tabletMax}) {
    min-width: 26%;
  }

  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    min-width: 40%;
  }
`;
