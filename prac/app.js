console.log('Prac'); 

let i = [1,2,3]; 
let j = [5]; 
let k = [...i,...j];

console.log(k); 

const arr = ['deki', 'losmi', 'coa']; 

let newArr = arr.map((el)=>{
    return el.includes('i')
})
console.log(newArr);

let filtered =  arr.filter((el)=>{
    return(el.length>3);
})
console.log(filtered); 


const numbers = [175, 50, 25];

reducedNums= numbers.reduce((total, num)=>{
    return total+num; 
});


console.log(reducedNums) ;


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>{
        if (data && data.length > 0) {
            const obj = data[0];
            console.log(obj);
            if (obj.hasOwnProperty('userId')) {
                console.log('true');
            } else {
                console.log('false');
            }
        } else {
            console.log('Data is empty or undefined.');
        }
    

    }
    )