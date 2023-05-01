/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { breakPoints } from '../../../../assets/styles/breakpoints';

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
  width: 90%;
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
  width: 76%;
  min-height: 5vh;
  max-height: 7vh;
  border-radius: 5px;
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

export const ButtonReverse = styled.button<Props>`
  display: flex;
  background: transparent;
  position: absolute;
  cursor: pointer;
  top: 3vh;
  right: -3.5vw;
  rotate: 90deg;
  svg {
    fill: ${(props) =>
      props.reversedList ? props.theme.accentColor : props.theme.text};
    :hover {
      fill: ${(props) => props.theme.accentColor};
    }
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-flow: column wrap;
  align-self: center;
  margin-top: 0.5rem;
  max-width: 80%;
  width: 60%;
  min-height: 88vh;
  position: relative;
  border-radius: 15px;
  padding-bottom: 1rem;
  border: 5px solid ${(props) => props.theme.text};

  @media screen and (min-width: ${breakPoints.tabletMin}) and (max-width: ${breakPoints.tabletMax}) {
    max-width: none;
    width: 92%;
    min-height: 50em;
    font-size: 16px;

    ${InputTodo} {
      min-width: 75%;
      min-height: 5.5vh;
    }

    ${TodoFlexWrapper} {
      width: 75vw;
      padding-top: 3vw;
    }

    ${Form} {
      width: 90%;
      padding-top: 2.5vw;
    }

    ${ButtonReverse} {
      top: calc(4vw + 0.1rem);
      right: 0.5vw;
    }
  }

  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    max-width: none;
    width: 90%;
    font-size: 16px;
    min-height: 170vw;
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
    ${ButtonReverse} {
      top: 102%;
      right: 0;
    }
  }
`;
