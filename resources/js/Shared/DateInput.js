import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default ({ label, name, className, errors = [], ...props }) => {

  return (
    <div className={className}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}:
        </label>
      )}
      <DatePicker 
        {...props}
        dateFormat="dd/MM/yyyy"
        className={`form-input px-3 py-3 relative rounded text-sm border-0 focus:outline-none focus:ring w-full ${errors.length ? 'error' : ''}`}
      /> 
      {errors && <div className="form-error">{errors}</div>}
    </div>
  );
};