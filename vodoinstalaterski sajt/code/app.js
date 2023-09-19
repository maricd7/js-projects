document.addEventListener("DOMContentLoaded", function () {
    // Add the "visible" class to elements with the "ease-in" class after a delay
    const elementsToAnimate = document.querySelectorAll(".ease-in");
    elementsToAnimate.forEach(function (element, index) {
      setTimeout(function () {
        element.classList.add("visible");
      }, index * 300); // Adjust the delay as needed
    });
  });



  const services = document.querySelectorAll('.service');
  services.forEach(function (service) {
      service.addEventListener('mouseover', () => {
          service.classList.add('mouse-over');
      });
      service.addEventListener('mouseleave', () => {
          service.classList.remove('mouse-over');
      });
  });





  gsap.registerPlugin(ScrollTrigger);

       
  const serviceCardAnimation = gsap.from(".service", {
    opacity: 0,
    x: -50,
    stagger: 0.2, 
    duration: 1,
    ease: "power2.out"
});

ScrollTrigger.create({
    trigger: "#usluge", 
    animation: serviceCardAnimation, 
    start: "top 60%", 
    end: "bottom 60%",
    scrub: true,
    once: true, 
});
const galleryCardAnimation = gsap.from(".gallery", {
  opacity: 0,
  x: -50,
  stagger: 0.2, 
  duration: 1,
  ease: "power2.out"
});
ScrollTrigger.create({
  trigger: "#gallery", 
  animation: galleryCardAnimation, 
  start: "top 60%", 
  end: "bottom 60%",
  scrub: true,
  once: true, 
});

const contactCardAnimation = gsap.from(".contact", {
  opacity: 0,
  x: -50,
  stagger: 0.2, 
  duration: 1,
  ease: "power2.out"
});
ScrollTrigger.create({
  trigger: "#contact", 
  animation: contactCardAnimation, 
  start: "top 60%", 
  end: "bottom 60%",
  scrub: true,
  once: true, 
});


const header = document.querySelector('main');
ScrollTrigger.create({
    trigger: header,
    start: 'top top',
    end: 'bottom top',
    onUpdate: (self) => {
        const progress = self.progress;
        // Animate background color from one color to another
        header.style.backgroundColor = `rgba(0, 51, 102, ${1 - progress})`;
    },
});

// Example: Add hover effect to service cards
const serviceCards = document.querySelectorAll('.service');
serviceCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        gsap.to(card, { scale: 1.05, duration: 0.3 });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3 });
    });
});



