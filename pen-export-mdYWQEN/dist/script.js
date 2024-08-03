var cart, items;

// Describe this function...
function o() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = cart.slice(-1)[0];

  element_list.appendChild(new_li);
}


cart = [];
items = [null, null, null];


document.getElementById('cartc').addEventListener('click', (event) => {
  event.target.innerText = 'Added';
  event.target.style.backgroundColor = '#cc33cc';
  cart.push('Salma-100$');
  o();

});

document.getElementById('carta').addEventListener('click', (event) => {
  cart.push('Celia- 47$');
  event.target.innerText = 'Added';
  event.target.style.backgroundColor = '#cc33cc';
  o();

});

document.getElementById('cartd').addEventListener('click', (event) => {
  event.target.style.backgroundColor = '#cc33cc';
  event.target.innerText = 'Added';
  cart.push('Arenys-60$');
  o();

});

document.getElementById('cartb').addEventListener('click', (event) => {
  event.target.style.backgroundColor = '#cc33cc';
  event.target.innerText = 'Added';
  cart.push('Dorty-86$');
  o();

});