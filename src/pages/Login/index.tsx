import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FirebaseError } from 'firebase/app';
import isEmail from 'validator/lib/isEmail';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

import {
  Form,
  Container,
  SpanLinks,
  LinkStyled,
  ButtonShowPassword,
  SpanInputForm
} from './styled';
import Loading from '../../components/Loading';
import InputForm from '../../components/InputForm';
import ButtonSubmit from '../../components/ButtonSubmit';
import { auth } from '../../services/firebase';

export default function Login(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [buttonError, setButtonError] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const isFirebaseError = (error: unknown): error is FirebaseError =>
    (error as FirebaseError).code !== undefined;

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
    } catch (error) {
      if (isFirebaseError(error) && error.code === 'auth/user-not-found') {
        toast.error('User not found.');
        setLoading(false);
        return;
      }

      if (isFirebaseError(error) && error.code === 'auth/wrong-password') {
        toast.error('Invalid Credentials.');
        setLoading(false);
        return;
      }

      if (isFirebaseError(error) && error.code === 'auth/too-many-requests') {
        toast.error(
          'Too many login requests, try again later ou recover your password.'
        );
        setLoading(false);
        return;
      }
      setLoading(false);
      toast.error('An error occurred, try again!');
    }
    if (!loading) navigate('/app');
    toast.success('Logged in.');
  };

  const handleInputErrors = (): void => {
    if (password.length < 6 || !isEmail(email)) {
      setButtonError(true);
    } else {
      setButtonError(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)} onKeyUp={handleInputErrors}>
        <SpanInputForm>
          <InputForm
            type="email"
            required
            placeholder="myAwesome@email.com"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </SpanInputForm>
        <SpanInputForm>
          <InputForm
            type={showPassword ? 'text' : 'password'}
            required
            placeholder="myPassword"
            min={6}
            max={50}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <ButtonShowPassword
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaRegEye size={18} />
            ) : (
              <FaRegEyeSlash size={18} />
            )}
          </ButtonShowPassword>
        </SpanInputForm>

        <ButtonSubmit disabled={buttonError} type="submit">
          Login
        </ButtonSubmit>
      </Form>

      <SpanLinks>
        <LinkStyled to="/register">Don&apos;t have account?</LinkStyled>
        <LinkStyled to="/accountRecovery">Forget your password?</LinkStyled>
      </SpanLinks>
      <Loading isLoading={loading} />
    </Container>
  );
}
