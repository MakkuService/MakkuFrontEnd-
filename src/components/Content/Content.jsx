import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import menuHeader from '../../mock/menuHeader';
import menuFooter from '../../mock/menuFooter';

export default function Content({ component, title }) {
  return (
    <div className="page">
      <Header menu={menuHeader} />

      {title ? <h1 className="title_content">{title}</h1> : null}
      { component }

      <Footer menu={menuFooter} />
    </div>
  );
}
