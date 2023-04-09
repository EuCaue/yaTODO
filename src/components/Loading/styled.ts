/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

type IsLoading = { isLoading: boolean; auth: boolean };
type LoadingMsg = { loadingMessage: string };

export const LoadingSpan = styled.span<IsLoading>`
  display: ${(props) => (props.isLoading ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  background-color: ${(props) =>
    props.auth === false ? 'rgba(0, 0, 0, 0.4)' : props.theme.primary};
  box-shadow: 1px 1px 1px 100vw rgba(0, 0, 0, 0.4);
  background-blend-mode: color;
  width: 100vw;
  height: 100vh;
`;

export const ParaLoading = styled.p<LoadingMsg>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: max-content;
  min-width: 6rem;
  min-height: 6rem;
  text-align: center;
  padding: 0.8rem;
  background-color: transparent;
  animation: 1.8s rotate alternate infinite;
  border-radius: 10%;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.secondary};
  ::after {
    content: '${(props) => props.loadingMessage}';
    text-align: center;
  }
  @keyframes rotate {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }
`;
