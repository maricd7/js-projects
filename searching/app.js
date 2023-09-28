const url = 'http://jsonplaceholder.typicode.com/users';
const input = document.getElementById('search-input');
const container = document.getElementById('results-container');

document.addEventListener('DOMContentLoaded', () => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
    
      function renderResults(dataToRender) {
        container.innerHTML = '';
        dataToRender.forEach(user => {
          let name = document.createElement('h2');
          let username = document.createElement('h4');
          username.innerHTML = user.username;
          name.innerHTML = user.name;
          container.appendChild(name);
          container.appendChild(username);
        });
      }
      renderResults(data);

      input.addEventListener('keyup', () => {
        const inputValue = input.value.toLowerCase();
        const filteredData = data.filter(user => user.username.toLowerCase().includes(inputValue) || user.name.toLowerCase().includes(inputValue));
        renderResults(filteredData);
      });
    });
});
