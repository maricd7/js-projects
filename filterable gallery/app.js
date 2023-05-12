const filterAll = document.getElementById('all')
const filterMan = document.getElementById('man')
const filterWoman = document.getElementById('woman')
const filterChild = document.getElementById('child')


const men = document.querySelectorAll('.man')
const children = document.querySelectorAll('.child')
const women = document.querySelectorAll('.woman')




filterMan.addEventListener('click', ()=>{
    children.forEach(child => {
        child.style.display = 'none';
      });
      
    women.forEach(woman => {
        woman.style.display = 'none';
      });
    men.forEach(man => {
        man.style.display = 'block';
      });
   

})
filterWoman.addEventListener('click', ()=>{
    men.forEach(man => {
        man.style.display = 'none';
      });
      
    children.forEach(child => {
        child.style.display = 'none';
      });
    women.forEach(woman => {
        woman.style.display = 'block';
      });
   

})
filterChild.addEventListener('click', ()=>{
    men.forEach(man => {
        man.style.display = 'none';
      });
    women.forEach(woman => {
        woman.style.display = 'none';
      });
    children.forEach(child => {
        child.style.display = 'block';
      }); 
      
    })
    
filterAll.addEventListener('click', ()=>{
        men.forEach(man => {
            man.style.display = 'block';
          });
        women.forEach(woman => {
            woman.style.display = 'block';
          });
        children.forEach(child => {
            child.style.display = 'block';
          });  
        })