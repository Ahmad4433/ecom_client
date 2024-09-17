import React from "react";
import "./table.css";
const Table = ({ headers, children }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((item, index) => {
            return <th key={index}>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
