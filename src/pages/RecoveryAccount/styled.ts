/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { breakPoints } from '../../assets/styles/breakpoints';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  width: 100vw;
  height: 100vh;
  gap: 0.5rem;

  p {
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  width: 100%;
  gap: 1rem;
`;
