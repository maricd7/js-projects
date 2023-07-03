const emojis = {
    happy: '😄',
    sad: '😢',
    love: '❤️',
    laughing: '😂',
    wink: '😉',
    thumbsUp: '👍',
    thumbsDown: '👎',
    fire: '🔥',
    star: '⭐️',
    heartEyes: '😍',
    angry: '😡',
    crying: '😭',
    surprised: '😮',
    sleepy: '😴',
    cool: '😎',
    nerd: '🤓',
    ghost: '👻',
    alien: '👽',
    cat: '🐱',
    dog: '🐶',
  };
  
  const translateBtn = document.getElementById('translate-btn');
  translateBtn.addEventListener('click', (e) => {
    const userInput = document.getElementById('user-text').value;
    const emojiOutput = document.getElementById('output');
  
    const userFilter = emojis[userInput];
    emojiOutput.textContent = userFilter || 'Emoji not found';
  
    e.preventDefault();
  });
  