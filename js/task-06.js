const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', onInputBlur);

function changeClass (remove, add) {
    inputEl.classList.remove(remove);
    inputEl.classList.add(add);
}

function onInputBlur() {
    if (inputEl.value.length <= Number(inputEl.dataset.length)) {
        changeClass ('invalid', 'valid');
    } 
    else 
    {   changeClass ('valid', 'invalid'); }
}

