import React from 'react';
import { useParams } from 'react-router-dom';

import { Content } from '../../components/Sections';
import Pet from '../../components/Pet';

import withUser from '../../hoc/withUser';

function PetPage() {
  const { id }  = useParams();

  return (<Content
    component={
      <Pet id={id} />
    }
    title={`Pet ${id}`}
  />);
}

export default withUser(PetPage, true);
