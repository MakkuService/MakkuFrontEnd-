import React from 'react';

export default function InputField({
  name,
  value,
  handlerChange,
  placeholder,
  className,
}) {
  return (
    <input
      className={`input ${className ? className : ''}`}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handlerChange}
    />
  );
}
