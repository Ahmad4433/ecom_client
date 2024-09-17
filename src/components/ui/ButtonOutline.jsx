import React from "react";
import "./buttonOutline.css";
const ButtonOutline = ({ onClick, type, children }) => {
  return (
    <button className="ui_outline_button" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default ButtonOutline;
