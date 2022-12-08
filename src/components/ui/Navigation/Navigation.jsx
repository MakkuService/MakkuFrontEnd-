import React from 'react';

export default function Navigation({ menu }) {
  return (
    <ul className={`navigation ${menu.style}`}>
      {menu.links.map((link, index) => (
        <li key={index}>
          <a className={`links__item ${link.style}`} href={link.url}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
}
