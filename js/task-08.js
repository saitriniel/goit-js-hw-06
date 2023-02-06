const refs = {
    form: document.querySelector('.login-form'),
    emailInput: document.querySelector('input[type="email"]'),
    passInput: document.querySelector('input[type="password"]'),
}

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const formEmailEl = event.currentTarget.elements.email;
    const formPasswordEl = event.currentTarget.elements.password;

   if(formEmailEl.value === "" || formPasswordEl.value === "") {
    alert('Всі поля повинні бути заповнені! :(')
   } else {const formData = {email: formEmailEl.value, password: formPasswordEl.value};
   console.log(formData);
   event.currentTarget.reset();
    } 
}