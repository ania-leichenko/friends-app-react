import React from "react";
import "./App.css";
import Card from "./components/Card";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="container">
      <div className="left">
        <Menu />
      </div>
      <div className="right">
        <Card />
      </div>
    </div>
  );
}

export default App;
