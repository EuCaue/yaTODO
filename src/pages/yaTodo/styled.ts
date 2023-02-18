import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding-bottom: 1rem;

  animation: 1.3s clipPath linear;
  @keyframes clipPath {
    from {
      clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    }
    to {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
`;
