import React from "react";
import "./Filterby.css";

export default function Filterby() {
  return (
    <div>
      <div>
        <button type="sumbit" className="filter" id="filterbynamebotton">
          FILTER BY NAME
        </button>
        <input type="text" id="username"></input>
      </div>
      <div>
        <div className="line"></div>
        <button type="sumbit" className="filter" id="filterbyage">
          FILTER BY AGE
        </button>
        <input type="text" id="userage"></input>
      </div>
      <div className="line"></div>
    </div>
  );
}
