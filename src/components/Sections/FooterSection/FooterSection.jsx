import React from 'react';

import Navigation from '../../Navigation';

export default function FooterSection(props) {
  return (
    <section className="section section_footer">
      <div className="footer">
        <Navigation {...props} />
      </div>
    </section>
  );
}
