const refs = {
    decrement: document.querySelector('button[data-action="decrement"]'),
    value: document.querySelector('#value'),
    increment: document.querySelector('button[data-action="increment"]'),
}

let counterValue = 0;

refs.value.textContent = counterValue;
refs.decrement.addEventListener('click', onDecrementBtnClick);
refs.increment.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
    counterValue -=1;
    refs.value.textContent = counterValue;
    console.log(counterValue);
}

function onIncrementBtnClick() {
    counterValue +=1;
    refs.value.textContent = counterValue;
    console.log(counterValue);
}