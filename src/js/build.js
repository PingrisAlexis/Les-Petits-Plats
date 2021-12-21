import {recipes} from "../../assets/data/data";
import {Markup} from "./markup";
import {dataSource} from './dataLogic';
import {
    generateAppliancesTags,
    generateIngredientsTags,
    generateUstensilsTags
} from "./categoriesTag";

export const recipesToDisplay = (recipes) => {
    const recipesContainer = document.getElementById("recipes-cards-container");
    recipesContainer.innerHTML = recipes.map(recipe =>
        new Markup(recipe).getRecipeCard()).join('');
}

export const ingredientsToDisplay = (ingredients) => {
    const ingredientsList = document.getElementById("ingredients-list");
    ingredientsList.innerHTML = ingredients.map(ingredient =>
        new Markup(ingredient).getIngredientsList()).join('');
    generateIngredientsTags();
}

export const appliancesToDisplay = (appliances) => {
    const appliancesList = document.getElementById("appliances-list");
    appliancesList.innerHTML = appliances.map(appliance =>
        new Markup(appliance).getAppliancesList()).join('');
    generateAppliancesTags();
}

export const ustensilsToDisplay = (usentils) => {
    const ustensilsList = document.getElementById("ustensils-list");
    ustensilsList.innerHTML = usentils.map(ustensil =>
        new Markup(ustensil).getUstensilsList()).join('');
    generateUstensilsTags();
}

recipesToDisplay(recipes);
ingredientsToDisplay(dataSource.getAllIngredients());
appliancesToDisplay(dataSource.getAllAppliances());
ustensilsToDisplay(dataSource.getAllUstensils());