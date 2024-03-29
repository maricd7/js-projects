const input = document.getElementById("input");
const button = document.getElementById("btn");
const createBtn = document.getElementById("createTeam");
const names = [];
const playersContainer = document.getElementById("players");
const teamOneContainer = document.getElementById("tim1");
const teamTwoContainer = document.getElementById("tim2");


button.addEventListener("click", () => {
  checkCount();
  names.push(input.value);
  let player = document.createElement("li");
  player.innerText = input.value;
  playersContainer.appendChild(player);
  console.log(names);
});

createBtn.addEventListener("click", () => {
  checkCount();
  createTeams();
  console.log("hehe");
});

function checkCount() {
  let playerCount = 9 - names.length;
  if (names.length < 10) {
    console.log("You need" + playerCount + "more players");
    return true;
  } else {
    return false;
  }
}

function createTeams() {
  //fisher yates shuffler
  let currentIndex = names.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [names[currentIndex], names[randomIndex]] = [
      names[randomIndex],
      names[currentIndex],
    ];
  }

  //splitting teams
  const half = Math.ceil(names.length / 2);
  const teamOne = names.slice(0, half);
  const teamTwo = names.slice(half);
  teamOne.forEach((player) => {
    let playerName = document.createElement('li');
    playerName.innerText = player; 
    teamOneContainer.appendChild(playerName);
  });
  teamTwo.forEach((player) => {
    let playerName = document.createElement('li');
    playerName.innerText = player; 
    teamTwoContainer.appendChild(playerName);
  });
  console.log(teamOne, teamTwo);
}
