import styled from 'styled-components';

export const TextTodo = styled.p`
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

export const ButtonTodoCheck = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  background-color: initial;
  cursor: pointer;
  position: absolute;
  right: 2vw;
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
  /* max-width: 100%; */
  /* width: fit-content; */
  word-break: break-all;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  break-inside: avoid;
  overflow: hidden;
  text-align: center;
  border-radius: 10px;
  position: relative;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.secondary};
  @media screen and (min-width: 320px) and (max-width: 575px) {
    min-width: 80vw;
    ${ButtonTodoEdit} {
      bottom: 2vh;
      right: 2vw;
    }
    ${ButtonTodoCheck} {
      bottom: 5vh;
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

  @media screen and (min-width: 36em) and (max-width: 65em) {
    min-width: 80vw;
    ${ButtonTodoEdit} {
      right: 2vw;
    }
    ${ButtonTodoCheck} {
      right: 6vw;
    }
  }
`;
