import React, { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  const {
    errorText = '',
    name,
    type,
    onChange,
    label,
    id,
    value,
    placeholder,
    className,
  } = props;
  return (
    <div className="inbox m_20">
      {label &&
        <label htmlFor={id} className={`input__label${errorText ? ' input__label_error' : ''}`}>
          {label}
        </label>}
      <input
        ref={ref}
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        className={`${className}${errorText ? ' input_error' : ''}`}
      />
      {
        errorText
        && <span className={`${name}-input-error input_error-help`}>{ errorText }</span>
      }
    </div>
  );
});

export default Input;
