const startBtn = document.getElementById('start');
const elementsContainer =    document.getElementById('input-container')
const triesLeft = document.getElementById('trys');
const guessBtn = document.getElementById('guess');
let statusContainer = document.getElementById('status');
const userInput = document.getElementById('input');
const hint = document.getElementById('hint')
let num;



let tries = 5 ;
// let points = triesLeft * 20 ;

triesLeft.innerHTML = `You have ${tries} tries left.`; 
console.log(triesLeft.innerHTML)


startBtn.addEventListener('click' ,()=>{
    const inputContainer = document.getElementById('input-container');
    inputContainer.style.display='flex'

    function getRandomNumber(){
       num = Math.floor(Math.random()*100);
       console.log(num)
       return num;
    }
    getRandomNumber()

  

    guessBtn.addEventListener('click',()=>{
        let userGuess = parseInt(userInput.value);
        if(userGuess > 100 || userGuess< 0 ){
           let tryAgain = document.createElement('span');
           tryAgain.innerHTML = 'Please enter valid number'
           elementsContainer.appendChild(tryAgain)
        }else if(!userGuess){
            console.log('enter valid guess')
        }else if(num ==userGuess){
           statusContainer.innerHTML =`You guessed it! You scored ${tries*20} points.`
        }
        else{
            tries--; 
            console.log(tries)
            triesLeft.innerHTML = `<span style='color:red'>Incorrect number</span> ${tries} tries left.`; 
            if(userGuess > num){
                hint.innerText ='Your number is greater than ours.' 
            }else if(userGuess < num){
                hint.innerText ='Your number is smaller than ours.' 
            }
            if(tries==0){
                triesLeft.innerText = `You failed. Number is ${num}`
                guessBtn.disabled=true;
                console.log(triesLeft)
                console.log('You failed')
            }
        }
    })
})


