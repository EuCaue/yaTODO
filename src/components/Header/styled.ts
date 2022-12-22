/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const HeaderTodo = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 10;
  position: sticky;
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
    color: ${(props) => props.theme.text};
    display: flex;
    align-self: center;
    justify-content: center;
    padding-right: 1vw;

    :hover {
      color: ${(props) => props.theme.accentColor};
    }
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
