/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

type Props = {
  reversedList: boolean;
};

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
  position: relative;
  border-radius: 15px;
  border: 5px solid ${(props) => props.theme.text};

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
  font-weight: 500;
  min-width: 25vw;
  width: fit-content;
  min-height: 8vh;
  height: fit-content;
  border-radius: 10px;
  font-size: 20px;
  border: 1px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.secondary};
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

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  small {
    display: none;
    position: absolute;
    z-index: 10;
  }

  :hover {
    small {
      display: inline;
      top: 3.5rem;
      font-size: 12px;
      font-family: serif;
      border-radius: 1px;
      padding: 0.5em;
      border: 0.5px double ${(props) => props.theme.text};
      color: ${(props) => props.theme.text};
    }
  }
`;

export const TodoFlexWrapper = styled.section<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: ${(props) => (props.reversedList ? 'row-reverse' : 'row')} ${(props) => (props.reversedList ? 'wrap-reverse' : 'wrap')};
  gap: 2vw;
  /* position: relative; */
  align-self: unset;
  padding-top: 1vw;
`;

export const ButtonExchange = styled.button`
  display: flex;
  background: transparent;
  position: absolute;
  cursor: pointer;
  top: 3vh;
  right: -3.5vw;
  transition: all 0.1s linear;
  rotate: 90deg;
  color: ${(props) => props.theme.text};
  :hover {
    svg {
      path {
        fill: ${(props) => props.theme.accentColor};
      }
    }
  }
`;
