const star1 = document.getElementById("star-1")
const star2 = document.getElementById("star-2")
const star3 = document.getElementById("star-3")
const star4 = document.getElementById("star-4")
const star5 = document.getElementById("star-5")
const emoji = document.getElementById("emoji")
let ratingText = document.getElementById('rating')


function hovering(){
    
    star1.onmouseover = ()=>{
        star1.src = 'resources/star-gold.png'
        emoji.src = 'resources/crying.png'
        ratingText.textContent = 'Poor.'
    }
    star1.onmouseout = ()=>{
        star1.src = 'resources/star.png'
        emoji.src = 'resources/smile.png'
        ratingText.innerText = 'Enter Your Rating.'
        
       
    }
    star2.onmouseover = ()=>{
        star1.src = 'resources/star-gold.png'
        star2.src = 'resources/star-gold.png'
        emoji.src = 'resources/sad.png'
        ratingText.innerText = 'Meh.'
    }
    star2.onmouseout = ()=>{
        star1.src = 'resources/star.png'
        star2.src = 'resources/star.png'
        emoji.src = 'resources/smile.png'
        ratingText.innerText = 'Enter Your Rating.'
    }
    
    star3.onmouseover = ()=>{
        star1.src = 'resources/star-gold.png'
        star2.src = 'resources/star-gold.png'
        star3.src = 'resources/star-gold.png'
        emoji.src = 'resources/straight.png'
        ratingText.innerText = 'It was ok.'
    }
    star3.onmouseout = ()=>{
        star1.src = 'resources/star.png'
        star2.src = 'resources/star.png'
        star3.src = 'resources/star.png'
        emoji.src = 'resources/smile.png'
        ratingText.innerText = 'Enter Your Rating.'
    }
    star4.onmouseover = ()=>{
        star1.src = 'resources/star-gold.png'
        star2.src = 'resources/star-gold.png'
        star3.src = 'resources/star-gold.png'
        star4.src = 'resources/star-gold.png'
        emoji.src = 'resources/smile.png'
        
        ratingText.innerText = 'Good!'
        
    }
    star4.onmouseout = ()=>{
        star1.src = 'resources/star.png'
        star2.src = 'resources/star.png'
        star3.src = 'resources/star.png'
        star4.src = 'resources/star.png'
        emoji.src = 'resources/smile.png'
        ratingText.innerText = 'Enter Your Rating.'
    }
    star5.onmouseover = ()=>{
        star1.src = 'resources/star-gold.png'
        star2.src = 'resources/star-gold.png'
        star3.src = 'resources/star-gold.png'
        star4.src = 'resources/star-gold.png'
        star5.src = 'resources/star-gold.png'
        emoji.src = 'resources/laughing.png'
        ratingText.innerText = 'It was the Best!'
    }
    star5.onmouseout = ()=>{
        star1.src = 'resources/star.png'
        star2.src = 'resources/star.png'
        star3.src = 'resources/star.png'
        star4.src = 'resources/star.png'
        star5.src = 'resources/star.png'
        emoji.src = 'resources/smile.png'
        ratingText.innerText = 'Enter Your Rating.'
    }
}

star1.addEventListener('click', ()=>{
    star1.onmouseover = ()=>{
        star1.src = 'resources/star-gold.png'
        emoji.src = 'resources/crying.png'
        ratingText.textContent = 'Poor.'
    }
    star1.onmouseout = ()=>{
        star1.src = 'resources/star-gold.png'
        emoji.src = 'resources/crying.png'
        ratingText.textContent = 'Poor.'
        
       
    }
})
star2.addEventListener('click', ()=>{
    star2.onmouseover = ()=>{
        star1.src = 'resources/star-gold.png'
        star2.src = 'resources/star-gold.png'
        emoji.src = 'resources/sad.png'
        ratingText.innerText = 'Meh.'
    }
    star2.onmouseout = ()=>{
        star1.src = 'resources/star-gold.png'
        star2.src = 'resources/star-gold.png'
        emoji.src = 'resources/sad.png'
        ratingText.innerText = 'Meh.'
    }
})
star3.addEventListener('click', ()=>{
    star3.onmouseover = ()=>{
        star1.src = 'resources/star-gold.png'
        star2.src = 'resources/star-gold.png'
        star3.src = 'resources/star-gold.png'
        emoji.src = 'resources/straight.png'
        ratingText.innerText = 'It was ok.'
    }
    star3.onmouseout = ()=>{
        star1.src = 'resources/star-gold.png'
        star2.src = 'resources/star-gold.png'
        star3.src = 'resources/star-gold.png'
        emoji.src = 'resources/straight.png'
        ratingText.innerText = 'It was ok.'
    }
})
star4.addEventListener('click', ()=>{
    star4.onmouseover = ()=>{
        star1.src = 'resources/star-gold.png'
        star2.src = 'resources/star-gold.png'
        star3.src = 'resources/star-gold.png'
        star4.src = 'resources/star-gold.png'
        emoji.src = 'resources/smile.png'
        
        ratingText.innerText = 'Good!'
        
    }
    star4.onmouseout = ()=>{
        star1.src = 'resources/star-gold.png'
        star2.src = 'resources/star-gold.png'
        star3.src = 'resources/star-gold.png'
        star4.src = 'resources/star-gold.png'
        emoji.src = 'resources/smile.png'
        ratingText.innerText = 'Good!'
    }
})
star5.addEventListener('click', ()=>{
    star5.onmouseover = ()=>{
        star1.src = 'resources/star-gold.png'
        star2.src = 'resources/star-gold.png'
        star3.src = 'resources/star-gold.png'
        star4.src = 'resources/star-gold.png'
        star5.src = 'resources/star-gold.png'
        emoji.src = 'resources/laughing.png'
        ratingText.innerText = 'It was the Best!'
    }
    star5.onmouseout = ()=>{
        star1.src = 'resources/star-gold.png'
        star2.src = 'resources/star-gold.png'
        star3.src = 'resources/star-gold.png'
        star4.src = 'resources/star-gold.png'
        star5.src = 'resources/star-gold.png'
        emoji.src = 'resources/laughing.png'
        ratingText.innerText = 'It was the Best!'
        
    }
    
})
hovering();
