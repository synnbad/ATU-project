import React from "react";
import "./InputField.css";

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
