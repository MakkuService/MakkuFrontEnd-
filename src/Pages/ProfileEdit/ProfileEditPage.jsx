import React from 'react';

import { Content } from '../../components/Sections';
import ProfileEdit from '../../components/ProfileEdit';

import withUser from '../../hoc/withUser';

function ProfileEditPage() {
  return (<Content component={ <ProfileEdit /> } title="Profile" />);
}

export default withUser(ProfileEditPage, true);
