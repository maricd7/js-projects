document.addEventListener("DOMContentLoaded", function () {
    // Add the "visible" class to elements with the "ease-in" class after a delay
    const elementsToAnimate = document.querySelectorAll(".ease-in");
    elementsToAnimate.forEach(function (element, index) {
      setTimeout(function () {
        element.classList.add("visible");
      }, index * 300); // Adjust the delay as needed
    });
  });


