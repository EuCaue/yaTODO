import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  updatePassword,
  updateProfile
} from 'firebase/auth';
import { collection, doc, updateDoc } from 'firebase/firestore';
import React, { useRef, useState } from 'react';
import {
  FaCheck,
  FaEdit,
  FaRegEye,
  FaRegEyeSlash,
  FaTrashAlt,
  FaUserCircle
} from 'react-icons/fa';
import { toast } from 'react-toastify';

import {
  getDownloadURL,
  ref,
  uploadBytes,
  deleteObject
} from 'firebase/storage';
import InputForm from '../../components/InputForm';
import { db, isFirebaseError, storage } from '../../services/firebase';
import {
  SettingsItem,
  Form,
  ButtonShowPassword,
  ButtonShowDelete,
  UserImage,
  SpanImage,
  ButtonEditInputStyled,
  UserContainer
} from './styled';
import { useAuthContext } from '../../utils/AuthProvider';
import PopUp from '../../components/PopUp';

interface ButtonEditProps {
  iconSize: number;
  setInputDisabled: (inputDisabled: boolean) => void;
  inputDisabled: boolean;
  $inputRef: React.RefObject<HTMLInputElement>;
}

function ButtonEditInput({
  iconSize,
  setInputDisabled,
  inputDisabled,
  $inputRef
}: ButtonEditProps): JSX.Element {
  const handleClick = () => {
    if ($inputRef.current) {
      // eslint-disable-next-line no-param-reassign
      $inputRef.current.disabled = !$inputRef.current.disabled;
      $inputRef.current.focus();
    }
    setInputDisabled(!inputDisabled);
  };
  return (
    <ButtonEditInputStyled
      type={inputDisabled ? 'submit' : 'button'}
      onClick={handleClick}
    >
      {inputDisabled ? <FaEdit size={iconSize} /> : <FaCheck size={iconSize} />}
    </ButtonEditInputStyled>
  );
}

