import React from 'react';

import { Content } from '../../components/Sections';
import SignUp from './SignUp';

import withUser from '../../hoc/withUser';

function SignUpPage() {
  return ( <Content component={<SignUp />} /> );
}

export default withUser(SignUpPage, false);
