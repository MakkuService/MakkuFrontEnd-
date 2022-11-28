import React from 'react';

export default function Button({ style, handler, text }) {
  return (
    <button type="button" className={`button ${style}`} onClick={handler}>
      {text}
    </button>
  );
}
