/* eslint-disable import/prefer-default-export */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakPoints } from '../../assets/styles/breakpoints';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  width: 100vw;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  width: 100%;
  gap: 1rem;
  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    input {
      max-width: 90%;
      min-width: 65%;
      width: 75%;
    }
  }
`;

export const ButtonShowPassword = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  min-width: auto !important;
  top: 1.5vh;
  right: 37vw;
  z-index: 2;

  @media screen and (min-width: ${breakPoints.tabletMin}) and (max-width: ${breakPoints.tabletMax}) {
    top: 1vh;
    right: 22vw;
  }

  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    top: 1vh;
    right: 13vw;
  }
`;
export const SpanInputForm = styled.span`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding-left: 1.5rem;
`;
export const SpanLinks = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-flow: row wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: ${(props) => props.theme.accentColor};
  }
  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    width: 30%;
  }
`;
