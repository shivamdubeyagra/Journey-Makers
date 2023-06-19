let form = document.querySelector('form');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let signData =  JSON.parse(localStorage.getItem('signin')) ||[];
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let obj ={
        name:name.value,
        email:email.value,
        password:password.value
    }
    signData.push(obj);
    localStorage.setItem('signin',JSON.stringify(signData));
    form.reset();
    alert('Sign Up Successful.');
    window.location.href='login.html'
})
