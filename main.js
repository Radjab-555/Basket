let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=> {
  body.classList.add('active');
})
closeShopping.addEventListener('click', ()=> {
  body.classList.remove('active');
})

let products = [
  {
    id: 1,
    name: 'PRODUCTS NAME 1',
    Image: '1.jpg',
    price: '5000'
   },
  {
    id: 2,
    name: 'PRODUCTS NAME 2',
    Image: '2.jpg',
    price: '3000'
  },
  {
    id: 3,
    name: 'PRODUCTS NAME 3',
    Image: '3.jpg',
    price: '5000'
  },
  {
    id: 4,
    name: 'PRODUCTS NAME 4',
    Image: '4.jpg',
    price: '7500'
  },
  {
    id: 5,
    name: 'PRODUCTS NAME 5',
    Image: '5.jpg',
    price: '4000'
  },
  {
    id: 6,
    name: 'PRODUCTS NAME 6',
    Image: '6.jpg',
    price: '8000'
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
    <img src="images/${value.images}"/
    <div class="title">${value.name}</div>
    <div class="price">${value.price.toLocaleString()}</div>
    <button onclick="addToCard(${key})">Add To Card</Button`; 
    list.appendChild(newDiv)
  })
}
initApp();