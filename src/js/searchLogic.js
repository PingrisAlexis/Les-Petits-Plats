import {mainSearch} from "./mainSearch";
import {appliancesToDisplay, ingredientsToDisplay, recipesToDisplay, ustensilsToDisplay} from "./build";
import {recipes} from "../../assets/data/data";
import {dataFiltered} from "./dataLogic";
import {Markup} from "./markup";
const noResultMessage = document.querySelector("#no-result-message");
const ingredientList = document.querySelector(".dropdown-menu--ingredients");
const ustensilList = document.querySelector(".dropdown-menu--ustensils");
const applianceList = document.querySelector(".dropdown-menu--appliances");

function itemsToDisplay(filteredRecipes) {
    ingredientsToDisplay(dataFiltered.getFilteredIngredients(filteredRecipes));
    appliancesToDisplay(dataFiltered.getFilteredAppliances(filteredRecipes));
    ustensilsToDisplay(dataFiltered.getFilteredUstensils(filteredRecipes));
    recipesToDisplay(filteredRecipes);
    noResultMessage.innerHTML = "";
}

export const searchLogic = {
    main: '',
    ingredients: [],
    appliances: [],
    ustensils: [],
}

export const searchRecipes = () => {
    let filteredRecipes = recipes;

    if (searchLogic.ingredients.length > 0 || searchLogic.appliances.length > 0 || searchLogic.ustensils.length > 0) {
        ingredientList.classList.add("mt-5");
        ustensilList.classList.add("mt-5");
        applianceList.classList.add("mt-5");
    } else {
        ingredientList.classList.remove("mt-5");
        ustensilList.classList.remove("mt-5");
        applianceList.classList.remove("mt-5");
    }

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
                itemsToDisplay(filteredRecipes)
            })
        }

        if (searchLogic.appliances.length > 0) {
            filteredRecipes = filteredRecipes.filter(recipe => {
                return (
                    recipe.appliance.toLowerCase().includes(searchLogic.appliances[0].toLowerCase())
                )})
            itemsToDisplay(filteredRecipes)
        }

        if (searchLogic.ustensils.length > 0) {
            searchLogic.ustensils.forEach(item => {
                filteredRecipes = filteredRecipes.filter(recipe => {
                    return (
                        recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(item.toLowerCase()))
                    )})
                itemsToDisplay(filteredRecipes)
            })
        }

        if (filteredRecipes.length === 0) {
            noResultMessage.innerHTML = new Markup().getNoResultMessage();
        }

    } else {
        itemsToDisplay(filteredRecipes)
    }
}