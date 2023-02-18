import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { Container } from './styled';

export default function Page404(): JSX.Element {
  const pageLocation = useParams();
  const navigate = useNavigate();

  return (
    <Container>
      <p>
        Page <strong>{pageLocation['*']}</strong> not found
      </p>
      <Link to={`${navigate(-1)}`}>Return to Previous Page</Link>
    </Container>
  );
}
