import React, { useEffect, useState } from 'react';
import { FaGithub, FaUserCircle } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebase';
import { useAuthContext } from '../../utils/AuthProvider';
import {
  HamburgerMenu,
  HeaderTodo,
  MenuList,
  UserContainer,
  UserList
} from './styled';

export default function Header(): JSX.Element {
  const [showMenuBurger, setShowMenuBurger] = useState<boolean>(false);
  const [showUserList, setShowUserList] = useState<boolean>(false);
  const { user, setUser, userPhoto } = useAuthContext();
  const navigate = useNavigate();

  const handleSignOut = (): void => {
    setUser(null);
    auth.signOut();
    navigate('/');
  };

  useEffect(() => {
    const handleClick = () => {
      setShowMenuBurger(false);
      setShowUserList(false);
    };

    const anchors = document.querySelectorAll('a');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', handleClick);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <HeaderTodo style={{ display: user ? 'flex' : 'none' }}>
      <HamburgerMenu
        type="button"
        onClick={() => setShowMenuBurger(!showMenuBurger)}
      >
        <RxHamburgerMenu
          size={34}
          style={{
            rotate: showMenuBurger ? '30deg' : '0deg'
          }}
        />
      </HamburgerMenu>

      <MenuList
        style={{ display: showMenuBurger ? 'flex' : 'none' }}
        onMouseLeave={() => setShowMenuBurger(false)}
      >
        <li>
          <Link to="/app">yaTodo</Link>
        </li>

        <li>
          <Link to="/settings"> Settings</Link>
        </li>

        <li>
          <Link
            to="https://github.com/EuCaue/yaTODO/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={24} />
          </Link>
        </li>
      </MenuList>

      <UserContainer>
        <button type="button" onClick={() => setShowUserList(!showUserList)}>
          {userPhoto ? (
            <img
              src={userPhoto}
              alt="User"
              width="50px"
              height="50px"
              style={{ borderRadius: '50%' }}
            />
          ) : (
            <FaUserCircle size={50} />
          )}
        </button>
        <UserList
          style={{ display: showUserList ? 'flex' : 'none' }}
          onMouseLeave={() => setShowUserList(false)}
        >
          <li
            title={
              typeof user?.displayName === 'string' ? user?.displayName : ''
            }
          >
            User: {user?.displayName?.slice(0, 10)}
            {user?.displayName && user.displayName.length > 10 && '...'}
          </li>
          <li>
            <Link to="/userSettings">User Settings</Link>
          </li>
          <li>
            <button type="button" onClick={handleSignOut}>
              Sign Out
            </button>
          </li>
        </UserList>
      </UserContainer>
    </HeaderTodo>
  );
}
