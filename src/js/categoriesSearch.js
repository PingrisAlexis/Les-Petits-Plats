import {appliancesToDisplay, ustensilsToDisplay, ingredientsToDisplay, modifyIngredientList} from "./build";
import {recipes} from "../../assets/data/data";
import {Markup} from "./markup";


// const categorySearchFilters =  document.querySelectorAll(".filter-input--categories")
const ustensilsSearchFilters =  document.querySelector(".filter-input--ustensils");
const appliancesSearchFilters =  document.querySelector(".filter-input--appliances");
const ingredientsSearchFilters =  document.querySelector(".filter-input--ingredients");

const categoryTags = document.querySelectorAll(".category-search-filter-tag")

let selectedIngredientsTags;
let selectedAppliancesTags;
let selectedUstencilsTags;

const categorySearch = () => {

    const appliancesSearchFilterValue = appliancesSearchFilters.value.toLowerCase();
    const applianceSearchFilteredRecipes = recipes.filter(recipe => {
        return (
            recipe.appliance.toLowerCase().includes(appliancesSearchFilterValue)
        )})

    const ingredientsSearchFilterValue = ingredientsSearchFilters.value.toLowerCase();
    const ingredientSearchFilteredRecipes = recipes.filter(recipe => {
        return (
            recipe.ingredients.some(elt => elt.ingredient.includes(ingredientsSearchFilterValue))
        )
    })

    const ustensilsSearchFilterValue = ustensilsSearchFilters.value.toLowerCase();
    const ustensilSearchFilteredRecipes = recipes.filter(recipe => {
        return (
            recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(ustensilsSearchFilterValue))
        )})

        ingredientsToDisplay(ingredientSearchFilteredRecipes)
        appliancesToDisplay(applianceSearchFilteredRecipes);
        ustensilsToDisplay(ustensilSearchFilteredRecipes);
};

ingredientsSearchFilters.addEventListener("keyup", categorySearch)
ustensilsSearchFilters.addEventListener("keyup", categorySearch)
appliancesSearchFilters.addEventListener("keyup", categorySearch)


function filtersTag (categoryTag)  {
    selectedIngredientsTags = [];
    selectedAppliancesTags = [];
    selectedUstencilsTags = [];
    
    const ingredientList = document.querySelector(".ingredient-tag");
    const applianceList = document.querySelector(".appliance-tag");
    const ustensilList = document.querySelector(".ustensil-tag");

    if (categoryTag.parentNode.className === "d-flex w-100 flex-wrap justify-content-between fs-6 ingredients-tag-container") {

        selectedIngredientsTags.includes(categoryTag.textContent) ? false : selectedIngredientsTags.push(categoryTag.textContent);
            ingredientList.innerHTML = new Markup(selectedIngredientsTags).getSelectedTag();
    }

    else if (categoryTag.parentNode.className === "d-flex w-100 flex-wrap justify-content-between fs-6 appliances-tag-container") {
        selectedAppliancesTags.includes(categoryTag.textContent) ? false : selectedAppliancesTags.push(categoryTag.textContent);
            applianceList.innerHTML = new Markup(selectedAppliancesTags).getSelectedTag();
    }

    else if (categoryTag.parentNode.className === "d-flex w-100 flex-wrap justify-content-between fs-6 ustensiles-tag-container") {
        selectedUstencilsTags.includes(categoryTag.textContent) ? false : selectedUstencilsTags.push(categoryTag.textContent);
            ustensilList.innerHTML = new Markup(selectedUstencilsTags).getSelectedTag();
    }

    let deleteSelectedTags = document.querySelectorAll(".fa-times-circle")

    deleteSelectedTags.forEach((deleteSelectedTag) => {
        deleteSelectedTag.addEventListener("click",() => {
            resetFiltersTag(deleteSelectedTag);
        })
    })
    function resetFiltersTag(deleteSelectedTag) {
        deleteSelectedTag.previousElementSibling.remove();
        deleteSelectedTag.remove();
        selectedIngredientsTags.splice(deleteSelectedTag, 1)
    }
}

categoryTags.forEach((categoryTag) => {
    categoryTag.addEventListener("click",() => {
        filtersTag(categoryTag);
    });
});

