const URL = "https://uselessfacts.jsph.pl/api/v2/facts/random";
const generate = document.getElementById("generate");
const factContainer = document.getElementById("container");

generate.addEventListener("click", () => {
  getData();
});

async function getData() {
  const response = await fetch(URL);
  const data = await response.json();
  const fact = data.text;
  factContainer.innerHTML = fact;
}
