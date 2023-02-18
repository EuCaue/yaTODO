/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { breakPoints } from '../../assets/styles/breakpoints';

export const HeaderTodo = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  z-index: 10;
  flex-direction: row wrap;
  width: 100vw;
  /* background-color: ${(props) => props.theme.secondary}; */
`;

export const HamburgerMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: 0.5vw;
  background-color: ${(props) => props.theme.primary};
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style-type: none;
  z-index: 10;
  flex-flow: column wrap;
  max-width: 25%;
  min-width: 15%;
  height: 40vh;
  position: absolute;
  border-radius: 5px;
  top: 2.5rem;
  margin-left: 1.2vw;
  padding-top: 0.5vh;
  gap: 0.5rem;
  padding-top: 0.8rem;
  animation: 0.2s clipEffect linear;
  box-shadow: 0px 0px 3px 0.5px ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.secondary};
  border: 1px solid ${(props) => props.theme.text};

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
  li {
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    width: 80%;
    /* border: 1px solid ${(props) => props.theme.text}; */
    background-color: ${(props) => props.theme.secondary};
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
  }

  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    min-width: 30%;
    max-width: 40%;
  }
`;
