import {recipes} from "../../assets/data/data";
import {Markup} from "./markup";

const getAllRecipes = () => {
    const recipesContainer = document.getElementById("recipes-cards-container");
    recipesContainer.innerHTML += recipes.map(elt =>
        new Markup(elt).getRecipeCard()).join('');
}

const getAllIngredients = () => {
    let ingredientsList = document.getElementById("ingredients-list");
    let allIngredients = [];

    recipes.forEach(elt => {
        elt.ingredients.map(elt => allIngredients.includes(elt.ingredient) ? false : allIngredients.push(elt.ingredient));
    })
    ingredientsList.innerHTML = allIngredients.map(elt =>
        new Markup(elt).getItemsList()).join('');
}

const getAllAppliances = () => {
    let appliancesList = document.getElementById("appliances-list");
    let allAppliances = [];

    recipes.forEach(elt => {
        allAppliances.includes(elt.appliance) ? false : allAppliances.push(elt.appliance);
    })
    appliancesList.innerHTML = allAppliances.map(elt =>
        new Markup(elt).getItemsList()).join('');
}

const getAllUstensils = () => {
    let ustensilsList = document.getElementById("ustensils-list");
    let allUstensils = [];

    recipes.forEach(elt => {
        elt.ustensils.map(elt => allUstensils.includes(elt) ? false : allUstensils.push(elt));
    })
    ustensilsList.innerHTML = allUstensils.map(elt =>
        new Markup(elt).getItemsList()).join('');
}

getAllRecipes();
getAllIngredients();
getAllAppliances();
getAllUstensils();