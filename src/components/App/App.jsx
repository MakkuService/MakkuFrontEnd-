import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Paths from '../../utils/paths';

import {
  MainPage,
  FindingPage,
  InfoPage,
  SignUpPage,
  SignInPage,
  ComponetsPage,
} from '../../Pages'

export default function App() {
  return (
    <Routes>
      <Route index element={(<MainPage />)} />
      <Route path={Paths.FIND.PET} element={(<FindingPage />)} />
      <Route path={Paths.FIND.SHELTER} element={(<FindingPage />)} />
      <Route path={Paths.INFO} element={(<InfoPage />)} />
      <Route path={Paths.SIGN.UP} element={(<SignUpPage />)} />
      <Route path={Paths.SIGN.IN} element={(<SignInPage />)} />
      <Route path={Paths.UI} element={(<ComponetsPage />)} />
    </Routes>
  );
}
