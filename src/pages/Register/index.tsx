import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import { FirebaseError } from 'firebase/app';
import { collection, doc, setDoc } from 'firebase/firestore';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

import Loading from '../../components/Loading';
import { auth, db } from '../../services/firebase';
import {
  ButtonShowPassword,
  Container,
  Form,
  SpanErrorForm,
  SpanInputForm
} from './styled';
import InputForm from '../../components/InputForm';
import ButtonSubmit from '../../components/ButtonSubmit';

export default function Register() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordConfirmError, setPasswordConfirmError] =
    useState<boolean>(false);
  const [buttonError, setButtonError] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [showFirstPassword, setShowFirstPassword] = useState<boolean>(false);
  const [showSecondPassword, setShowSecondPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleInputErrors = (): void => {
    if (name.length < 3 || name.length > 255) {
      setNameError(true);
      setButtonError(true);
      return;
    }
    setNameError(false);
    setButtonError(false);

    if (!isEmail(email)) {
      setEmailError(true);
      setButtonError(true);
      return;
    }
    setEmailError(false);
    setButtonError(false);

    if (password.length < 6 || password.length > 50) {
      setPasswordError(true);
      setButtonError(true);
      return;
    }
    setPasswordError(false);
    setButtonError(false);

    if (passwordConfirm === '' || passwordConfirm !== password) {
      setPasswordConfirmError(true);
      setButtonError(true);
    } else {
      setPasswordConfirmError(false);
      setButtonError(false);
    }
  };
  function isFirebaseError(error: unknown): error is FirebaseError {
    return (error as FirebaseError).code !== undefined;
  }
  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    try {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, {
        displayName: name
      });
      const data = {
        name: user.displayName,
        email: user.email,
        todos: []
      };
      const usersCollection = collection(db, '/', 'users');
      const usersDoc = doc(usersCollection, user.uid);
      await setDoc(usersDoc, data);
      setLoading(false);
    } catch (error) {
      if (
        isFirebaseError(error) &&
        error.code === 'auth/email-already-in-use'
      ) {
        toast.error('E-mail already registered');
        setLoading(false);
        return;
      }
      setLoading(false);
      toast.error('An error occurred, try again!');
      return;
    }
    if (!loading) navigate('/app');
    toast.success('Account Created with success!');
  };

  return (
    <>
      <Form
        onSubmit={(e) => handleSubmit(e)}
        name="registration_form"
        onKeyUp={handleInputErrors}
      >
        <SpanInputForm>
          <InputForm
            type="name"
            min={3}
            max={255}
            placeholder="myName"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <SpanErrorForm style={{ display: nameError ? 'flex' : 'none' }}>
            Name must be between 3 and 255 characters.
          </SpanErrorForm>
        </SpanInputForm>

        <SpanInputForm>
          <InputForm
            type="email"
            placeholder="myEmail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <SpanErrorForm style={{ display: emailError ? 'flex' : 'none' }}>
            Email is not valid.
          </SpanErrorForm>
        </SpanInputForm>

        <SpanInputForm>
          <InputForm
            type={showFirstPassword ? 'text' : 'password'}
            min={6}
            max={50}
            placeholder="myPassword"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <ButtonShowPassword
            type="button"
            onClick={() => setShowFirstPassword(!showFirstPassword)}
          >
            {showFirstPassword ? (
              <FaRegEye size={18} />
            ) : (
              <FaRegEyeSlash size={18} />
            )}
          </ButtonShowPassword>
          <SpanErrorForm
            style={{ display: passwordError ? 'flex' : 'none', zIndex: '2' }}
          >
            Password must be between 6 and 255 characters.
          </SpanErrorForm>
        </SpanInputForm>

        <SpanInputForm>
          <InputForm
            type={showSecondPassword ? 'text' : 'password'}
            min={6}
            max={50}
            placeholder="myPasswordAgain"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
          <ButtonShowPassword
            type="button"
            onClick={() => setShowSecondPassword(!showSecondPassword)}
          >
            {showSecondPassword ? (
              <FaRegEye size={18} />
            ) : (
              <FaRegEyeSlash size={18} />
            )}
          </ButtonShowPassword>

          <SpanErrorForm
            style={{ display: passwordConfirmError ? 'flex' : 'none' }}
          >
            Passwords do not match.
          </SpanErrorForm>
        </SpanInputForm>

        <SpanInputForm
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1rem'
          }}
        >
          <ButtonSubmit disabled={buttonError} type="submit">
            Create account
          </ButtonSubmit>
          <Link to="/login">Already have account?</Link>
        </SpanInputForm>
      </Form>
      <Loading isLoading={loading} />
    </>
  );
}
