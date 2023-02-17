import React from 'react';

import { Logo, Navigation } from '../ui';
import menuWithUser from '../../hoc/menuWithUser';

const MenuWithUser = menuWithUser(Navigation);

export default function Header(props) {
  return (
    <section className="section section_header">
      <Logo />
      <MenuWithUser {...props} />
    </section>
  );
}
