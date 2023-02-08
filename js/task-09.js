const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
}


refs.button.addEventListener('click', onBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnClick () {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.span.textContent = color;
}


