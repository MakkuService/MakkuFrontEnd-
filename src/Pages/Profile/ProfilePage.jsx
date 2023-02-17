import React from 'react';

import { Content } from '../../components/Sections';
import Profile from '../../components/Profile';

import withUser from '../../hoc/withUser';

function ProfilePage() {
  return (<Content component={
    <div className="not-found">
      <Profile />
    </div>
  } title="Profile" />);
}

export default withUser(ProfilePage, true);
