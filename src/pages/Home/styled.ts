/* eslint-disable import/prefer-default-export */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  width: 100vw;
  height: 90vh;
  gap: 1vw;
  animation: 1.3s clipEffect linear;

  @keyframes clipEffect {
    from {
      clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    }
    to {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
`;

export const DivPara = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  text-align: center;
  /* border: 1px solid ${(props) => props.theme.text}; */
  padding: 1vw;
  span {
    color: ${(props) => props.theme.accentColor};
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  padding: 0.725rem;
  text-align: center;
  background-color: ${(props) => props.theme.secondary};
  outline: 1px solid ${(props) => props.theme.text};
  span {
    color: ${(props) => props.theme.accentColor};
    background-color: ${(props) => props.theme.secondary};
  }

  :hover {
    outline: none;
    background-color: ${(props) => props.theme.accentColor};
    box-shadow: 0 0 5px 1px ${(props) => props.theme.accentColor};
  }
`;
