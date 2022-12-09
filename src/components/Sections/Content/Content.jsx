import React from 'react';

import { HeaderSection, FooterSection } from '../index';

import menuHeader from '../../../menuHeader';
import menuFooter from '../../../menuFooter';

export default function Content({ component }) {
  return (
    <div className="root">
      <HeaderSection menu={menuHeader} />
      { component }
      <FooterSection menu={menuFooter} />
    </div>
  );
}
