import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import {MealsList} from "./components/MealsList/MealsList";
import { useMeals } from "./components/UseMeals";
import { MealsProvider } from "./components/MealsContext";
import { MealById } from "./components/MealByID";
import { AddMeal } from "./components/AddMeal/AddMeal";
import { NavBar } from "./components/NavBar/NavBar";
import { Main } from "./components/Main/Main";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  const { isLoading, meals } = useMeals();

  const contextValue = { isLoading, meals };

  return (
    <Router>
      <NavBar />
      <MealsProvider value={contextValue}>
        <Switch>
          <Route exact to path="/">
            <Main />
          </Route>
          <Route exact to path="/meals">
            <MealsList />
          </Route>
          <Route exact path="/meal/:mealId">
            <MealById />
          </Route>
          <Route exact path="/addMeal">
            <AddMeal />
          </Route>
          <Route exact to path="/about">
            <About />
          </Route>
          <Route exact to path="/contact">
            <Contact />
          </Route>
          <Route exact path="/test-component">
            <TestComponent></TestComponent>
          </Route>
        </Switch>
        <Footer />
      </MealsProvider>
    </Router>
  );
}

export default App;
