import React from 'react';

import { NavLink } from 'react-router-dom';

export default function Navigation({ menu }) {
  return (
    <ul className={`navigation ${menu.style}`}>
      {menu.links.map((link, index) => (
        <li key={index}>
          <NavLink className={`links__item ${link.style}`} to={link.url}>
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
