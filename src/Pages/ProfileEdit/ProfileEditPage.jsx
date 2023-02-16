import React from 'react';

import { Content } from '../../components/Sections';
import withUser from '../../hoc/withUser';

function ProfileEditPage() {
  return (<Content component={
    <div className="not-found">
      <h2 className="title title_not-found">
        ProfileEditPage
      </h2>
    </div>
  } title="Profile" />);
}

export default withUser(ProfileEditPage, true);
