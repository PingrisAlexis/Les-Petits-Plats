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
    console.log(searchLogic)
    let filteredRecipes = recipes;
    if (searchLogic.main.length >= 3 || searchLogic.ingredients.length > 0 ||  searchLogic.appliances.length > 0 || searchLogic.ustensils.length > 0 || filteredRecipes.length === 0) {

        if (searchLogic.main.length >= 3) {
            filteredRecipes = mainSearch(searchLogic.main)
            ingredientsToDisplay(dataFiltered.getFilteredIngredients(filteredRecipes));
            recipesToDisplay(filteredRecipes)
            noResultMessage.innerHTML = "";
        }

        if (searchLogic.ingredients.length > 0) {
            searchLogic.ingredients.forEach(item => {
            filteredRecipes = filteredRecipes.filter(recipe => {
                return (
                    recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(item.toLowerCase()))
                )})
            ingredientsToDisplay(dataFiltered.getFilteredIngredients(filteredRecipes));
            appliancesToDisplay(dataFiltered.getFilteredAppliances(filteredRecipes));
            ustensilsToDisplay(dataFiltered.getFilteredUstensils(filteredRecipes));
            recipesToDisplay(filteredRecipes);
                noResultMessage.innerHTML = "";
            })
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
            noResultMessage.innerHTML = "";
        }

        if (searchLogic.ustensils.length > 0) {
            searchLogic.ustensils.forEach(item => {
            filteredRecipes = filteredRecipes.filter(recipe => {
                return (
                    recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(item.toLowerCase()))
                )})
            ingredientsToDisplay(dataFiltered.getFilteredIngredients(filteredRecipes));
            appliancesToDisplay(dataFiltered.getFilteredAppliances(filteredRecipes));
            ustensilsToDisplay(dataFiltered.getFilteredUstensils(filteredRecipes));
            recipesToDisplay(filteredRecipes);
            noResultMessage.innerHTML = "";
            })
        }

        if (filteredRecipes.length === 0) {
            noResultMessage.innerHTML = new Markup().getNoResultMessage();
        }

    } else {
        ingredientsToDisplay(dataFiltered.getFilteredIngredients(filteredRecipes));
        appliancesToDisplay(dataFiltered.getFilteredAppliances(filteredRecipes));
        ustensilsToDisplay(dataFiltered.getFilteredUstensils(filteredRecipes));
        recipesToDisplay(filteredRecipes);
        noResultMessage.innerHTML = "";
    }
}