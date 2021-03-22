import React from "react";
import imageSrc from "../../img/cat.jpg";
import "./Card.css";

function Card() {
 return (
     <div className="card">
    <div className="name">Ania Leicheinko</div>
      <div className="img">
      <img title="my-img" src={imageSrc} alt="my-img" />
      </div>
      <div className="age">I have 27 years old.</div>
      <div className="information">
       ania.leichenko@example.com (163)-188-2299
      </div>
       <div className="sex">Female</div>
    </div> );
}

export default Card;