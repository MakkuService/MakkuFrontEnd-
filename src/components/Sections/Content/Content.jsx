import React from 'react';

import { HeaderSection, FooterSection } from '../index';

import menuHeader from '../../../mock/menuHeader';
import menuFooter from '../../../mock/menuFooter';

export default function Content({ component, title }) {
  return (
    <>
      <HeaderSection menu={menuHeader} />
      {title ? <h1 className="title_content">{title}</h1> : null}
      { component }
      <FooterSection menu={menuFooter} />
    </>
  );
}
