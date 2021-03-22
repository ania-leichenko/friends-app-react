import React from "react";
import "./Menu.css";
import Filterbysex from "./Filterbysex/Filterbysex";
import Filterby from "./Filterby/Filterby";
import Reset from "./Reset/Reset";
import Sorting from "./Sorting";

export default function Menu() {
  return (
    <div className="menu">
      <form>
        <Filterbysex />
        <Filterby />
        <Reset />
        <Sorting />
      </form>
    </div>
  );
}
