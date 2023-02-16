import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Paths from '../../utils/paths';

import {
  MainPage,
  ShelterPage,
  PetPage,
  FindingPage,
  InfoPage,
  SignUpPage,
  SignInPage,
  NotFoundPage,
  OauthPage,
  ComponetsPage,
  ProfilePage,
} from '../../Pages'

export default function App() {
  return (
    <Routes>
      <Route index element={(<MainPage />)} />
      <Route path={Paths.FIND.PETS} element={(<FindingPage />)} />
      <Route path={Paths.FIND.SHELTERS} element={(<FindingPage />)} />
      <Route path={Paths.FIND.SHELTER} element={(<ShelterPage />)} />
      <Route path={Paths.FIND.PET} element={(<PetPage />)} />
      <Route path={Paths.INFO} element={(<InfoPage />)} />
      <Route path={Paths.PROFILE} element={(<ProfilePage />)} />
      <Route path={Paths.SIGN.UP} element={(<SignUpPage />)} />
      <Route path={Paths.SIGN.IN} element={(<SignInPage />)} />
      <Route path={Paths.OAUTH} element={(<OauthPage />)} />
      <Route path={Paths.UI} element={(<ComponetsPage />)} />
      <Route path="*" element={(<NotFoundPage />)} />
    </Routes>
  );
}
