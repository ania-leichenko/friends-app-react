import React from "react";
import imageScr1 from "../../../img/arrow-top.jpg";
import imageScr2 from "../../../img/arrow-down.jpg";
import "./Sorting.css"

export default function Sorting() {
  return (
    <div>
      <div className="wrap">
        <div className="knobage">BY AGE:</div>
        <div className="arrow">
          <button>
            <img title="arrow" src={imageScr1} alt="arrow" />
          </button>
          <button>
            <img title="arrow" src={imageScr2} alt="arrow" />
          </button>
        </div>
      </div>
      <div className="wrap">
        <div className="knobname">BY NAME:</div>
        <div className="arrow">
          <button>
            <img title="arrow" src={imageScr1} alt="arrow" />
          </button>
          <button>
            <img title="arrow" src={imageScr2} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
