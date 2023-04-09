import { FirebaseError } from 'firebase/app';
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import ButtonSubmit from '../../components/ButtonSubmit';
import InputForm from '../../components/InputForm';
import Loading from '../../components/Loading';
import { auth } from '../../services/firebase';
import { Container, Form } from './styled';

export default function RecoveryAccount(): JSX.Element {
  type Status = { isLoading: boolean; message: string };

  const [email, setEmail] = useState<string>('');
  const [buttonError, setButtonError] = useState<boolean>(true);
  const [status, setStatus] = useState<Status>({
    isLoading: false,
    message: ''
  });

  function isFirebaseError(error: unknown): error is FirebaseError {
    return (error as FirebaseError).code !== undefined;
  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    try {
      setStatus({ ...status, isLoading: true });
      await sendPasswordResetEmail(auth, email);
      setStatus({
        ...status,
        isLoading: false,
        message: `A password recovery email has been sent to ${email}`
      });
    } catch (error) {
      setStatus({
        ...status,
        isLoading: false,
        message: 'An error occurred while sending the password recovery email'
      });

      if (isFirebaseError(error) && error.code === 'auth/user-not-found') {
        setStatus({ ...status, message: `Email Not found: ${email}` });
      }
    }
  };

  const handleInputErrors = (): void => {
    if (!isEmail(email)) {
      setButtonError(true);
    } else {
      setButtonError(false);
    }
  };
  return (
    <Container>
      <h1>Recovery account</h1>
      <Form onSubmit={(e) => handleSubmit(e)} onKeyUp={handleInputErrors}>
        <InputForm
          type="email"
          placeholder="awesome@email.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <ButtonSubmit type="submit" disabled={buttonError}>
          Send Email
        </ButtonSubmit>
      </Form>
      <Loading isLoading={status.isLoading} />
      <p>{status.message}</p>
    </Container>
  );
}
