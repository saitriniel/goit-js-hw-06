const refs = {
    form: document.querySelector('.login-form'),
    emailInput: document.querySelector('input[type="email"]'),
    passInput: document.querySelector('input[type="password"]'),
}

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const formEmailEl = event.currentTarget.email.value.trim();
    const formPasswordEl = event.currentTarget.password.value;

   if(formEmailEl === "" || formPasswordEl === "") {
    alert('Всі поля повинні бути заповнені! :(')
   } else {const formData = {email: formEmailEl, password: formPasswordEl};
   console.log(formData);
   event.currentTarget.reset();
    } 
}