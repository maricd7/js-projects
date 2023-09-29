const input = document.getElementById('coupon')
const submitBtn = document.getElementById('submit')
let message = document.querySelector('h1')
let messageSub = document.querySelector('h4')
const iconContainer = document.querySelector(".icon-container");
submit.addEventListener('click', ()=>{
   iconContainer.classList.add('hide')
    messageSub.innerText = 'We will redirect you soon!'
    message.innerText  = 'Thank you so much!'
    message.classList.add('ease-in')
    input.classList.add('hide') ; 
    submit.classList.add('hide') ;

})




document.addEventListener("DOMContentLoaded", function () {
    const discountContainer = document.querySelector(".discount-container");
   
    const contentContainer = document.querySelector(".content-container");

  
    setTimeout(function () {
        discountContainer.style.opacity = "1";
        discountContainer.style.transform = "scale(1)";
        iconContainer.style.height = "128px"; 
    }, 500); 
    discountContainer.addEventListener("transitionend", function () {
        contentContainer.classList.remove("hide");
        contentContainer.style.opacity = "1";
        contentContainer.style.transform = "translateY(0)";
    });
});
