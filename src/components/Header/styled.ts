/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';
import { breakPoints } from '../../assets/styles/breakpoints';

export const HeaderTodo = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  z-index: 10;
  flex-direction: row wrap;
  width: 100vw;
`;

export const HamburgerMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: 0.45rem;
  background-color: ${(props) => props.theme.primary};
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  z-index: 12;
  flex-flow: column wrap;
  position: absolute;
  border-radius: 5px;
  min-width: 8rem;
  max-width: 35%;
  top: 2.4rem;
  left: 1.7rem;
  gap: 0.5rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  animation: 0.2s clipEffect linear;
  background-color: ${(props) => props.theme.secondary};
  border: 1px solid ${(props) => props.theme.text};

  a {
    background-color: transparent;
    :hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
  li {
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${(props) => props.theme.secondary};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${(props) => props.theme.secondary};
    :hover {
      color: ${(props) => props.theme.accentColor};
    }
  }

  @keyframes clipEffect {
    from {
      clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    }
    to {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
  }

  @media screen and (min-width: ${breakPoints.tabletMin}) and (max-width: ${breakPoints.tabletMax}) {
    width: 25%;
    min-width: 8rem;
    max-width: 35%;
  }

  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    min-width: 8rem;
    max-width: 35%;
    top: 2rem;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  button {
    padding-right: 0.45rem;
  }

  @media screen and (min-width: ${breakPoints.tabletMin}) and (max-width: ${breakPoints.tabletMax}) {
    top: 0.25rem;
  }
  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    top: 0.25rem;
  }
`;

export const UserList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: nowrap column;
  position: absolute;
  list-style-type: none;
  z-index: 20;
  text-align: center;
  top: 2.4rem;
  min-width: 9rem;
  width: max-content;
  right: 1.7rem;
  gap: 0.5rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  animation: 0.3s clipEffect linear;
  border-radius: 5px;
  background-color: ${(props) => props.theme.secondary};
  border: 1px solid ${(props) => props.theme.text};

  li {
    background-color: transparent;
    padding: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    :first-child {
      padding-left: 0.7rem;
      padding-right: 0.7rem;
    }
  }

  a,
  button {
    background-color: transparent;
    :hover {
      color: ${(props) => props.theme.accentColor};
    }
  }

  @keyframes clipEffect {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
