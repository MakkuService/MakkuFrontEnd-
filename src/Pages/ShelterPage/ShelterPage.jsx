import React from 'react';
import { useParams } from 'react-router-dom';

import { Content } from '../../components/Sections';

export default function ShelterPage() {
  const { id }  = useParams();
  return (<Content component={<>{`Shelter ${id}`}</>} title={`Shelter ${id}`} />);
}
