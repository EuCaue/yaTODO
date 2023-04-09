import React from 'react';
import { useAuthContext } from '../../utils/AuthProvider';

import { Container, DivPara, LinkStyled, SpanLinks } from './styled';

export default function Home(): JSX.Element {
  const { user } = useAuthContext();

  return (
    <Container>
      <DivPara>
        <p>
          yaTODO, it&apos;s <span>simple</span> and <span>minimalistic </span>
          todo app
        </p>
      </DivPara>
      <SpanLinks>
        {user ? (
          <LinkStyled to="/app" target="_self">
            Go to the app
          </LinkStyled>
        ) : (
          <>
            <LinkStyled to="/login" target="_self">
              Login
            </LinkStyled>

            <LinkStyled to="/register" target="_self">
              Register
            </LinkStyled>
          </>
        )}
      </SpanLinks>
    </Container>
  );
}
