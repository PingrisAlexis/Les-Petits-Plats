import {Markup} from "./markup";
import {searchLogic, searchRecipes} from "./searchLogic";

//INGREDIENTS SELECTED TAGS
export const generateIngredientsTags = () => {
    const selectedIngredientsList = document.querySelectorAll(".ingredients-search-filter-tag ");
    const selectedIngredientsContainer = document.querySelector(".selected-ingredients-contenair");

    const selectedIngredientsTags = (seletedIngredientTag) => {
       searchLogic.ingredients = [seletedIngredientTag.textContent.trim().toLowerCase()];
        selectedIngredientsContainer.innerHTML = searchLogic.ingredients.map(ingredient =>
            new Markup(ingredient).getSelectedIngredientsTag()).join("");
        searchRecipes();
        deleteTag();
    }
    selectedIngredientsList.forEach((seletedIngredientTag) => {
        seletedIngredientTag.addEventListener("click",() => {
            selectedIngredientsTags(seletedIngredientTag);
        });
    })
}

//APPLIANCES SELECTED TAGS
export const generateAppliancesTags = () => {
    const selectedAppliancesList = document.querySelectorAll(".appliances-search-filter-tag");
    const selectedAppliancesContainer = document.querySelector(".selected-appliances-contenair");

    const selectedAppliancesTags = (seletedApplianceTag) => {
        searchLogic.appliances = [seletedApplianceTag.textContent.trim().toLowerCase()];
        selectedAppliancesContainer.innerHTML = searchLogic.appliances.map(appliance =>
            new Markup(appliance).getSelectedAppliancesTag()).join("")
        searchRecipes();
        deleteTag();
    }
    selectedAppliancesList.forEach((seletedApplianceTag) => {
        seletedApplianceTag.addEventListener("click",() => {
            selectedAppliancesTags(seletedApplianceTag);
        });
    })
}

//USTENSILS SELECTED TAGS
export const generateUstensilsTags = () => {
    const selectedUstensilsList = document.querySelectorAll(".ustensils-search-filter-tag");
    const selectedUstensilsContainer = document.querySelector(".selected-ustensils-contenair");

    const selectedUstensilsTags = (seletedUstensilTag) => {
        searchLogic.ustensils = [seletedUstensilTag.textContent.trim().toLowerCase()];
        selectedUstensilsContainer.innerHTML = searchLogic.ustensils.map(ustensil =>
            new Markup(ustensil).getSelectedUstensilsTag()).join("");
        searchRecipes();
        deleteTag();
    }
    selectedUstensilsList.forEach((seletedUstensilTag) => {
        seletedUstensilTag.addEventListener("click",() => {
            selectedUstensilsTags(seletedUstensilTag);
        });
    })
}

//DELETE SELECTED TAGS
const deleteTag = () => {
    let deleteSelectedTags = document.querySelectorAll(".fa-times-circle")
    deleteSelectedTags.forEach((deleteSelectedTag) => {
        deleteSelectedTag.addEventListener("click",() => {
            const tagElement = deleteSelectedTag.parentElement;
            const tag = tagElement.textContent.trim();
            const tagType = tagElement.getAttribute("data-tag");
            searchLogic[tagType] = searchLogic[tagType].filter(t => t !== tag);
            tagElement.remove();
            searchRecipes();
        })
    })
}

generateIngredientsTags();
generateAppliancesTags();
generateUstensilsTags();