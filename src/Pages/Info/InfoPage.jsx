import React from 'react';

import { Content } from '../../components/Sections';
import Info from '../../components/Info';

import withUser from '../../hoc/withUser';

function InfoPage() {
  return ( <Content component={<Info />} title="Информация о приютах" />);
}

export default withUser(InfoPage, true);
