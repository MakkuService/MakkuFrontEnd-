import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  MainPage,
  FindingPage,
  ComponetsPage,
  InfoPage,
  SignUpPage,
  SignInPage
} from '../../Pages'

export default function App() {
  return (
    <Routes>
      <Route index element={(<MainPage />)} />
      <Route path="/findingpet" element={(<FindingPage />)} />
      <Route path="/findingshelter" element={(<FindingPage />)} />
      <Route path="/info" element={(<InfoPage />)} />
      <Route path="/signup" element={(<SignUpPage />)} />
      <Route path="/signin" element={(<SignInPage />)} />

      <Route path="/ui" element={(<ComponetsPage />)} />
    </Routes>
  );
}
