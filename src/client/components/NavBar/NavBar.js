import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../images/meal.png";

export const NavBar = () => {
  return (
    <div className="NavBarContainer">
      <div className="imgContainer">
        <Link>
          {" "}
          <div className="forImg">
            <img src={Logo} /> Cooking Pot
          </div>
        </Link>
      </div>
      <div className="listContainer">
        <div>
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/meals"}>
              <li>Meals</li>
            </Link>
            <Link to={"/addMeal"}>
              <li>Add Meal</li>
            </Link>
            <Link to={"/about"}>
              <li>About</li>
            </Link>
            <Link to={"/contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
