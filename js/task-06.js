const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (inputEl.value.length <= inputEl.dataset.length) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } 
    else 
    {   inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}

