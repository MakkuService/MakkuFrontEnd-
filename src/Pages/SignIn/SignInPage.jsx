import React from 'react';

import { Content } from '../../components/Sections';
import SignIn from './SignIn';

import withUser from '../../hoc/withUser';

function SignInPage() {
  return (<Content component={<SignIn />} />);
}

export default withUser(SignInPage, false);
