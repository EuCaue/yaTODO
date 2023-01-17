/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

type Props = {
  reversedList: boolean;
};

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
  border: 1px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.secondary};
  :hover,
  :focus,
  :active {
    border: 1px solid ${(props) => props.theme.accentColor};
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
  flex-direction: ${(props) => (props.reversedList ? 'row-reverse' : 'row')};
  flex-wrap: ${(props) => (props.reversedList ? 'wrap-reverse' : 'wrap')};
  gap: 2vw;
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
  rotate: 90deg;
`;

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

  /* 576px ~ 1100px*/
  @media screen and (min-width: 36em) and (max-width: 65em) {
    max-width: none;
    width: 90%;
    min-height: 50em;
    font-size: 16px;

    ${InputTodo} {
      min-width: 75%;
      min-height: 5.5vh;
    }

    ${TodoFlexWrapper} {
      padding-top: 3vw;
    }

    ${Form} {
      width: 90%;
      padding-top: 2.5vw;
    }

    ${ButtonExchange} {
      top: 3vh;
      right: 0.5vw;
    }
  }

  @media screen and (min-width: 0px) and (max-width: 575px) {
    max-width: none;
    width: 90%;
    font-size: 16px;
    min-height: 45em;
    padding-bottom: 1rem;

    ${DeleteButton} {
      padding: 0.5vw;
    }
    ${SubmitBtn} {
      padding: 0.5vw;
    }
    ${InputTodo} {
      min-width: 75%;
      min-height: calc(3.5rem - 4vw);
    }
    ${TodoFlexWrapper} {
      padding-top: 5vw;
    }

    ${Form} {
      width: 90%;
      padding-top: 3vw;
    }
    ${ButtonExchange} {
      top: calc(-9% + -0.6vmin + 0.1rem);
      right: 2em;
    }
  }
`;
