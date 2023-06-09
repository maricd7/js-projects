
//api link https://dog.ceo/api/breeds/image/random
//api response {"message":"https:\/\/images.dog.ceo\/breeds\/ovcharka-caucasian\/IMG_20190601_185700.jpg","status":"success"}


const generateBtn = document.getElementById('submitButton');

generateBtn.addEventListener('click',()=>{
    const numberInput = document.getElementById('numberInput').value; 
    console.log(numberInput); 

    for(let i = 0 ; i<numberInput ; i++){
        $.ajax({
            url: 'https://dog.ceo/api/breeds/image/random',
            method: 'GET',
            success: function(response) {
            // console.log('API response:', response);
            const imgContainer = document.getElementById('imgGallery')
            let imgUrl = [response.message] ; 
            imgUrl.forEach(img => {
                img = document.createElement('img');
                img.src = imgUrl; 
                imgContainer.appendChild(img)                 
                
            });
            
            
              
            
            },
            error: function(xhr, status, error) {
              console.log('Error:', status, error);
            }
          });
        
    }

   
})