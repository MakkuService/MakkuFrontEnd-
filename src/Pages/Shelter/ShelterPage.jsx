import React from 'react';
import { useParams } from 'react-router-dom';

import { Content } from '../../components/Sections';
import Shelter from '../../components/Shelter';

import withUser from '../../hoc/withUser';

function ShelterPage() {
  const { id }  = useParams();

  return (<Content component={<Shelter />} title={`Shelter ${id}`} />);
}

export default withUser(ShelterPage, true);
