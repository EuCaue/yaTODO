/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';
import { breakPoints } from '../../assets/styles/breakpoints';

const paragraphAnimation = keyframes`
  from { width: 0;}
  to {width: 74%;}
`;

const linkAnimation = keyframes`
  from {border-right: none}
  to {border-right: 1px solid white}
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border: 1px solid ${(props) => props.theme.highlight};
  height: 50vh;
  width: 50vw;
  margin: auto;
  margin-top: 10vw;
  flex-flow: column wrap;

  p {
    font-size: 3vw;
    animation: ${paragraphAnimation} 1s linear;
    overflow: hidden;
    white-space: nowrap;
    strong {
      font-size: 3vw;
    }
  }

  a {
    text-decoration: underline;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    text-align: center;
    padding-right: 0.2rem;
    animation: ${linkAnimation} 0.9s backwards infinite;
  }

  @media screen and (min-width: ${breakPoints.tabletMin}) and (max-width: ${breakPoints.tabletMax}) {
    max-height: 40vh;
    max-width: 80vw;
    height: 30vh;
    width: 80vw;
    p {
      font-size: 5vw;
      strong {
        font-size: 5vw;
      }
    }
    a {
      font-size: 3vw;
    }
  }

  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    height: 20vh;
    width: 80vw;
    p {
      font-size: 6.5vw;
      strong {
        font-size: 6.5vw;
      }
    }
    a {
      font-size: 4.5vw;
    }
  }
`;
