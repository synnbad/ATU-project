import React from "react";
import "./Dropdown.css";

const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
