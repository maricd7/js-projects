const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const yourChoice = document.getElementById('your-choice');
const computerChoiceElement = document.getElementById('computer-choice');

rock.addEventListener('click', () => {
    let choice = document.createElement('img');
    choice.classList.add('option-img');
    choice.src = 'resources/rock.png';

    clearChoices();
    yourChoice.appendChild(choice);
    computerChoice();
});

paper.addEventListener('click', () => {
    let choice = document.createElement('img');
    choice.classList.add('option-img');
    choice.src = 'resources/paper.png';

    clearChoices();
    yourChoice.appendChild(choice);
    computerChoice();
});

scissors.addEventListener('click', () => {
    let choice = document.createElement('img');
    choice.classList.add('option-img');
    choice.src = 'resources/scissors.png';

    clearChoices();
    yourChoice.appendChild(choice);
    computerChoice();
});

function clearChoices() {
    yourChoice.innerHTML = '';
    computerChoiceElement.innerHTML = '';
}

function computerChoice() {
    let pick = Math.floor(Math.random() * 3) + 1;
    let computer = document.createElement('img');
    computer.classList.add('option-img');

    if (pick == 1) {
        computer.src = 'resources/rock.png';
    } else if (pick == 2) {
        computer.src = 'resources/paper.png';
    } else {
        computer.src = 'resources/scissors.png';
    }

    computerChoiceElement.appendChild(computer);
}
