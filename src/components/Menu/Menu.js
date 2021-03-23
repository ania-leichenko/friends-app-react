import React from "react";
import "./Menu.css";
import Filterbysex from "./Filterbysex/Filterbysex";
import Filterby from "./Filterby/Filterby";
import Reset from "./Reset/Reset";
import Sorting from "./Sorting";

export default function Menu({ fullName, setFullName, age, setAge }) {
  return (
    <div className="menu">
      <form>
        <Filterbysex />
        <Filterby
          title="FILTER BY NAME"
          value={fullName}
          onInput={(event) => setFullName(event.target.value)}
        />
        <Filterby
          title="FILTER BY AGE"
          value={age}
          onInput={(event) => setAge(event.target.value)}
        />
        <Reset />
        <Sorting />
      </form>
    </div>
  );
}
