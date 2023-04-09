/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { breakPoints } from '../../assets/styles/breakpoints';
import { hoverButtonStyles } from '../../assets/styles/hoverButtonStyles';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-flow: column wrap;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  position: relative;
  width: 100vw;
  height: 100vh;
  gap: 1rem;

  a {
    font-size: 12px;
    &:hover {
      color: ${(props) => props.theme.accentColor};
      font-size: 15px;
    }
  }

  @media screen and (min-width: ${breakPoints.tabletMin}) and (max-width: ${breakPoints.tabletMax}) {
    input {
      max-width: 80%;
      min-width: 56%;
    }
    button {
      min-width: 26%;
    }
  }

  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    input {
      max-width: 90%;
      min-width: 65%;
      width: 70%;
    }
    /* span { */
    /*   max-height: 1%; */
    /*   align-items: center; */
    /* } */
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

export const SpanErrorForm = styled.div`
  display: none;
  align-items: flex-end;
  justify-content: flex-start;
  max-height: 0.1%;
  font-size: 16px;
  padding: 0.3%;
  min-width: 27%;
  text-align: center;
  color: ${(props) => props.theme.error};
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
    right: 15vw;
  }
`;
