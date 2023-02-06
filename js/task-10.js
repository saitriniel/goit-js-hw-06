const refs = {
  createBtn : document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  container: document.querySelector('#boxes'),
  input: document.querySelector('input[type="number"]')
}

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  amount = refs.input.value;
  const boxesToCreate = [];

  for (let i = 0; i < amount; i += 1) {
  const div = document.createElement('div');
  div.style.width = `${30 + i*10}px`;
  div.style.height = `${30 + i*10}px`;
  div.style.backgroundColor = getRandomHexColor();

  boxesToCreate.push(div);
}
 refs.container.append(...boxesToCreate);
}

function destroyBoxes() {
refs.container.innerHTML = '';
refs.input.value = '';
}
