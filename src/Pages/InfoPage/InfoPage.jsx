import React from 'react';

import { Content } from '../../components/Sections';

import withUser from '../../hoc/withUser';

function InfoPage() {
  return (
    <Content component={<></>} title="Информация о приютах" />
  );
}

export default withUser(InfoPage, true);
