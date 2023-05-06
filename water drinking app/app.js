
let userGoal = 100;
const dailyInput = document.getElementById('daily-input') ; 
const calcBtn = document.getElementById('calc-btn');
const clearBtn = document.getElementById('clear-btn');
let userGoalWritten = document.getElementById('ugn');




clearBtn.addEventListener('click',()=>{
    
        localStorage.clear();
        console.log("Local storage cleared!");
    
})




function saveGoal(){
    localStorage.setItem('content', userGoal)
}




function userInput(){
    userGoal = dailyInput.value;
    //console.log(userGoal);

    if(userGoal>10){
        console.log("Thats too much water")
    }else if(userGoal==0){
        console.log("Please eneter value")
    }else{
        saveGoal();
        window.location.href = "calculator.html"
        

    }
    
   


}



calcBtn.addEventListener('click', ()=>{
    let tfpercent = 25;
    let fpercent = 50;
    let sfpercent = 75;
    let hpercent = 100;
    let glassWater = document.querySelector('.water');

    let waterDrank =parseInt(document.getElementById('waterDrank').value);
    let waterGoal = parseInt(localStorage.getItem('content'));
    let previousWaterDrank = parseInt(localStorage.getItem('contentw'));
    
    if (previousWaterDrank) {
        waterDrank += previousWaterDrank;
    }

    if(waterDrank <= ((tfpercent/100)*waterGoal)){
        glassWater.style.height = '25%' ; 
        
    }else if(waterDrank <= ((fpercent/100)*waterGoal)){
        glassWater.style.height = '50%' ; 
        
    }else if (waterDrank <= ((sfpercent/100)*waterGoal)){
        glassWater.style.height = '75%' ;
        
    }else if (waterDrank <= ((hpercent/100)*waterGoal)){
        glassWater.style.height = '100%' ;   
        
    }else if (waterDrank>waterGoal){
        console.log("You exceeded your daily goal")
    }
    
    localStorage.setItem('contentw', waterDrank);
    localStorage.setItem('content', waterGoal);
})

