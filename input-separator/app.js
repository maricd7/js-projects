console.log("running");
const splitButton = document.getElementById("separate");
const input = document.getElementById("input");
const resultsContainer = document.getElementById("results");

splitButton.addEventListener("click", () => {
  if (!input.length) {
    console.log("Please Type in Value");
  }
  const inputedText = input.value;
  separateText(inputedText);
});

function separateText(string) {
  if (!string) {
    console.log("error");
  }
  console.log(string, "string");
  const newText = string.split("=");
  for (let i = 0; i < newText.length; i++) {
    const result = document.createElement("p");
    result.innerText = newText[i];
    resultsContainer.appendChild(result);
  }
}
