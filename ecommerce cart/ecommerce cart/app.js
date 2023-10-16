console.log('init run'); 
const url = 'https://dummyjson.com/products'
const container = document.getElementById('product-container');
const cartContainer = document.getElementById('cart'); 
const cartToggler = document.getElementById('toggleCart')
const cart = [];

fetch(url)
  .then(res => res.json())
  .then(data => {
    data.products.forEach(product => {
      let productBox = document.createElement('div'); 
      productBox.classList.add('product-box'); 
      let productImg = document.createElement('img'); 
      productImg.src = product.images[0];
      let productName = document.createElement('h4');
      productName.innerText = product.title; 
      let productPrice = document.createElement('h4');
      productPrice.innerText = product.price + '$';

      let addToCartBtn = document.createElement('button');
      addToCartBtn.innerText = 'ADD TO CART';

      productBox.appendChild(productImg);
      productBox.appendChild(productName);
      productBox.appendChild(productPrice);
      productBox.appendChild(addToCartBtn);
      container.appendChild(productBox); 

      addToCartBtn.addEventListener('click', () => {
        addToCart(product);
      });
    });

    console.log(data);

    function addToCart(product) {
      cart.push(product);
      let cartCounter = document.getElementById('cart-counter'); 
      cartCounter.innerHTML = cart.length;
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  });

function displayCart() {
  cartContainer.innerHTML = '';
  cart.forEach(cartItem => {
    let cartBox = document.createElement('div'); 
    cartBox.classList.add('cart-item'); 
    let cartImg = document.createElement('img'); 
    cartImg.src = cartItem.images[0]; 
    let cartName = document.createElement('h4');
    cartName.innerText = cartItem.title; 
    let cartPrice = document.createElement('h4');
    cartPrice.innerText = cartItem.price + '$';

    let removeItem = document.createElement('button');
    removeItem.innerText = 'REMOVE ITEM';

    removeItem.addEventListener('click', () => {
      removeItemFn(cartItem);
    });

    cartBox.appendChild(cartImg);
    cartBox.appendChild(cartName);
    cartBox.appendChild(cartPrice);
    cartBox.appendChild(removeItem);

    cartContainer.appendChild(cartBox); 
  });
}

function removeItemFn(item) {
  const indexOfItem = cart.indexOf(item);
  if (indexOfItem !== -1) {
    cart.splice(indexOfItem, 1);
    localStorage.setItem('cart', JSON.stringify(cart)); 
    displayCart(); 
  }
}

cartToggler.addEventListener('click', () => {
  console.log(cart)
  cartContainer.classList.add('show')
  displayCart();
});


