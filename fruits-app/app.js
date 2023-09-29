let fruitsDb = [
    {
      "name": "Persimmon",
      "id": 52,
      "family": "Ebenaceae",
      "order": "Rosales",
      "genus": "Diospyros",
      "nutritions": {
        "calories": 81,
        "fat": 0,
        "sugar": 18,
        "carbohydrates": 18,
        "protein": 0
      }
    },
    {
      "name": "Strawberry",
      "id": 3,
      "family": "Rosaceae",
      "order": "Rosales",
      "genus": "Fragaria",
      "nutritions": {
        "calories": 29,
        "fat": 0.4,
        "sugar": 5.4,
        "carbohydrates": 5.5,
        "protein": 0.8
      }
    },
    {
      "name": "Banana",
      "id": 1,
      "family": "Musaceae",
      "order": "Zingiberales",
      "genus": "Musa",
      "nutritions": {
        "calories": 96,
        "fat": 0.2,
        "sugar": 17.2,
        "carbohydrates": 22,
        "protein": 1
      }
    },
    {
      "name": "Tomato",
      "id": 5,
      "family": "Solanaceae",
      "order": "Solanales",
      "genus": "Solanum",
      "nutritions": {
        "calories": 74,
        "fat": 0.2,
        "sugar": 2.6,
        "carbohydrates": 3.9,
        "protein": 0.9
      }
    },
    {
      "name": "Pear",
      "id": 4,
      "family": "Rosaceae",
      "order": "Rosales",
      "genus": "Pyrus",
      "nutritions": {
        "calories": 57,
        "fat": 0.1,
        "sugar": 10,
        "carbohydrates": 15,
        "protein": 0.4
      }
    },
    {
      "name": "Durian",
      "id": 60,
      "family": "Malvaceae",
      "order": "Malvales",
      "genus": "Durio",
      "nutritions": {
        "calories": 147,
        "fat": 5.3,
        "sugar": 6.75,
        "carbohydrates": 27.1,
        "protein": 1.5
      }
    },
    {
      "name": "Blackberry",
      "id": 64,
      "family": "Rosaceae",
      "order": "Rosales",
      "genus": "Rubus",
      "nutritions": {
        "calories": 40,
        "fat": 0.4,
        "sugar": 4.5,
        "carbohydrates": 9,
        "protein": 1.3
      }
    },
    {
      "name": "Lingonberry",
      "id": 65,
      "family": "Ericaceae",
      "order": "Ericales",
      "genus": "Vaccinium",
      "nutritions": {
        "calories": 50,
        "fat": 0.34,
        "sugar": 5.74,
        "carbohydrates": 11.3,
        "protein": 0.75
      }
    },
    {
      "name": "Kiwi",
      "id": 66,
      "family": "Actinidiaceae",
      "order": "Struthioniformes",
      "genus": "Apteryx",
      "nutritions": {
        "calories": 61,
        "fat": 0.5,
        "sugar": 9,
        "carbohydrates": 15,
        "protein": 1.1
      }
    },
    {
      "name": "Lychee",
      "id": 67,
      "family": "Sapindaceae",
      "order": "Sapindales",
      "genus": "Litchi",
      "nutritions": {
        "calories": 66,
        "fat": 0.44,
        "sugar": 15,
        "carbohydrates": 17,
        "protein": 0.8
      }
    },
    {
      "name": "Pineapple",
      "id": 10,
      "family": "Bromeliaceae",
      "order": "Poales",
      "genus": "Ananas",
      "nutritions": {
        "calories": 50,
        "fat": 0.12,
        "sugar": 9.85,
        "carbohydrates": 13.12,
        "protein": 0.54
      }
    },
    {
      "name": "Fig",
      "id": 68,
      "family": "Moraceae",
      "order": "Rosales",
      "genus": "Ficus",
      "nutritions": {
        "calories": 74,
        "fat": 0.3,
        "sugar": 16,
        "carbohydrates": 19,
        "protein": 0.8
      }
    },
    {
      "name": "Gooseberry",
      "id": 69,
      "family": "Grossulariaceae",
      "order": "Saxifragales",
      "genus": "Ribes",
      "nutritions": {
        "calories": 44,
        "fat": 0.6,
        "sugar": 0,
        "carbohydrates": 10,
        "protein": 0.9
      }
    },
    {
      "name": "Passionfruit",
      "id": 70,
      "family": "Passifloraceae",
      "order": "Malpighiales",
      "genus": "Passiflora",
      "nutritions": {
        "calories": 97,
        "fat": 0.7,
        "sugar": 11.2,
        "carbohydrates": 22.4,
        "protein": 2.2
      }
    },
    {
      "name": "Plum",
      "id": 71,
      "family": "Rosaceae",
      "order": "Rosales",
      "genus": "Prunus",
      "nutritions": {
        "calories": 46,
        "fat": 0.28,
        "sugar": 9.92,
        "carbohydrates": 11.4,
        "protein": 0.7
      }
    },
    {
      "name": "Orange",
      "id": 2,
      "family": "Rutaceae",
      "order": "Sapindales",
      "genus": "Citrus",
      "nutritions": {
        "calories": 43,
        "fat": 0.2,
        "sugar": 8.2,
        "carbohydrates": 8.3,
        "protein": 1
      }
    },
    {
      "name": "GreenApple",
      "id": 72,
      "family": "Rosaceae",
      "order": "Rosales",
      "genus": "Malus",
      "nutritions": {
        "calories": 21,
        "fat": 0.1,
        "sugar": 6.4,
        "carbohydrates": 3.1,
        "protein": 0.4
      }
    },
    {
      "name": "Raspberry",
      "id": 23,
      "family": "Rosaceae",
      "order": "Rosales",
      "genus": "Rubus",
      "nutritions": {
        "calories": 53,
        "fat": 0.7,
        "sugar": 4.4,
        "carbohydrates": 12,
        "protein": 1.2
      }
    },
    {
      "name": "Watermelon",
      "id": 25,
      "family": "Cucurbitaceae",
      "order": "Cucurbitales",
      "genus": "Citrullus",
      "nutritions": {
        "calories": 30,
        "fat": 0.2,
        "sugar": 6,
        "carbohydrates": 8,
        "protein": 0.6
      }
    },
    {
      "name": "Lemon",
      "id": 26,
      "family": "Rutaceae",
      "order": "Sapindales",
      "genus": "Citrus",
      "nutritions": {
        "calories": 29,
        "fat": 0.3,
        "sugar": 2.5,
        "carbohydrates": 9,
        "protein": 1.1
      }
    },
    {
      "name": "Mango",
      "id": 27,
      "family": "Anacardiaceae",
      "order": "Sapindales",
      "genus": "Mangifera",
      "nutritions": {
        "calories": 60,
        "fat": 0.38,
        "sugar": 13.7,
        "carbohydrates": 15,
        "protein": 0.82
      }
    },
    {
      "name": "Blueberry",
      "id": 33,
      "family": "Rosaceae",
      "order": "Rosales",
      "genus": "Fragaria",
      "nutritions": {
        "calories": 29,
        "fat": 0.4,
        "sugar": 5.4,
        "carbohydrates": 5.5,
        "protein": 0
      }
    },
    {
      "name": "Apple",
      "id": 6,
      "family": "Rosaceae",
      "order": "Rosales",
      "genus": "Malus",
      "nutritions": {
        "calories": 52,
        "fat": 0.4,
        "sugar": 10.3,
        "carbohydrates": 11.4,
        "protein": 0.3
      }
    },
    {
      "name": "Guava",
      "id": 37,
      "family": "Myrtaceae",
      "order": "Myrtales",
      "genus": "Psidium",
      "nutritions": {
        "calories": 68,
        "fat": 1,
        "sugar": 9,
        "carbohydrates": 14,
        "protein": 2.6
      }
    },
    {
      "name": "Apricot",
      "id": 35,
      "family": "Rosaceae",
      "order": "Rosales",
      "genus": "Prunus",
      "nutritions": {
        "calories": 15,
        "fat": 0.1,
        "sugar": 3.2,
        "carbohydrates": 3.9,
        "protein": 0.5
      }
    },
    {
      "name": "Papaya",
      "id": 42,
      "family": "Caricaceae",
      "order": "Caricacea",
      "genus": "Carica",
      "nutritions": {
        "calories": 43,
        "fat": 0.4,
        "sugar": 1,
        "carbohydrates": 11,
        "protein": 0
      }
    },
    {
      "name": "Melon",
      "id": 41,
      "family": "Cucurbitaceae",
      "order": "Cucurbitaceae",
      "genus": "Cucumis",
      "nutritions": {
        "calories": 34,
        "fat": 0,
        "sugar": 8,
        "carbohydrates": 8,
        "protein": 0
      }
    },
    {
      "name": "Tangerine",
      "id": 77,
      "family": "Rutaceae",
      "order": "Sapindales",
      "genus": "Citrus",
      "nutritions": {
        "calories": 45,
        "fat": 0.4,
        "sugar": 9.1,
        "carbohydrates": 8.3,
        "protein": 0
      }
    },
    {
      "name": "Pitahaya",
      "id": 78,
      "family": "Cactaceae",
      "order": "Caryophyllales",
      "genus": "Cactaceae",
      "nutritions": {
        "calories": 36,
        "fat": 0.4,
        "sugar": 3,
        "carbohydrates": 7,
        "protein": 1
      }
    },
    {
      "name": "Lime",
      "id": 44,
      "family": "Rutaceae",
      "order": "Sapindales",
      "genus": "Citrus",
      "nutritions": {
        "calories": 25,
        "fat": 0.1,
        "sugar": 1.7,
        "carbohydrates": 8.4,
        "protein": 0.3
      }
    },
    {
      "name": "Pomegranate",
      "id": 79,
      "family": "Lythraceae",
      "order": "Myrtales",
      "genus": "Punica",
      "nutritions": {
        "calories": 83,
        "fat": 1.2,
        "sugar": 13.7,
        "carbohydrates": 18.7,
        "protein": 1.7
      }
    },
    {
      "name": "Dragonfruit",
      "id": 80,
      "family": "Cactaceae",
      "order": "Caryophyllales",
      "genus": "Selenicereus",
      "nutritions": {
        "calories": 60,
        "fat": 1.5,
        "sugar": 8,
        "carbohydrates": 9,
        "protein": 9
      }
    },
    {
      "name": "Grape",
      "id": 81,
      "family": "Vitaceae",
      "order": "Vitales",
      "genus": "Vitis",
      "nutritions": {
        "calories": 69,
        "fat": 0.16,
        "sugar": 16,
        "carbohydrates": 18.1,
        "protein": 0.72
      }
    },
    {
      "name": "Morus",
      "id": 82,
      "family": "Moraceae",
      "order": "Rosales",
      "genus": "Morus",
      "nutritions": {
        "calories": 43,
        "fat": 0.39,
        "sugar": 8.1,
        "carbohydrates": 9.8,
        "protein": 1.44
      }
    },
    {
      "name": "Feijoa",
      "id": 76,
      "family": "Myrtaceae",
      "order": "Myrtoideae",
      "genus": "Sellowiana",
      "nutritions": {
        "calories": 44,
        "fat": 0.4,
        "sugar": 3,
        "carbohydrates": 8,
        "protein": 0.6
      }
    },
    {
      "name": "Avocado",
      "id": 84,
      "family": "Lauraceae",
      "order": "Laurales",
      "genus": "Persea",
      "nutritions": {
        "calories": 160,
        "fat": 14.66,
        "sugar": 0.66,
        "carbohydrates": 8.53,
        "protein": 2
      }
    },
    {
      "name": "Kiwifruit",
      "id": 85,
      "family": "Actinidiaceae",
      "order": "Ericales",
      "genus": "Actinidia",
      "nutritions": {
        "calories": 61,
        "fat": 0.5,
        "sugar": 8.9,
        "carbohydrates": 14.6,
        "protein": 1.14
      }
    },
    {
      "name": "Cranberry",
      "id": 87,
      "family": "Ericaceae",
      "order": "Ericales",
      "genus": "Vaccinium",
      "nutritions": {
        "calories": 46,
        "fat": 0.1,
        "sugar": 4,
        "carbohydrates": 12.2,
        "protein": 0.4
      }
    },
    {
      "name": "Cherry",
      "id": 9,
      "family": "Rosaceae",
      "order": "Rosales",
      "genus": "Prunus",
      "nutritions": {
        "calories": 50,
        "fat": 0.3,
        "sugar": 8,
        "carbohydrates": 12,
        "protein": 1
      }
    },
    {
      "name": "Peach",
      "id": 86,
      "family": "Rosaceae",
      "order": "Rosales",
      "genus": "Prunus",
      "nutritions": {
        "calories": 39,
        "fat": 0.25,
        "sugar": 8.4,
        "carbohydrates": 9.5,
        "protein": 0.9
      }
    },
    {
      "name": "Jackfruit",
      "id": 94,
      "family": "Moraceae",
      "order": "Rosales",
      "genus": "Artocarpus",
      "nutritions": {
        "calories": 95,
        "fat": 0,
        "sugar": 19.1,
        "carbohydrates": 23.2,
        "protein": 1.72
      }
    },
    {
      "name": "Horned Melon",
      "id": 95,
      "family": "Cucurbitaceae",
      "order": "Cucurbitales",
      "genus": "Cucumis",
      "nutritions": {
        "calories": 44,
        "fat": 1.26,
        "sugar": 0.5,
        "carbohydrates": 7.56,
        "protein": 1.78
      }
    },
    {
      "name": "Hazelnut",
      "id": 96,
      "family": "Betulaceae",
      "order": "Fagales",
      "genus": "Corylus",
      "nutritions": {
        "calories": 628,
        "fat": 61,
        "sugar": 4.3,
        "carbohydrates": 17,
        "protein": 15
      }
    },
    {
      "name": "Pomelo",
      "id": 98,
      "family": "Rutaceae",
      "order": "Sapindales",
      "genus": "Citrus",
      "nutritions": {
        "calories": 37,
        "fat": 0,
        "sugar": 8.5,
        "carbohydrates": 9.67,
        "protein": 0.82
      }
    },
    {
      "name": "Mangosteen",
      "id": 99,
      "family": "Clusiaceae",
      "order": "Malpighiales",
      "genus": "Garcinia",
      "nutritions": {
        "calories": 73,
        "fat": 0.58,
        "sugar": 16.11,
        "carbohydrates": 17.91,
        "protein": 0.41
      }
    }
  ]


