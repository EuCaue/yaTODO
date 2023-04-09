import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import RecoveryAccount from '../pages/RecoveryAccount';
import Register from '../pages/Register';
import Settings from '../pages/Settings';
import YaTodo from '../pages/yaTodo';
import PrivateRoute from './PrivateRoute';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/accountRecovery" element={<RecoveryAccount />} />

      <Route path="/app" element={<PrivateRoute />}>
        <Route path="/app" element={<YaTodo />} />
      </Route>

      <Route path="/userSettings" element={<PrivateRoute />}>
        <Route path="/userSettings" element={<Settings />} />
      </Route>

      <Route path="/settings" element={<PrivateRoute />}>
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
