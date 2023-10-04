let popUp = document.getElementById('popUp'); 
let overlay = document.getElementById('overlay');
let close = document.getElementById('closePopUp'); 
let body = document.querySelector('body');
let Bnr = document.querySelector('.welcome');

function openModal(){
    Bnr.scrollIntoView()
  
    popUp.classList.add('show') ;
    popUp.style.display='block';
    overlay.classList.remove('hide');
    overlay.classList.add('show');
}
document.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(openModal, 5000); 
})
overlay.addEventListener('click', ()=>{
    popUp.classList.add('hide') ;
    popUp.style.display='none';
    overlay.classList.remove('show');
    overlay.classList.add('hide');
    body.style.overflowY='unset'
})
closePopUp.addEventListener('click', ()=>{
    popUp.classList.add('hide') ;
    popUp.style.display='none';
    overlay.classList.remove('show');
    overlay.classList.add('hide');
    body.style.overflowY='unset'
})