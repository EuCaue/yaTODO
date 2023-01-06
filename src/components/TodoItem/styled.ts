import styled from 'styled-components';

export const FormNewTodo = styled.form`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const TodoItemStyle = styled.article`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 10vh;
  height: fit-content;
  min-width: 25vw;
  width: fit-content;
  font-size: 10px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.secondary};
  text-align: center;
  border-radius: 10px;
  position: relative;
  p {
    max-width: 99%;
    font-size: 16px;
  }
`;

export const TextTodo = styled.p`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
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
