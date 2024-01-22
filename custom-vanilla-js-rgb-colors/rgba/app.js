const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");

const redValue = document.getElementById("red-value");
const greenValue = document.getElementById("green-value");
const blueValue = document.getElementById("blue-value");

const colorContainer = document.getElementById("container");
const currentColor = document.getElementById('current-color');

redInput.addEventListener("change", () => {
  redValue.innerHTML = redInput.value;
  updateColor();
});
greenInput.addEventListener("change", () => {
  greenValue.innerHTML = greenInput.value;
  updateColor();
});

blueInput.addEventListener("change", () => {
  blueValue.innerHTML = blueInput.value;
  updateColor();
});

function updateColor() {
  colorContainer.style.backgroundColor = 'rgb(' + redInput.value + ',' + greenInput.value + ',' + blueInput.value + ')';
  currentColor.innerHTML=redInput.value + ' ' + greenInput.value + ' ' + blueInput.value
}