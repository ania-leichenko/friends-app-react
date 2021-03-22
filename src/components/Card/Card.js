import React from "react";
import "./Card.css";

function Card({ user }) {
  return (
    <div className={`card ${user.gender}`}>
      <div className="name">
        {user.name.title}
        {user.name.first}
        {user.name.last}
      </div>
      <div
        className="img"
        style={{ backgroundImage: `url(${user.picture.medium})` }}
      ></div>
      <div className="age">I have {user.dob.age} years old.</div>
      <div className="information">
        {user.email}
        {user.cell}
      </div>
      <div className="sex">{user.gender}</div>
    </div>
  );
}

export default Card;
