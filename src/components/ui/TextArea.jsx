import React from "react";
import "./textArea.css";
const TextArea = ({ placeholder, row, onChange, value, required }) => {
  return (
    <textarea
      placeholder={placeholder}
      rows={row}
      required={required}
      value={value}
      onChange={onChange}
      className="ui_textarea"
    />
  );
};

export default TextArea;
