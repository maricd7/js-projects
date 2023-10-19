const lineElements = [
    document.getElementById('line1'),
    document.getElementById('line2'),
    document.getElementById('line3')
  ];
  
  const next = document.getElementById('next');
  const back = document.getElementById('previous');
  let currentPosition = -1;
  
  function updateDisplay() {
    for (let i = 0; i < lineElements.length; i++) {
      if (i <= currentPosition) {
        lineElements[i].classList.add('active');
      } else {
        lineElements[i].classList.remove('active');
      }
    }
    next.disabled = currentPosition >= 2;
    back.disabled = currentPosition <= -1;
  }
  
  next.addEventListener('click', () => {
    if (currentPosition < 2) {
      currentPosition++;
      updateDisplay();
      console.log(currentPosition + 1);
    }
  });
  
  back.addEventListener('click', () => {
    if (currentPosition > -1) {
      currentPosition--;
      updateDisplay();
      console.log(currentPosition + 1);
    }
  });
  

  updateDisplay();
  