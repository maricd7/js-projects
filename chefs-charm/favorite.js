
function displayFavorite() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.forEach((favorite) => {
      let favoritesContainer = document.getElementById('favourites-container') ; 

      let favoriteBox = document.createElement('div'); 
      favoriteBox.classList.add('favorite-box');

      let favoriteImage = document.createElement('img'); 
      favoriteImage.src = favorite.strMealThumb; 

      let favoriteTitle = document.createElement('h2')
      favoriteTitle.innerText = favorite.strMeal; 
      favoriteTitle.classList.add('favorite-title')

      favoriteBox.appendChild(favoriteImage);
      favoriteBox.appendChild(favoriteTitle);
     
      console.log(favorite)

      favoritesContainer.appendChild(favoriteBox)
    });
  }
  

  displayFavorite()