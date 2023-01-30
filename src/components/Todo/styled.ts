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
  min-height: 6vh;
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
    fill: ${(props) => props.reversedList ? props.theme.highlight : props.theme.text};
  :hover {
    fill: ${(props) => props.theme.accentColor};
  }
}
`;

export const PopUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-flow: column wrap;
  top: 25%;
  position: absolute;
  min-width: 20vw;
  border-radius: 7px;
  min-height: 15vh;
  padding: 1vw;
  z-index: 100;
  box-shadow: 1px 1px 1px 100vw rgba(0,0,0,0.9);
  border: 1px solid ${(props) => props.theme.text};
`

export const TextPopUp = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-flow: row wrap;
`;

export const SpanPopUp = styled.span`
   display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  align-self: center;
  flex-flow: row wrap;
`;

export const ButtonDeleteConfirm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-flow: row wrap;
  :hover{
    color: ${(props) => props.theme.accentColor};
  }
`;

export const ButtonDeleteCancel = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-flow: row wrap;
  :hover{
    color: ${(props) => props.theme.highlight};
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-flow: column wrap;
  align-self: center;
  margin-top: 2.5vw;
  max-width: 80vw;
  width: 57vw;
  min-height: 85vh;
  position: relative;
  border-radius: 15px;
  padding-bottom: 1rem;
  border: 5px solid ${(props) => props.theme.text};

  /* 576px ~ 1100px*/
  @media screen and (min-width: 36em) and (max-width: 65em) {
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

  @media screen and (min-width: 0px) and (max-width: 575px) {
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
      top: -3.5rem;
      right: 2em;
    }
  }
`;
