/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const HeaderTodo = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 10;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.secondary};
`;

export const Nav = styled.nav`
  display: flex;
  width: 100vw;
  justify-content: space-between;

  align-items: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.secondary};
  a {
    display: flex;
    align-self: center;
    justify-content: center;
    width: min-content;
    margin-right: 1vw;
    background-color: transparent;
    :hover {
      color: ${(props) => props.theme.accentColor};
    }
  }

  label {
    background-color: ${(props) => props.theme.secondary};
  }

  select {
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-self: center;

    height: 5vh;
    padding-left: 1vw;
    text-align: center;
    outline: 0;
    border: none;
    color: ${(props) => props.theme.text};
    border-radius: 5px;
    background-color: ${(props) => props.theme.secondary};
    :hover {
      background-color: ${(props) => props.theme.accentColor};
    }
  }
`;
