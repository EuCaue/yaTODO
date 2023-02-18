import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import Settings from '../pages/Settings';
import YaTodo from '../pages/yaTodo';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Page404 />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/app',
    element: <YaTodo />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
]);

export default router;
