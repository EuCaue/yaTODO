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
  gap: 1rem;
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
  padding: 1vw;
  span {
    color: ${(props) => props.theme.accentColor};
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.725rem;
  text-align: center;
  min-width: 5rem;
  background-color: ${(props) => props.theme.secondary};
  outline: 1px solid ${(props) => props.theme.text};

  :hover {
    outline: none;
    background-color: ${(props) => props.theme.accentColor};
    box-shadow: 0 0 5px 1px ${(props) => props.theme.accentColor};
    font-weight: bold;
  }
`;

export const SpanLinks = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  flex-flow: row wrap;
  gap: 1rem;
`;
