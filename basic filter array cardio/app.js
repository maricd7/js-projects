const arrayOfObjects = [
    { name: 'Object 1', age: 25, city: 'San Francisco' },
    { name: 'Object 2', age: 30, city: 'Los Angeles' },
    { name: 'Object 3', age: 28, city: 'New York' },
    { name: 'Object 4', age: 22, city: 'New York' },
    { name: 'Object 5', age: 35, city: 'San Francisco' }
  ];
  
  console.log(arrayOfObjects);

  const container = document.getElementById('container'); 
  const nyBtn = document.getElementById('newyork'); 
  const laBtn = document.getElementById('losangeles'); 
  const sfBtn = document.getElementById('sanfrancisco');
  const allBtn = document.getElementById('all')

  arrayOfObjects.forEach(obj =>{
    let objName = document.createElement('h2'); 
    let objCity = document.createElement('h3');

    objName.innerHTML = obj.name ; 
    objCity.innerHTML = obj.city ; 

    container.appendChild(objName); 
    container.appendChild(objCity); 
  })

  nyBtn.addEventListener('click', ()=>{
    container.innerHTML = ''
    let newYorkFilter = arrayOfObjects.filter(obj=>obj.city ==='New York') ;
    newYorkFilter.forEach(obj=>{
        let objName = document.createElement('h2'); 
        let objCity = document.createElement('h3');
        objName.innerHTML = obj.name ; 
        objCity.innerHTML = obj.city ; 
    
        container.appendChild(objName); 
        container.appendChild(objCity); 
    })
  })
 sfBtn.addEventListener('click', ()=>{
    container.innerHTML = ''
    let sfFilter = arrayOfObjects.filter(obj=>obj.city ==='San Francisco') ;
    sfFilter.forEach(obj=>{
        let objName = document.createElement('h2'); 
        let objCity = document.createElement('h3');
        objName.innerHTML = obj.name ; 
        objCity.innerHTML = obj.city ; 
    
        container.appendChild(objName); 
        container.appendChild(objCity); 
    })
  })
  laBtn.addEventListener('click', ()=>{
    container.innerHTML = ''
    let laFilter = arrayOfObjects.filter(obj=>obj.city ==='Los Angeles') ;
    laFilter.forEach(obj=>{
        let objName = document.createElement('h2'); 
        let objCity = document.createElement('h3');
        objName.innerHTML = obj.name ; 
        objCity.innerHTML = obj.city ; 
    
        container.appendChild(objName); 
        container.appendChild(objCity); 
    })
  })
  allBtn.addEventListener('click', ()=>{
    container.innerHTML = ''
    arrayOfObjects.forEach(obj =>{
        let objName = document.createElement('h2'); 
        let objCity = document.createElement('h3');
    
        objName.innerHTML = obj.name ; 
        objCity.innerHTML = obj.city ; 
    
        container.appendChild(objName); 
        container.appendChild(objCity); 
      })
  })
