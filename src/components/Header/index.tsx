import React, { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

import { HeaderTodo, Nav } from './styled';
import { useGlobalContext } from '../../utils/GlobalContext';

export default function Header(): JSX.Element {
  const { currentTheme, setCurrentTheme } = useGlobalContext();

  return (
    <HeaderTodo>
      <Nav>
        <label htmlFor="theme">
          Theme
          <select
            name="theme"
            value={currentTheme}
            onChange={(e) => {
              setCurrentTheme(e.target.value);
              localStorage.setItem('currentTheme', e.target.value);
            }}
          >
            <option value="defaultDark">Dark</option>
            <option value="defaultLight">Light</option>
            <option value="rosePineDarkTheme">Rosé Pine Dark</option>
            <option value="rosePineLightTheme">Rosé Pine Light</option>
          </select>
        </label>

        <a
          href="https://github.com/EuCaue/yaTODO/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={34} />
        </a>
      </Nav>
    </HeaderTodo>
  );
}
