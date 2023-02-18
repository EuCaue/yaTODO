import styled from 'styled-components';
import { breakPoints } from '../../../../assets/styles/breakpoints';

export const TextTodo = styled.p`
  display: flex;
  align-self: center;
  padding: 1vw 0 1vw 0;
  justify-content: center;
  align-items: center;
  flex-flow: row-reverse wrap;
  text-align: center;
  max-width: 90%;
  width: 70%;
  min-height: 10vh;
  font-size: 16px;
  background-color: ${(props) => props.theme.secondary};
`;

export const ButtonTodoEdit = styled.button`
  display: flex;
  justify-content: right;
  align-self: center;
  align-items: center;
  background-color: initial;
  cursor: pointer;
  position: absolute;
  padding-right: 0.2vw;
  right: 0vw;
`;

export const ButtonTodoCheck = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  background-color: initial;
  cursor: pointer;
  position: absolute;
  right: 2vw;
`;

export const ButtonTodoEditCheck = styled(ButtonTodoEdit)``;

export const FormEditTodo = styled.form`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.secondary};
`;

export const InputEditTodo = styled.input`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
  flex-flow: row-reverse wrap;
  font-weight: bold;
  max-width: 90%;
  min-height: 8vh;
  max-height: 10vh;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.text};
`;

export const Container = styled.article`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 10vh;
  height: fit-content;
  min-width: 25vw;
  width: 25vw;
  max-width: 25vw;
  word-break: break-all;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  break-inside: avoid;
  overflow: hidden;
  text-align: center;
  border-radius: 10px;
  position: relative;
  background-color: ${(props) => props.theme.secondary};
  box-shadow: 0 0 1px 1px ${(props) => props.theme.text};

  @media screen and (min-width: ${breakPoints.tabletMin}) and (max-width: ${breakPoints.tabletMax}) {
    max-width: 90%;
    min-width: 48%;
    width: 48.6%;

    ${TextTodo} {
      max-width: 90%;
      width: 63%;
      padding: 1vw 0 1vw 0;
      min-height: 1rem;
    }

    ${ButtonTodoEdit} {
      right: 3%;
    }
    ${ButtonTodoCheck} {
      right: 15%;
    }

    ${ButtonTodoEditCheck} {
      z-index: 99;
    }
  }

  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    min-width: 75vw;
    min-height: 4.5rem;
    max-width: 85%;
    ${TextTodo} {
      padding: 1vw 0 1vw 0;
      min-height: 1rem;
    }
    ${ButtonTodoEdit} {
      bottom: 25%;
      right: 2vw;
    }
    ${ButtonTodoCheck} {
      bottom: 60%;
      right: 2vw;
    }

    ${InputEditTodo} {
      max-width: 50%;
    }

    ${ButtonTodoEditCheck} {
      right: 2vw;
      top: 2vh;
    }
  }
`;
