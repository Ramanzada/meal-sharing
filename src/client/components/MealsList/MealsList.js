import React from "react";
import "./MealsList.css";
import { Link } from "react-router-dom";
import mealsContext from "../MealsContext";
import { FaCoins, FaMapPin } from "react-icons/fa";
import { Loader } from "../Loader/Loader";

export const MealsList = () => {
  const { isLoading, meals } = React.useContext(mealsContext);

  const mealsToRender = isLoading
    ? <Loader/>
    : meals.map((aMeal) => {
      return (
          <div className="recipeListContainer">
          <div className="recipeList" key={aMeal.idMeals}>
          <Link to={`/meal/${aMeal.idMeals}`}>{aMeal.title}</Link>
          <p>{aMeal.description}</p>
          <p><FaMapPin /> {aMeal.location}</p>
          <p> <FaCoins /> {aMeal.price} DKK </p>
          </div>
          </div>
        );
      });

  return (
    <div className="container">
    <div className="mealsContainer">
      <div className="recipeContainer">{mealsToRender}</div>
      </div>
      </div>
  );
}
