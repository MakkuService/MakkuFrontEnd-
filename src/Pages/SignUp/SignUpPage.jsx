import React from 'react';

import { Content } from '../../components/Sections';
import SignUp from './SignUp';

export default function SignUpPage() {
  return ( <Content component={<SignUp />} title="SignUp" /> );
}
