import React from 'react'
import "./Filterbysex.css"

export default function Filterbysex() {
    return (
        <div>
        <div>FILTER BY SEX</div>
        <div>
          <input id="radioButton1" type="radio" className="radioButton"></input>
          <label htmlFor="radioButton1">Male</label>
        </div>
        <div>
          <input id="radioButton2" type="radio" className="radioButton"></input>
          <label htmlFor="radioButton2">Female</label>
        </div>
        <div>
          <input id="radioButton3" type="radio" className="radioButton"></input>
          <label htmlFor="radioButton3">All</label>
          <div className="line"></div>
        </div>
        </div>
    )
}

