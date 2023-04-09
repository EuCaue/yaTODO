import React from 'react';

import { LoadingSpan, ParaLoading } from './styled';

type IsLoading = {
  isLoading: boolean;
  loadingMessage?: string;
  auth?: boolean;
};

export default function Loading({
  isLoading,
  loadingMessage,
  auth
}: IsLoading): JSX.Element {
  return (
    <LoadingSpan isLoading={isLoading} auth={auth ?? false}>
      <ParaLoading loadingMessage={loadingMessage ?? 'Loading'} />
    </LoadingSpan>
  );
}

Loading.defaultProps = { loadingMessage: 'Loading', auth: false };
