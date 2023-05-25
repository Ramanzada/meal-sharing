import React from "react";
import "./Main.css";
import PotImg from "../images/meal.png";

export const Main = () => {
  return (
    <div className="mainPage">
      <h1>"It is an Iraqi restaurant serving Iraqi food in Denmark"</h1>
      <img className="MainImg" src={PotImg} />
    </div>
  );
};
