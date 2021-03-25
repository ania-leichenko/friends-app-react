import React from "react";
import imageScr1 from "../../../img/arrow-top.jpg";
import imageScr2 from "../../../img/arrow-down.jpg";
import "./Sorting.css";

export default function Sorting({
  title,
  isActive,
  activeButton,
  changeSortHandler,
}) {
  return (
    <div className="wrap">
      <div className="knobage">{title}:</div>
      <div className="arrow">
        <button
          className={`arrowButton ${
            isActive && activeButton === 0 ? "is-active" : ""
          }`}
          onClick={() => changeSortHandler(0)}
        >
          <img title="arrow" src={imageScr1} alt="arrow" />
        </button>
        <button
          className={`arrowButton ${
            isActive && activeButton === 1 ? "is-active" : ""
          }`}
          onClick={() => changeSortHandler(1)}
        >
          <img title="arrow" src={imageScr2} alt="arrow" />
        </button>
      </div>
    </div>
  );
}
