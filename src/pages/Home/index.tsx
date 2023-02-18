import React from 'react';
import { Container, DivPara, LinkStyled } from './styled';

export default function Home(): JSX.Element {
  return (
    <Container>
      <DivPara>
        <p>
          yaTODO, it&apos;s <span>simple</span> and <span>minimalistic </span>
          todo app
        </p>
      </DivPara>
      <LinkStyled to="/app" target="_self">
        Go to the app
      </LinkStyled>
    </Container>
  );
}
