import styled from 'styled-components';
import { breakPoints } from '../../../../assets/styles/breakpoints';

export const TextTodo = styled.p`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  flex-flow: row-reverse wrap;
  text-align: center;
  flex-grow: 4;
  margin-left: 15%;
  max-width: 90%;
  width: 70%;
  min-height: 1rem;
  font-size: 18px;
  transition: all 500ms ease;
  background-color: ${(props) => props.theme.secondary};

  &[contenteditable='true'] {
    display: block;
    text-align: center;
    background-color: ${(props) => props.theme.primary};
  }
`;

export const ButtonTodoEdit = styled.button`
  display: flex;
  justify-content: right;
  align-self: center;
  align-items: center;
  background-color: initial;
  padding-right: 0.2rem;
`;

export const ButtonTodoCheck = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  background-color: initial;
`;

export const ButtonTodoEditCheck = styled(ButtonTodoEdit)`
  padding: 0;
  padding-left: 0.5rem;
`;

export const Container = styled.article`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  gap: 0.2rem;
  min-height: 7vh;
  height: fit-content;
  padding: 0.3rem;
  min-width: 25vw;
  width: 25vw;
  max-width: 25vw;
  word-break: break-all;
  text-align: center;
  border-radius: 10px;
  position: relative;
  background-color: ${(props) => props.theme.secondary};
  box-shadow: 0 0 1px 1px ${(props) => props.theme.text};

  @media screen and (min-width: ${breakPoints.tabletMin}) and (max-width: ${breakPoints.tabletMax}) {
    max-width: 90%;
    min-width: 45%;
    width: 48.6%;
    ${TextTodo} {
      max-width: 90%;
      width: 63%;
      padding: 1vw 0 1vw 0;
      min-height: 1rem;
    }
  }

  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    min-width: 75vw;
    min-height: 4.5rem;
    max-width: 85%;
  }
`;
