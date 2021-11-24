const mainSearchFilter =  document.getElementById("main-search-filter");

mainSearchFilter.addEventListener("keyup", () => {

        const mainSearchFilterValue = this.value.toLowerCase();
        const recipesList = document.querySelectorAll(".recipe-card");

    for (let element of recipesList) {

        let item = element.innerHTML.toLowerCase();

         if (mainSearchFilterValue.length >= 3) {
            if (item.indexOf(mainSearchFilterValue) === -1) {
                element.classList.add("hide");
            }
            else {
                element.classList.remove("hide");
            }
        }
        else if (mainSearchFilterValue.length < 3 && element.classList.contains("hide")) {
                element.classList.remove("hide");
        }
    }
});