/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { breakPoints } from '../../assets/styles/breakpoints';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-flow: column wrap;
  input[type='file'] {
    display: none;
  }
`;

export const SettingsContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  justify-content: flex-start;
  width: 62%;
  height: 90vh;
  list-style-type: none;
  border-radius: 15px;
  position: relative;
  gap: 1.5rem;
  padding-top: 1.5rem;
  border: 2px solid ${(props) => props.theme.text};

  @media screen and (min-width: ${breakPoints.tabletMin}) and (max-width: ${breakPoints.tabletMax}) {
    width: 95%;
    margin-top: 0.5rem;
  }

  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    margin-top: 0.5rem;
    width: 90%;
    height: max-content;
    padding-bottom: 4vh;
  }
`;
