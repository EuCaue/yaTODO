/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-flow: column wrap;
  align-self: center;
  margin-top: 2.5vw;
  max-width: 80vw;
  width: 55vw;
  min-height: 80vh;
  border: 5px solid ${(props) => props.theme.text};
  position: relative;
  border-radius: 15px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 1vw;
  align-items: center;
  align-self: center;
  margin-top: 1vw;

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    fill: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.primary};
    transition: all 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover {
      fill: ${(props) => props.theme.accentColor};
    }
  }
`;

export const InputTodo = styled.input`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.secondary};
  font-weight: 500;
  min-width: 25vw;
  min-height: 8vh;
  height: fit-content;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.text};
  font-size: 20px;

  :focus,
  :active {
    transition: none;
    border: 2px solid ${(props) => props.theme.accentColor};
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  cursor: pointer;
`;

export const TodoFlexWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-flow: row-reverse wrap-reverse;
  gap: 2vw;
  position: relative;
  align-self: unset;
  padding-top: 1vw;
  article:only-child {
    margin-left: -4vw;
  }
`;

export const InputEditTodo = styled.input`
  position: absolute;
  z-index: 10;
  display: flex;
  /* right: 0vw; */
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
  /* width: 25vw; */
  /* height: 25vh; */
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.text};
`;

export const ButtonTodoEdit = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  background-color: initial;
  cursor: pointer;
  position: absolute;
  right: 0vw;
  transition: all 0.1s linear;
  color: ${(props) => props.theme.text};
  :hover {
    svg {
      path {
        fill: ${(props) => props.theme.accentColor};
      }
    }
  }
`;
