import React from 'react';

import { Navigation } from '../ui';

export default function Footer(props) {
  return (
    <section className="section section_footer">
      <div className="footer">
        <Navigation {...props} />
      </div>
    </section>
  );
}
