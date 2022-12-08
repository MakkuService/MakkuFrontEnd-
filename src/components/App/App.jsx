import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainPage, ComponetsPage } from '../../Pages'

export default function App() {
  return (
    <Routes>
      <Route index element={(<MainPage />)} />
      <Route path="/ui" element={(<ComponetsPage />)} />
    </Routes>
  );
}
