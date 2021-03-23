import React from "react";
import "./Reset.css";

export default function Reset({ onClick }) {
  return (
    <div>
      <button type="text" className="filter" onClick={onClick}>
        RESET
      </button>
      <div className="line"></div>
    </div>
  );
}
