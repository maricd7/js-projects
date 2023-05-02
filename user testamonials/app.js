const testimonials = [];
const reviews= [
  {
    text:"I recently used this service to book my travel arrangements for a family vacation, and I was blown away by the level of service and attention to detail. The booking process was simple and seamless, and the customer support team was always available to answer my questions and make any necessary changes. The accommodations were fantastic and exceeded my expectations, and the overall experience was one of the best I've had. I highly recommend this service to anyone looking for a stress-free and enjoyable travel experience!"
  },
  {
    text : "I recently used this service to book a hotel for a business trip, and I couldn't be happier with the experience. The website was easy to use, and I found a great hotel at a great price. The customer support team was also very helpful when I had some questions about the booking process. I would definitely recommend this service to anyone looking for a hassle-free way to book travel accommodations."
  },
  {
    text:"I've used this service several times now, and it never disappoints. The user interface is intuitive and easy to navigate, and I always find great deals on hotels and flights. I also appreciate the personalized recommendations and travel tips that are available on the site. Overall, I would highly recommend this service to anyone looking for a convenient and affordable way to book travel."
  },
]
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const image = document.getElementById('img')
const testiText = document.getElementById('testi');

  
let currentPosition = 0;

function showTestimonial(){
  userName.innerText = testimonials[currentPosition].firstName;
  email.innerText = testimonials[currentPosition].email;
  
  const imageurl = testimonials[currentPosition].image;
  image.src=imageurl;
  testiText.innerText = reviews[currentPosition].text
  
}

window.addEventListener("DOMContentLoaded",()=>{
  fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then(data => {
      const users = data.users;
      const selectedUsers = users.slice(0, 3);
      testimonials.push(...selectedUsers);
      
      showTestimonial();
    })
    .catch(error => console.error(error));
})

nextBtn.addEventListener('click',()=>{
  currentPosition++ ;
  
  if(currentPosition >= testimonials.length){
    currentPosition = 0;
  }
  
  showTestimonial();
})

previousBtn.addEventListener('click', ()=>{
  currentPosition--;
  
  if(currentPosition < 0){
    currentPosition = testimonials.length - 1;
  }
  
  showTestimonial();
})
