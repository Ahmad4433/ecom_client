import React from "react";
import "./input.css";
const Input = ({ type, placeholder, onChange, value, required }) => {
  return (
    <input
      
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      value={value}
      className="ui_input"
    />
  );
};

export default Input;