const search = document.getElementById('search');
const btn = document.getElementById('submit')


btn.addEventListener('click', ()=>{
    container.innerHTML = '';
    const filteredFruits = fruitsDb.filter(fruit=>{
        let fruitName = fruit.name.toLowerCase() 
        let searchInput = search.value.toLowerCase()

     
        return(fruitName.includes(searchInput))


    })    

    filteredFruits.forEach(fruit=>{

        let container = document.getElementById('container')

        let fruitBox = document.createElement('div'); 
        fruitBox.classList.add('fruit-box'); 



        let fruitName = document.createElement('h1'); 
        let calories = document.createElement('h2'); 
        let carbs = document.createElement('h2'); 
        let fats = document.createElement('h2'); 
        let protein = document.createElement('h2'); 

        fruitName.innerText = 'Name: ' + fruit.name;  
        calories.innerText = 'Calories: ' +  fruit.nutritions.calories;  
        carbs.innerText = 'Carbs: ' +  fruit.nutritions.carbohydrates;  
        fats.innerText = 'Fat: ' + fruit.nutritions.fat ; 
        protein.innerText = 'Protein: ' + fruit.nutritions.protein ; 

        

        fruitBox.appendChild(fruitName);
        fruitBox.appendChild(calories);
        fruitBox.appendChild(carbs);
        fruitBox.appendChild(fats);
        fruitBox.appendChild(protein);

        container.appendChild(fruitBox)
        
    })
    

})