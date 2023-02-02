import React from 'react';
import { useParams } from 'react-router-dom';

import { Content } from '../../components/Sections';

export default function PetPage() {
  const { id }  = useParams();
  return (<Content component={<>{`Pet ${id}`}</>} title={`Pet ${id}`} />);
}
