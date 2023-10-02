document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    container.innerHTML = '';

    let searchLink = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

    const searchInput = document.getElementById('search');

    searchInput.addEventListener('keyup', () => {
        container.innerHTML = ''; 
        const searchMeals = searchInput.value;

        fetch(searchLink + searchMeals)
            .then(response => response.json())
            .then(data => {
                if (data.meals) {
                    data.meals.forEach(mealData => {
                        let recipeHolder = document.createElement('div');
                        recipeHolder.classList.add('recipe-holder');

                        let recipeImage = document.createElement('img');
                        recipeImage.src = mealData.strMealThumb;
                        recipeHolder.appendChild(recipeImage);

                        let recipeInfo = document.createElement('div');
                        recipeInfo.classList.add('recipe-info');

                        let recipeName = document.createElement('h3');
                        recipeName.innerText = mealData.strMeal;
                        recipeInfo.appendChild(recipeName);

                        let recipeCat = document.createElement('h4');
                        recipeCat.innerText = mealData.strCategory;
                        recipeInfo.appendChild(recipeCat);

                        recipeHolder.appendChild(recipeInfo);
                        container.appendChild(recipeHolder);
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
