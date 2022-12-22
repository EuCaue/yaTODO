/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
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

export const TextAreaTodo = styled.textarea`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.secondary};
  font-weight: 500;
  word-wrap: break-word;
  word-break: break-word;
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
  flex-wrap: wrap;
  gap: 2vw;
  align-self: self-start;
  padding-top: 1vw;
`;
