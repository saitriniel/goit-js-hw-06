const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector('#ingredients');
console.log(container);

const items = ingredients.map(item => {const itemEl = document.createElement('li');
itemEl.textContent = item;
itemEl.classList.add('item');

return itemEl;
});

container.append(...items);