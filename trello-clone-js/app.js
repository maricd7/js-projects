const listContainer = document.getElementById('lists');
const createList = document.getElementById('create-list-btn');
let cardIdCounter = 0;

createList.addEventListener('click', () => {
  const list = document.createElement('div');
  const listTitle = document.createElement('input');
  const submitListTitle = document.createElement('button');

  submitListTitle.innerHTML = 'Create card';

  list.classList.add('lista-class');
  list.classList.add('lista');

  listTitle.placeholder = 'Enter List Title';

  listContainer.appendChild(list);
  list.appendChild(listTitle);
  list.appendChild(submitListTitle);

  submitListTitle.addEventListener('click', () => {
    let listName = document.createElement('input');
    listName.placeholder = 'Enter name of your list'

    let listTitleSub = document.createElement('div');
    const cardId = `card-${cardIdCounter}`;
    cardIdCounter++;
    list.appendChild(listName)
    listTitleSub.innerHTML = listTitle.value;
    listTitleSub.classList.add('card');
    listTitleSub.id = cardId;
    list.appendChild(listTitleSub);
    


    listTitleSub.draggable = true;

    listTitleSub.addEventListener('dragstart', (event) => {
      
      event.dataTransfer.setData('text/plain', event.target.id);
    });
  });
});


listContainer.addEventListener('dragover', (event) => {
  event.preventDefault();
});

listContainer.addEventListener('drop', (event) => {
  event.preventDefault();
  const cardId = event.dataTransfer.getData('text/plain');
  const card = document.getElementById(cardId);
  const targetList = event.target;

 
  targetList.appendChild(card);
});
