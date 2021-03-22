import React from "react";
import "./Filterby.css";

export default function Filterby({ title, value, onInput }) {
  return (
    <div>
      <div type="sumbit" className="filter">
        {title}
      </div>
      <input type="text" value={value} onInput={onInput} />
      <div className="line"></div>
    </div>
  );
}
