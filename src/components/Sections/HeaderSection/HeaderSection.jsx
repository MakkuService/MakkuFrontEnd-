import React from 'react';

import Logo from '../../Logo';
import Navigation from '../../Navigation';

export default function HeaderSection(props) {
  return (
    <section className="section section_header">
      <Logo/>
      <Navigation {...props} />
    </section>
  );
}
