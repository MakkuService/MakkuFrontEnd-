import React, { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  const {
    errorText = '',
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
        <label htmlFor={id} className={`inbox__label${errorText ? ' inbox__label_error' : ''}`}>
          {label}
        </label>}
      <input
        ref={ref}
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        className={`${className}${errorText ? ' inbox__input_error' : ''}`}
      />
      {
        errorText
        && <span className={`${label}-input-error inbox__input_error-help`}>{ errorText }</span>
      }
    </div>
  );
});

export default Input;
