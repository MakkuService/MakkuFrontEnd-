import React from 'react';

import { Content } from '../../components/Sections';
import Main from './Main';

import withUser from '../../hoc/withUser';

function MainPage() {
  return (
    <Content component={<Main />} />
  );
}

export default withUser(MainPage, false);
