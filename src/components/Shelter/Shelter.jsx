import React from 'react';

import { useParams } from 'react-router-dom';

export default function Shelter() {
  const { id }  = useParams();
  return (<>{`Shelter ${id}`}</>);
}
