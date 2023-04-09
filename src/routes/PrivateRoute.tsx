import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../utils/AuthProvider';

interface PrivateRouteProps {
  open?: boolean;
}

export default function PrivateRoute({ open }: PrivateRouteProps): JSX.Element {
  const { user } = useAuthContext();
  if (open) return <Outlet />;
  return user === null ? <Navigate to="/login" /> : <Outlet />;
}

PrivateRoute.defaultProps = { open: false };
