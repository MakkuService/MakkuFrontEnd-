import React from 'react';

import { Content } from '../../components/Sections';

import withUser from '../../hoc/withUser';

function FindingPage() {
  return (
    <Content component={<>...</>} title="Найти питомца" />
  );
}

export default withUser(FindingPage, true);
