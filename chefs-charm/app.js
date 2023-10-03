let url = 'https://www.themealdb.com/api/json/v1/1/random.php'; 
for(let i=0 ; i<=5 ; i++){
fetch(url)
    .then(response =>response.json())
    .then(data=>{
        console.log(data.meals[0].strMeal);
      
            let container = document.getElementById('container')
            let recipeHolder = document.createElement('div');
            recipeHolder.classList.add('recipe-holder'); 
            
            let recipeImage = document.createElement('img');
            recipeImage.classList.add('recipe-image')
            recipeImage.src=data.meals[0].strMealThumb;
            recipeHolder.appendChild(recipeImage);
            
            let recipeInfo = document.createElement('div');
            recipeInfo.classList.add('recipe-info'); 

            let recipeName = document.createElement('h3');
            recipeName.innerText = data.meals[0].strMeal; 
            recipeInfo.appendChild(recipeName);

            let recipeCat = document.createElement('h4');
            recipeCat.innerText =data.meals[0].strCategory; 
            recipeInfo.appendChild(recipeCat);

            let addToFavoritesButton = document.createElement('img');
            addToFavoritesButton.src = './resources/heart-outline.svg';
            addToFavoritesButton.classList.add('add-to-favorites')
            addToFavoritesButton.addEventListener('click', () => {
            addToFavorites(data.meals[0]);
            addToFavoritesButton.src = './resources/heart.svg';
            addToFavoritesButton.style.color='#ff5733'
           
            });
            recipeHolder.appendChild(addToFavoritesButton);
            recipeHolder.appendChild(recipeInfo); 
            container.appendChild(recipeHolder);
           
    })
}

function addToFavorites(recipe) {
  
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    if (!favorites.some((favorite) => favorite.idMeal === recipe.idMeal)) {
      favorites.push(recipe);
      localStorage.setItem('favorites', JSON.stringify(favorites));
  
   
    }
  }
  