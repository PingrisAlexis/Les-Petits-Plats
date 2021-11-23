import {recipes} from "../../assets/data/data";
import {Markup} from "./markup";

const recipesContainer = document.getElementById("recipes-cards-container");
recipesContainer.innerHTML += recipes.map(recipe =>
    new Markup(recipe).getRecipeCard()).join('');

const ingredientsList = document.getElementById("ingredients-list");
// const allIngredients () =>
ingredientsList.innerHTML += recipes.map(recipe =>
    new Markup(recipe).getIngredientsList()).join('');
// console.log(getIngredientsList())