export default function UserSettings({
  setIsLoading
}: {
  setIsLoading: (loading: boolean) => void;
}): JSX.Element {
  const { user, setUserPhoto, userPhoto } = useAuthContext();
  const usersCollection = collection(db, '/', 'users');
  const usersDoc = doc(usersCollection, user?.uid);
  const [showDeletePhoto, setShowDeletePhoto] = useState<boolean>(false);
  const [nameDisabled, setNameDisabled] = useState<boolean>(true);
  const [emailDisabled, setEmailDisabled] = useState<boolean>(true);
  const [newPasswordDisabled, setNewPasswordDisabled] = useState<boolean>(true);
  const [currentPasswordDisabled, setCurrentPasswordDisabled] =
    useState<boolean>(true);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showCurrentPassword, setShowCurrentPassword] =
    useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');

  const [currentPassword, setCurrentPassword] = useState<string>('');
  const $inputEditName = useRef<HTMLInputElement>(null);
  const $inputEditEmail = useRef<HTMLInputElement>(null);
  const $inputEditNewPassword = useRef<HTMLInputElement>(null);
  const $inputEditCurrentPassword = useRef<HTMLInputElement>(null);
  const $formCurrentPassword = useRef<HTMLFormElement>(null);
  const storageRef = ref(storage, `${user!.uid}/profilePicture.jpg`);
  const iconSize = 25;

  const handleChangeName = async (event?: React.FormEvent): Promise<void> => {
    event?.preventDefault();
    if (user && name.length > 4 && name.length < 255) {
      try {
        setIsLoading(true);
        await updateProfile(user, {
          displayName: name
        });
        await updateDoc(usersDoc, {
          name
        });
        $inputEditName.current!.disabled = !$inputEditName.current!.disabled;
        setNameDisabled(!nameDisabled);
        toast.success('Name Changed.');
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error("Can't change the user name, try again.");
      }
    } else {
      setIsLoading(false);
      toast.error('Name must be between 3 and 255 characters.');
    }
  };

  const handleChangeEmail = async (event?: React.FormEvent): Promise<void> => {
    event?.preventDefault();
    if (user && email !== '') {
      try {
        setIsLoading(true);
        await updateEmail(user, email);
        await updateDoc(usersDoc, {
          email
        });
        $inputEditEmail.current!.disabled = !$inputEditEmail.current!.disabled;
        setEmailDisabled(!emailDisabled);
        setIsLoading(false);
        toast.success('Email Changed.');
      } catch (error) {
        setIsLoading(false);
        if (
          isFirebaseError(error) &&
          error.code === 'auth/requires-recent-login'
        ) {
          setIsLoading(false);
          toast.error('Sorry, you need to logout to change your email.');
        }
      }
    }
  };

  const handleChangePassword = async (
    event: React.FormEvent
  ): Promise<void> => {
    event.preventDefault();

    if (
      user &&
      (newPassword.length > 6 || newPassword.length < 50) &&
      user.email
    ) {
      try {
        const crenditals = EmailAuthProvider.credential(
          user.email,
          currentPassword
        );
        setIsLoading(true);
        await reauthenticateWithCredential(user, crenditals);
        await updatePassword(user, newPassword);
        setNewPassword('');
        setCurrentPassword('');
        setCurrentPasswordDisabled(!currentPasswordDisabled);
        $inputEditCurrentPassword.current!.value = '';
        $inputEditCurrentPassword.current!.disabled =
          !$inputEditCurrentPassword.current!.disabled;
        $formCurrentPassword.current!.style.display = 'none';
        $inputEditNewPassword.current!.value = '';
        setIsLoading(false);
        toast.success('Password Changed!');
      } catch (error) {
        if (
          isFirebaseError(error) &&
          error.code === 'auth/requires-recent-login'
        ) {
          setIsLoading(false);
          toast.error('Sorry, you need to logout to change your password.');
        }

        if (isFirebaseError(error) && error.code === 'auth/wrong-password') {
          setIsLoading(false);
          toast.error('Invalid Password! ');
        }
      }
    }
  };

  const handleNewPassword = (event?: React.FormEvent): void => {
    event?.preventDefault();
    if (newPassword.length < 6 || newPassword.length > 50) {
      setIsLoading(true);
      toast.error('Password must be between 6 and 255 characters.');
      $formCurrentPassword.current!.style.display = 'none';
      setIsLoading(false);
    } else {
      $formCurrentPassword.current!.style.display = 'flex';
      setCurrentPasswordDisabled(!currentPasswordDisabled);
      setNewPasswordDisabled(true);
      $inputEditCurrentPassword.current!.disabled =
        !$inputEditCurrentPassword.current!.disabled;
      $inputEditCurrentPassword.current!.focus();
      $inputEditNewPassword.current!.disabled =
        !$inputEditNewPassword.current!.disabled;
      setIsLoading(false);
    }
  };

  const handleChangeImage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    if (!event.target || !event.target.files) return;
    const image = event.target.files[0];
    if (!image || !user) return;

    if (!image.type.startsWith('image/')) {
      toast.error(`File ${image.name} is not a image file`);
      return;
    }

    try {
      setIsLoading(true);
      await uploadBytes(storageRef, image);
      const photoURL = await getDownloadURL(storageRef);
      await updateProfile(user, { photoURL });
      setUserPhoto(photoURL);
      toast.success(`Profile Picture Changed!`);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error('Can not change the user image, try again.');
    }
  };

  const deleteUserImage = async () => {
    if (user) {
      try {
        setIsLoading(true);
        await updateProfile(user, { photoURL: '' });
        await deleteObject(storageRef);
        setUserPhoto(null);
        setShowDeletePhoto(!showDeletePhoto);
        setIsLoading(false);
        toast.success('Profile Picture Removed!');
      } catch (error) {
        toast.error('Can Delete the user image, try again.');
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <SettingsItem>
        <Form onSubmit={(e) => e.preventDefault()}>
          <UserContainer>
            <label htmlFor="profile-picture" className="profile-label">
              Change Profile Picture:
            </label>

            {userPhoto === null ? (
              <label
                htmlFor="profile-picture"
                style={{ cursor: 'pointer' }}
                className="user-icon"
              >
                <SpanImage userPhoto={userPhoto}>
                  <FaUserCircle size={103} />
                </SpanImage>
              </label>
            ) : (
              <>
                <label htmlFor="profile-picture">
                  <SpanImage>
                    <UserImage
                      src={userPhoto}
                      alt="User"
                      width="100px"
                      height="100px"
                    />
                  </SpanImage>
                </label>

                <ButtonShowDelete
                  type="button"
                  title="Delete Profile Picture?"
                  onClick={() => setShowDeletePhoto(!showDeletePhoto)}
                >
                  <FaTrashAlt size={iconSize} />
                </ButtonShowDelete>
              </>
            )}
          </UserContainer>

          <InputForm
            type="file"
            id="profile-picture"
            name="profile-picture"
            onChange={(e) => handleChangeImage(e)}
            required
          />
        </Form>
      </SettingsItem>
      <SettingsItem>
        <Form onSubmit={(e) => handleChangeName(e)}>
          <label htmlFor="userName">Change Name:</label>
          <InputForm
            ref={$inputEditName}
            type="text"
            title={user && user.displayName ? user.displayName : ''}
            defaultValue={
              user && typeof user.displayName === 'string'
                ? user.displayName
                : ''
            }
            id="userName"
            min={3}
            max={255}
            onChange={(e) => setName(e.target.value)}
            disabled
            required
          />
          <ButtonEditInput
            iconSize={iconSize}
            inputDisabled={nameDisabled}
            setInputDisabled={setNameDisabled}
            $inputRef={$inputEditName}
          />
        </Form>
      </SettingsItem>

      <SettingsItem>
        <Form onSubmit={(e) => handleChangeEmail(e)}>
          <label htmlFor="changeEmail">Change Email:</label>
          <InputForm
            type="text"
            defaultValue={user && user.email ? user.email : ''}
            title={user && user.email ? user.email : ''}
            ref={$inputEditEmail}
            id="changeEmail"
            onChange={(e) => setEmail(e.target.value)}
            disabled
            required
          />
          <ButtonEditInput
            iconSize={iconSize}
            inputDisabled={emailDisabled}
            setInputDisabled={setEmailDisabled}
            $inputRef={$inputEditEmail}
          />
        </Form>
      </SettingsItem>
      <SettingsItem>
        <Form onSubmit={(e) => handleNewPassword(e)}>
          <label htmlFor="newPassword">New Password:</label>
          <InputForm
            type={showNewPassword ? 'text' : 'password'}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            id="newPassword"
            ref={$inputEditNewPassword}
            placeholder="New Password here"
            disabled
            required
          />
          <ButtonShowPassword
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? (
              <FaRegEye size={18} />
            ) : (
              <FaRegEyeSlash size={18} />
            )}
          </ButtonShowPassword>
          <ButtonEditInput
            iconSize={iconSize}
            setInputDisabled={setNewPasswordDisabled}
            inputDisabled={newPasswordDisabled}
            $inputRef={$inputEditNewPassword}
          />
        </Form>
      </SettingsItem>

      <SettingsItem>
        <Form
          onSubmit={(e) => handleChangePassword(e)}
          style={{ display: 'none' }}
          ref={$formCurrentPassword}
        >
          <label htmlFor="currentPassword">Current Password:</label>
          <InputForm
            type={showCurrentPassword ? 'text' : 'password'}
            onChange={(e) => setCurrentPassword(e.target.value)}
            ref={$inputEditCurrentPassword}
            min={6}
            id="currentPassword"
            max={50}
            placeholder="Confirm Your Current Password "
            disabled
            required
          />
          <ButtonShowPassword
            type="button"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
          >
            {showCurrentPassword ? (
              <FaRegEye size={18} />
            ) : (
              <FaRegEyeSlash size={18} />
            )}
          </ButtonShowPassword>
          <ButtonEditInput
            iconSize={iconSize}
            setInputDisabled={setCurrentPasswordDisabled}
            inputDisabled={currentPasswordDisabled}
            $inputRef={$inputEditCurrentPassword}
          />
        </Form>
      </SettingsItem>

      <PopUp
        setShowPopUp={setShowDeletePhoto}
        showPopUp={showDeletePhoto}
        handleConfirm={deleteUserImage}
        arrayText={['Are you sure you want do delete the profile picture?']}
      />
    </>
  );
}
