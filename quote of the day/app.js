const generateBtn = document.getElementById('generate'); 
let quote = document.getElementById('quote');
const url = 'https://quote-garden.onrender.com/api/v3/quotes';

generateBtn.addEventListener('click', ()=>{
    
fetch(url).then(res => res.json()).then(data=>{

  let quoteTxt = data.data[0].quoteText; 
 
  quote.textContent = quoteTxt;

}).catch(err =>{alert('Error', err)})

})

