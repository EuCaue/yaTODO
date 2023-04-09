import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Container } from './styled';

export default function Page404(): JSX.Element {
  const pageLocation = useParams();

  return (
    <Container>
      <p>
        Page <strong>{pageLocation['*']}</strong> not found.
      </p>
      <Link to="/">Return to Home</Link>
    </Container>
  );
}
