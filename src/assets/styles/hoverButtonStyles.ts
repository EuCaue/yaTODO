/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components';

export const hoverButtonStyles = css`
  font-weight: bold;
  background-color: ${(props) => props.theme.accentColor};
  box-shadow: 0 0 5px 1px ${(props) => props.theme.accentColor};

  :disabled {
    font-weight: bold;
    background-color: ${(props) => props.theme.error};
    box-shadow: 0 0 5px 1px ${(props) => props.theme.error};
  }
`;
