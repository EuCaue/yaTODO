import styled from 'styled-components';

export const TextTodo = styled.p`
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  flex-flow: row-reverse wrap;
  text-align: center;
  max-width: 90%;
  width: 74%;
  min-height: 10vh;
  font-size: 16px;
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

export const InputEditTodo = styled.input`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
  flex-flow: row-reverse wrap;
  max-width: 90%;
  min-height: 10vh;
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

  @media screen and (min-width: 36em) and (max-width: 65em) {
    max-width: 95%;
    min-width: 50vw;
    width: 90%;
    ${TextTodo} {
      max-width: 90%;
      width: 68%;
    }

    ${ButtonTodoEdit} {
      right: 2vw;
    }
    ${ButtonTodoCheck} {
      right: 6vw;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 575px) {
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
      max-width: none;
      font-size: initial;
    }

    ${ButtonTodoEditCheck} {
      right: -0.5vw;
      top: 2vh;
      padding-right: 0.5vw;
    }
  }
`;
