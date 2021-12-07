import {recipes} from "../../assets/data/data";
import {Markup} from "./markup";

export const recipesToDisplay = (selectedRecipes) => {
    const recipesContainer = document.getElementById("recipes-cards-container");
    recipesContainer.innerHTML = selectedRecipes.map(elt =>
        new Markup(elt).getRecipeCard()).join('');
}

export const ingredientsToDisplay = (selectedRecipes) => {
    let ingredientsList = document.getElementById("ingredients-list");
    let allIngredients = [];

    selectedRecipes.filter(selectedRecipe => {
        selectedRecipe.ingredients.forEach(elt => allIngredients.includes(elt.ingredient) ? false : allIngredients.push(elt.ingredient));
    })
    ingredientsList.innerHTML = allIngredients.map(ingredient =>
        new Markup(ingredient).getItemsList()).join('');
}

export const appliancesToDisplay = (selectedRecipes) => {
    let appliancesList = document.getElementById("appliances-list");
    let allAppliances = [];

    selectedRecipes.filter(selectedRecipe => {
        allAppliances.includes(selectedRecipe.appliance) ? false : allAppliances.push(selectedRecipe.appliance);
    })
    appliancesList.innerHTML = allAppliances.map(appliance =>
        new Markup(appliance).getItemsList()).join('');
}

export const ustensilsToDisplay = (selectedRecipes) => {
    let ustensilsList = document.getElementById("ustensils-list");
    let allUstensils = [];

    selectedRecipes.filter(selectedRecipe => {
        selectedRecipe.ustensils.forEach(ustensil => allUstensils.includes(ustensil) ? false : allUstensils.push(ustensil));
    })
    ustensilsList.innerHTML = allUstensils.map(ustensil =>
        new Markup(ustensil).getItemsList()).join('');
}

recipesToDisplay(recipes);
ingredientsToDisplay(recipes);
appliancesToDisplay(recipes);
ustensilsToDisplay(recipes);