/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { breakPoints } from '../../assets/styles/breakpoints';

type User = { userPhoto?: null | string };

export const SettingsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  gap: 1rem;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap;
  width: 65%;

  label {
    width: 13rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: text;
  }
  label:nth-last-of-type(2) {
    width: 19rem;
  }

  input {
    width: 80%;
    max-width: 150%;
    border: none;
    :disabled {
      cursor: text;
      border: 1px solid ${(props) => props.theme.text};
    }
  }

  .user-icon {
    width: auto;
    margin-right: 13rem;
  }

  @media screen and (min-width: ${breakPoints.tabletMin}) and (max-width: ${breakPoints.tabletMax}) {
    width: 75%;
    /* flex-flow: row wrap; */

    button {
      right: 6%;
      :nth-last-child(2) {
        position: absolute;
        right: 2%;
      }
    }
  }

  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    width: 80%;
    gap: 0.5rem;
    flex-flow: column wrap;

    span:hover::after {
      display: none;
    }

    button {
      position: static;
      svg {
        width: 75%;
        height: 75%;
      }
      :nth-last-child(2) {
        svg {
          width: 100%;
          height: 100%;
        }
        position: absolute;
        translate: 0 2px;
        right: 1.8%;
      }
    }

    label {
      justify-content: center;
    }

    span:nth-last-child(1) {
      width: auto;
    }

    .user-icon {
      margin-right: 0;
    }

    .profile-label {
      width: 100% !important;
    }

    input {
      width: 100%;
      max-width: 150%;
    }
  }
`;

export const ButtonEditInputStyled = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 12%;
  background-color: transparent;
`;

export const ButtonShowPassword = styled(ButtonEditInputStyled)`
  right: 18%;
`;

export const UserImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const SpanImage = styled.span<User>`
  z-index: 10;
  text-align: center;
  width: 0;
  position: relative;
  border-radius: 50%;

  :hover::after {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    opacity: 0.8;
    background-color: ${(props) => props.theme.primary};
    border: 1px solid ${(props) => props.theme.text};
    content: '${(props) =>
      props.userPhoto === null ? 'Upload Photo' : 'Change Photo'}';
  }
`;

export const ButtonShowDelete = styled(ButtonEditInputStyled)`
  right: 12.5%;
`;

export const DeletePhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  text-align: center;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  min-height: 15%;
  z-index: 20;
  border-radius: 7px;
  padding: 1rem;
  background-color: ${(props) => props.theme.secondary};
  box-shadow: 1px 1px 1px 100vw ${(props) => `${props.theme.primary}90`};
  border: 1px solid ${(props) => props.theme.text};

  @media screen and (min-width: ${breakPoints.mobileMin}) and (max-width: ${breakPoints.mobileMax}) {
    width: 90%;
    box-shadow: 1px 1px 1px 100vh ${(props) => `${props.theme.primary}90`};
  }
`;

export const DeletePhotoText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  background-color: ${(props) => props.theme.secondary};
`;

export const DeleteButtonSpan = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-self: center;
  flex-flow: row nowrap;
  width: auto;
  gap: 1rem;
  background-color: ${(props) => props.theme.secondary};
  button {
    position: static !important;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    background-color: ${(props) => props.theme.secondary};
    :first-child:hover {
      color: ${(props) => props.theme.accentColor};
    }
    :hover {
      color: ${(props) => props.theme.error};
    }
  }
`;
