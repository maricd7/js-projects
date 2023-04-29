
const btn = document.getElementById("generateBtn");

btn.addEventListener('click', function(){
  fetch('https://en.wikipedia.org/api/rest_v1/page/random/summary')
  .then(response => response.json())
  .then(data => {
    
    const title = data.title;
    const summary = data.extract;
    const link = data.content_urls.desktop.page;
    const imageContainer = document.getElementById('image-container');
  
    
    

    const headingArt = document.getElementById('article-heading');
    headingArt.innerText = title;
    const summaryArt = document.getElementById('artP');
    summaryArt.innerText = summary;
    const linkArt = document.getElementById('link-art');
    linkArt.innerText = link;

    if (data.thumbnail) {
      const imageUrl = data.thumbnail.source;
      const imageAlt = data.title;
      const image = `<img src="${imageUrl}" alt="${imageAlt}">`;
      imageContainer.innerHTML = image;
  } else {
      imageContainer.innerHTML = '';
  }
    
   
  })
  .catch(error => alert(error));
  
});


