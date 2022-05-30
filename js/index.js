
const searchFood = () => {
    // console.log("i am here");
    const searchField = document.getElementById("Search-Field");
    const searchText = searchField.value;

    //========================= DATA CLEAR ==============================
    searchField.value = ' ';
    // console.log(searchText);

    //========================= LOAD DATA ================================
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals));
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById("Search-Result");
    searchResult.textContent = '';
    // console.log(searchResult);
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = ` 
            <div onClick = "loadMealDetails(${meal.idMeal})" class="card h-100">
                 <img height= "300px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                </div>
            </div>
        `;
    searchResult.appendChild(div);

    });
}

const loadMealDetails = mealId => {
    console.log("clicked");
    //============================ LOAD DETAILS ======================
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]));
}

const displayMealDetails = meal => {
    console.log(meal);
    const mealDetails = document.getElementById("meal-detail");
    mealDetails.textContent = '';
    const div = document.createElement("div");
    div.classList.add('card');
    div.innerHTML = `
        <div class="card ">
            <img height="300px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text"> ${meal.strInstructions.slice(0,150)} </p>
             <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
         </div>
         </div>
    `;
    mealDetails.appendChild(div);
}