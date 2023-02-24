import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { HamburgerMenu, HeaderTodo, MenuList } from './styled';

export default function Header(): JSX.Element {
  const [showMenuBurger, setShowMenuBurger] = useState<boolean>(false);
  return (
    <HeaderTodo>
      <HamburgerMenu
        type="button"
        onClick={() => setShowMenuBurger(!showMenuBurger)}
      >
        <RxHamburgerMenu
          size={34}
          style={{ rotate: showMenuBurger ? '30deg' : '0deg' }}
        />
      </HamburgerMenu>

      <MenuList
        style={{ display: showMenuBurger ? 'flex' : 'none' }}
        onMouseLeave={() => setShowMenuBurger(false)}
      >
        {window.location.pathname === '/' ? (
          false
        ) : (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}

        {window.location.pathname === '/app' ? (
          false
        ) : (
          <li>
            <Link to="/app">yaTodo</Link>
          </li>
        )}
        <li>
          <Link to="/settings">Settings</Link>
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
    </HeaderTodo>
  );
}
