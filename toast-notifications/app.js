let toastContainer = document.getElementById('container');

let succcessIcon = "fluent-emoji:check-mark-button";
let alertIcon = '' ; 
let failIcon  = ''; 
let closeIcon = "material-symbols:close-rounded";

let close = document.getElementById("close-icon");
let succcessIconConatainer = document.getElementById("scs-icon");

//buttons
let successBtn = document.getElementById('success-btn'); 
let failBtn = document.getElementById('fail-btn')
let alertBtn = document.getElementById('alert-btn');


//appending


successBtn.addEventListener('click', ()=>{
    toastContainer.style.display='block'; 
    succcessIconConatainer.icon = succcessIcon;
    close.icon = closeIcon; 

})
failBtn.addEventListener('click', ()=>{

})
alertBtn.addEventListener('click', ()=>{

})


