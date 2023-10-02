let container = document.getElementById('container'); 
let spinner  = document.getElementById('spinner');


function showLoader() {
    container.style.display = 'none';  
    spinner.style.display = 'block';  
  
   
    setTimeout(function() {
      container.style.display = 'flex'; 
      spinner.style.display = 'none';  
    }, 3000); 
  }
   

  showLoader();