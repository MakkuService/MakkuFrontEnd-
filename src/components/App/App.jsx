import React from 'react';

import {
  HeaderSection,
  MainSection,
  SlidesSection,
  PaySection,
  CarouselSection,
  ContactSection,
  FooterSection,
} from '../Sections';

import menuHeader from '../../menuHeader';
import menuFooter from '../../menuFooter';

export default function App() {
  return (
    <div className="root">
      <HeaderSection menu={menuHeader} />
      <MainSection />
      <SlidesSection />
      <PaySection />
      <CarouselSection />
      <ContactSection />
      <FooterSection menu={menuFooter} />
    </div>
  );
}
