import styled from 'styled-components';

export const PopUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-flow: column wrap;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  min-width: 20vw;
  border-radius: 7px;
  min-height: 15vh;
  padding: 1vw;
  z-index: 100;
  box-shadow: 1px 1px 1px 100vw rgba(0, 0, 0, 0.5);
  background-blend-mode: color;
  border: 1px solid ${(props) => props.theme.text};
`;

export const TextPopUp = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-flow: row wrap;
`;

export const SpanPopUp = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  align-self: center;
  flex-flow: row wrap;
`;

export const ButtonDeleteConfirm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-flow: row wrap;
  :hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

export const ButtonDeleteCancel = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-flow: row wrap;
  :hover {
    color: ${(props) => props.theme.error};
  }
`;
