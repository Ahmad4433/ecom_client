import React from "react";
import "./select.css";

const Select = ({ options, onChange, value, placeholder, onClick }) => {
  return (
    <select
      value={value}
      onClick={onClick}
      className="ui_select"
      onChange={onChange}
    >
      <option disabled value="">
        {placeholder}
      </option>

      {options?.map((item, index) => (
        <option key={index}>{item.title}</option>
      ))}
    </select>
  );
};

export default Select;
