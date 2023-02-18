import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
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

      <MenuList style={{ display: showMenuBurger ? 'flex' : 'none' }}>
        {window.location.pathname === '/' ? (
          false
        ) : (
          <li>
            <a href="/">Home</a>
          </li>
        )}

        {window.location.pathname === '/app' ? (
          false
        ) : (
          <li>
            <a href="/app">yaTodo</a>
          </li>
        )}
        <li>
          <a href="/settings">Settings</a>
        </li>
        <li>
          <a
            href="https://github.com/EuCaue/yaTODO/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </li>
      </MenuList>
    </HeaderTodo>
  );
}
