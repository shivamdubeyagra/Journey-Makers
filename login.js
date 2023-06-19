let form = document.querySelector('form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');

let signed = JSON.parse(localStorage.getItem('signin'));
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let nameValue = nameInput.value.trim();
  let emailValue = emailInput.value.trim();
  let passwordValue = passwordInput.value.trim();

  if (nameValue === '' || emailValue === '' || passwordValue === '') {
    alert('Please enter all credentials');
    return;
  }

    let found = false;
    signed.forEach((e) => {
        if (e.name === nameValue && e.email === emailValue && e.password === passwordValue) {
        found = true;
    }
});


  if (found) {
    alert('Log In Successful');
    window.location.href = 'index.html';
  } else {
    alert('Wrong Credentials');
  }
  form.reset();
});
