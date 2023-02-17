import React from 'react';

import { Logo, Navigation } from '../ui';

export default function Header(props) {
  return (
    <section className="section section_header">
      <Logo />
      <Navigation {...props} />
    </section>
  );
}
