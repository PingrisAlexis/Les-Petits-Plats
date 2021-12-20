import {mainSearch} from "./mainSearch";
import {appliancesToDisplay, ingredientsToDisplay, recipesToDisplay, ustensilsToDisplay} from "./build";
import {recipes} from "../../assets/data/data";
import {dataFiltered} from "./dataLogic";
import {Markup} from "./markup";
const noResultMessage = document.querySelector("#no-result-message");

export const searchLogic = {
    main: '',
    ingredients: [],
    appliances: [],
    ustensils: [],
}

export const searchRecipes = () => {
    let filteredRecipes = recipes;
    if (searchLogic.main.length >= 3 || searchLogic.ingredients.length > 0 ||  searchLogic.appliances.length > 0 || searchLogic.ustensils.length > 0 || filteredRecipes.length === 0) {

        if (searchLogic.main.length >= 3) {
            filteredRecipes = mainSearch(searchLogic.main)
            ingredientsToDisplay(dataFiltered.getFilteredIngredients(filteredRecipes));
            recipesToDisplay(filteredRecipes);
        }

        if (searchLogic.ingredients.length > 0) {
            filteredRecipes = filteredRecipes.filter(recipe => {
                return (
                    recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchLogic.ingredients[0].toLowerCase()))
                )})
            ingredientsToDisplay(dataFiltered.getFilteredIngredients(filteredRecipes));
            appliancesToDisplay(dataFiltered.getFilteredAppliances(filteredRecipes));
            ustensilsToDisplay(dataFiltered.getFilteredUstensils(filteredRecipes));
            recipesToDisplay(filteredRecipes);
        }

        if (searchLogic.appliances.length > 0) {
            filteredRecipes = filteredRecipes.filter(recipe => {
                return (
                    recipe.appliance.toLowerCase().includes(searchLogic.appliances[0].toLowerCase())
                )})
            ingredientsToDisplay(dataFiltered.getFilteredIngredients(filteredRecipes));
            appliancesToDisplay(dataFiltered.getFilteredAppliances(filteredRecipes));
            ustensilsToDisplay(dataFiltered.getFilteredUstensils(filteredRecipes));
            recipesToDisplay(filteredRecipes);
        }

        if (searchLogic.ustensils.length > 0) {
            filteredRecipes = filteredRecipes.filter(recipe => {
                return (
                    recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(searchLogic.ustensils[0].toLowerCase()))
                )})
            ingredientsToDisplay(dataFiltered.getFilteredIngredients(filteredRecipes));
            appliancesToDisplay(dataFiltered.getFilteredAppliances(filteredRecipes));
            ustensilsToDisplay(dataFiltered.getFilteredUstensils(filteredRecipes));
            recipesToDisplay(filteredRecipes);
        }

        if (filteredRecipes.length === 0) {
            noResultMessage.innerHTML = new Markup().getNoResultMessage();
        }

    } else {
        ingredientsToDisplay(dataFiltered.getFilteredIngredients(filteredRecipes));
        appliancesToDisplay(dataFiltered.getFilteredAppliances(filteredRecipes));
        ustensilsToDisplay(dataFiltered.getFilteredUstensils(filteredRecipes));
        recipesToDisplay(filteredRecipes);
    }
}