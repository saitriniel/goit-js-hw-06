const refs = {
    input: document.querySelector('input'),
    output: document.querySelector('#name-output')
}

refs.input.addEventListener('input', onInputChange);


function onInputChange() {
   const inputText = refs.input.value.trim();

   if (inputText !== "") {
    refs.output.textContent = inputText;
   } else refs.output.textContent = "Anonymous";
}


