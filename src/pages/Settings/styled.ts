/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { breakPoints } from '../../assets/styles/breakpoints';

export const Title = styled.h1`
  top: 0;
  font-size: 1.3rem;
  background-color: ${(props) => props.theme.primary};
`;

export const SelectThemeContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 90%;
  gap: 4rem;
  margin-top: 0.3vw;
  padding: 0.5vw;
  border: 0.2vw solid ${(props) => props.theme.text};
  select {
    text-align: center;
    width: 40%;
    background-color: ${(props) => props.theme.secondary};
    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme.accentColor};
      box-shadow: 0 0 5px 1px ${(props) => props.theme.accentColor};
    }
  }
`;

export const FormContainerFile = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 90%;
  gap: 1.5rem;
  padding: 0.5vw;
  border: 0.2vw solid ${(props) => props.theme.text};
`;

export const LabelInputFile = styled.label`
  background-color: ${(props) => props.theme.secondary};
  cursor: pointer;
  min-width: 40%;
  width: max-content;
  text-align: center;
  :hover {
    background-color: ${(props) => props.theme.accentColor};
    box-shadow: 0 0 5px 1px ${(props) => props.theme.accentColor};
  }
`;

export const SpanContainerExportTodos = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  gap: 1.5rem;
  padding: 0.5vw;
  border: 0.2vw solid ${(props) => props.theme.text};
`;

export const ButtonExportTodos = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.secondary};
  min-width: 40%;
  width: max-content;
  text-align: center;
  :hover {
    background-color: ${(props) => props.theme.accentColor};
    box-shadow: 0 0 5px 1px ${(props) => props.theme.accentColor};
  }
`;
export const Container = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  flex-flow: column wrap;
  margin: auto;
  max-width: 50vw;
  width: 45vw;
  gap: 2vw;
  padding-bottom: 9rem;
  min-height: 90vh;
  border-radius: 15px;
  margin-top: 1.5vw;
  border: 5px solid ${(props) => props.theme.text};
  input[type='file'] {
    display: none;
  }
  @media screen and (min-width: ${breakPoints.tabletMin}) and (max-width: ${breakPoints.tabletMax}) {
    max-width: 91%;
    width: 90%;
  }

  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    max-width: none;
    width: 90%;
  }
`;
