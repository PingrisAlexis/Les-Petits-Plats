import {mainSearch} from "./mainSearch";
import {appliancesToDisplay, ingredientsToDisplay, recipesToDisplay, ustensilsToDisplay} from "./build";
import {recipes} from "../../assets/data/data";
import {dataFiltered} from "./dataLogic";

export const searchLogic = {
    main: '',
    ingredients: [],
    appliances: [],
    ustensils: [],
}

export const searchRecipes = () => {
    console.log({ search: searchLogic })
    let filteredRecipes = recipes;

    if (searchLogic.main.length >= 3) {
         filteredRecipes = mainSearch(searchLogic.main)
        ingredientsToDisplay(dataFiltered.getFilteredIngredients(filteredRecipes));
        recipesToDisplay(filteredRecipes);
    }

    else if (searchLogic.ingredients.length > 0) {
        filteredRecipes = filteredRecipes.filter(recipe => {
            return (
                recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchLogic.ingredients[0].toLowerCase()))
            )})
        ingredientsToDisplay(dataFiltered.getFilteredIngredients(filteredRecipes));
        appliancesToDisplay(dataFiltered.getFilteredAppliances(filteredRecipes));
        ustensilsToDisplay(dataFiltered.getFilteredUstensils(filteredRecipes));
        recipesToDisplay(filteredRecipes);
    }

    else if (searchLogic.appliances.length > 0) {
        filteredRecipes = filteredRecipes.filter(recipe => {
            return (
                recipe.appliance.toLowerCase().includes(searchLogic.appliances[0].toLowerCase())
            )})
        ingredientsToDisplay(dataFiltered.getFilteredIngredients(filteredRecipes));
        appliancesToDisplay(dataFiltered.getFilteredAppliances(filteredRecipes));
        ustensilsToDisplay(dataFiltered.getFilteredUstensils(filteredRecipes));
        recipesToDisplay(filteredRecipes);
    }

   else if (searchLogic.ustensils.length > 0) {
        filteredRecipes = filteredRecipes.filter(recipe => {
            return (
                recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(searchLogic.ustensils[0].toLowerCase()))
            )})
        ingredientsToDisplay(dataFiltered.getFilteredIngredients(filteredRecipes));
        appliancesToDisplay(dataFiltered.getFilteredAppliances(filteredRecipes));
        ustensilsToDisplay(dataFiltered.getFilteredUstensils(filteredRecipes));
        recipesToDisplay(filteredRecipes);
    }
    else {
        ingredientsToDisplay(dataFiltered.getFilteredIngredients(filteredRecipes));
        appliancesToDisplay(dataFiltered.getFilteredAppliances(filteredRecipes));
        ustensilsToDisplay(dataFiltered.getFilteredUstensils(filteredRecipes));
        recipesToDisplay(filteredRecipes);
    }
}