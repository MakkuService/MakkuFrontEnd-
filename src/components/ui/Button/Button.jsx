import React from 'react';

export default function Button({ style, handler, text, submit }) {
  return (
    <button type={ submit ? 'submit' : 'button'} className={`button ${style}`} onClick={handler}>
      {text}
    </button>
  );
}
