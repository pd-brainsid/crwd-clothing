import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...props}) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...props} />
    {label ? (
      <label
        className={`${props.value.length ? 'shring' : ''} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
