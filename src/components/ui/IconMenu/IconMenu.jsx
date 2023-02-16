import React from 'react';

export default function IconMenu({ onClick }) {

  const buttons = [
    {
      label: 'vk',
      src: 'vk',
    },
    {
      label: 'ya',
      src: 'ya',
    },
    {
      label: 'google',
      src: 'google',
    },
  ];

  return (
    <ul className="oauth m_40">
      {buttons.map(({ src, label}) =>
        <li className="oauth__icon" key={label}>
          <button
            type="button"
            className={`icon icon_${label}`}
            onClick={() => onClick(src)}
          >
            <span className="icon__label">
              {label}
            </span>
          </button>
        </li>
      )}
    </ul>
  );
}
