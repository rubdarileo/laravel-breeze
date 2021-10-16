import React from 'react';

export default ({
  label,
  name,
  className,
  children,
  errors = [],
  ...props
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}:
        </label>
      )}
      <select
        id={name}
        name={name}
        {...props}
        className={`form-select px-3 py-3 relative rounded text-sm border-0 focus:outline-none focus:ring w-full ${errors.length ? 'error' : ''}`}
      >
        {children}
      </select>
      {errors && <div className="form-error">{errors}</div>}
    </div>
  );
};
