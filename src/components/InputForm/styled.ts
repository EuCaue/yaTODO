/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { breakPoints } from '../../assets/styles/breakpoints';

export const InputFormStyled = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  text-align: center;
  max-width: 50%;
  min-width: 26%;
  position: relative;

  background-color: ${(props) => props.theme.secondary};
  ::placeholder {
    font-weight: 500;
  }
  :focus-visible {
    box-shadow: 0 0 3px 3px ${(props) => props.theme.accentColor};
  }

  @media screen and (min-width: ${breakPoints.tabletMin}) and (max-width: ${breakPoints.tabletMax}) {
    max-width: 80%;
    min-width: 56%;
  }

  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    max-width: 90%;
    min-width: 65%;
    width: 70%;
  }
`;
