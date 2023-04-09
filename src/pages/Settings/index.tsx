import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, SettingsContainer } from './styled';
import AppSettings from '../AppSettings';
import Loading from '../../components/Loading';
import UserSettings from '../UserSettings';

export default function Settings(): JSX.Element {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Container>
      <SettingsContainer>
        <h1>{pathname === '/settings' ? 'App Settings' : 'User Settings'}</h1>
        {pathname === '/settings' ? (
          <AppSettings />
        ) : (
          <UserSettings setIsLoading={setIsLoading} />
        )}
        <h1>{pathname === '/settings' ? 'User Settings' : 'App Settings'}</h1>
        {pathname === '/settings' ? (
          <UserSettings setIsLoading={setIsLoading} />
        ) : (
          <AppSettings />
        )}
      </SettingsContainer>
      <Loading isLoading={isLoading} />
    </Container>
  );
}
