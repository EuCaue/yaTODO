/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { breakPoints } from '../../assets/styles/breakpoints';
import { hoverButtonStyles } from '../../assets/styles/hoverButtonStyles';

const RightStyleDefault = css`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 40%;
  text-align: center;
  padding: 0.3rem;
  background-color: ${(props) => props.theme.secondary};
  :hover {
    ${hoverButtonStyles}
  }
`;

export const Box = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  /* padding: 0.5rem; */
  p {
    width: 25%;
    ::after {
      content: ':';
    }
  }

  @media screen and (min-width: ${breakPoints.tabletMin}) and (max-width: ${breakPoints.tabletMax}) {
    p {
      width: 35%;
    }
  }

  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    p {
      width: 50%;
    }
  }
`;

export const SelectTheme = styled.select`
  ${RightStyleDefault};
`;

export const LabelInputFile = styled.label`
  ${RightStyleDefault}
`;

export const ButtonExportTodos = styled.button`
  ${RightStyleDefault}
`;
