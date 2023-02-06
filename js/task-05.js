const refs = {
    input: document.querySelector('input'),
    output: document.querySelector('#name-output')
}

refs.input.addEventListener('input', onInputChange);


function onInputChange(event) {
   refs.input.value !== "" ? refs.output.textContent = event.currentTarget.value : refs.output.textContent = 'Anonymous';
}


