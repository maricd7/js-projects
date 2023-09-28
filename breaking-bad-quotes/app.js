
const generateButton  = document.getElementById('generate'); 
const url = 'https://api.breakingbadquotes.xyz/v1/quotes'; 

generateButton.addEventListener('click', ()=>{
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        let quote  = document.getElementById('quote'); 
        let author = document.getElementById('author'); 
        quote.innerText = data[0].quote;
        author.innerText = data[0].author;

    })
    // .catch(alert('There was an error generating your quote'))
    //  
        
    
})


//animation 
window.addEventListener('load', function() {
    const quoteElement = document.querySelector('body');
    quoteElement.style.opacity = 1;
});