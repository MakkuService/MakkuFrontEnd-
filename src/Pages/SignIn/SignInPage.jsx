import React from 'react';

import { Content } from '../../components/Sections';
import SignIn from './SignIn';

export default function SignInPage() {
  return (<Content component={<SignIn />} title="SignIn" />);
}
