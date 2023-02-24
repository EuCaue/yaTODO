import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import Settings from '../pages/Settings';
import YaTodo from '../pages/yaTodo';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<YaTodo />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
