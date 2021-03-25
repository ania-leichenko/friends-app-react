import React from "react";
import "./Menu.css";
import Filterbysex from "./Filterbysex/Filterbysex";
import Filterby from "./Filterby/Filterby";
import Reset from "./Reset/Reset";
import Sorting from "./Sorting";

export default function Menu({
  fullName,
  setFullName,
  age,
  setAge,
  sortBy,
  setSortBy,
}) {
  const resetHandler = (event) => {
    event.preventDefault();
    setFullName("");
    setAge("");
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="menu">
      <form onSubmit={onSubmitHandler}>
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
        <Reset onClick={resetHandler} />
        <Sorting
          title="SORT BY NAME"
          isActive={sortBy[0] === "name"}
          activeButton={sortBy[1]}
          changeSortHandler={(clickOnButton) => setSortBy(['name', clickOnButton])}
        />
        <Sorting
          title="SORT BY AGE"
          isActive={sortBy[0] === "age"}
          activeButton={sortBy[1]}
          changeSortHandler={(clickOnButton) => setSortBy(['age', clickOnButton])}        />
      </form>
    </div>
  );
}
