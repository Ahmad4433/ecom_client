import React from "react";
import "./button.css";
const Button = ({ children, onClick, disabled, type, outline,small }) => {
  return (
    <button
      style={{width:small && '200px'}}
      className="ui_button"
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
