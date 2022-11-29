import React from 'react';

export default function InputField({
  name,
  value,
  handlerChange,
  placeholder,
}) {
  return (
    <input
      className="input"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handlerChange}
    />
  );
}
