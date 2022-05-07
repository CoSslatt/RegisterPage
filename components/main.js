const loginForm = document.querySelector('.login__form');
const input = document.querySelectorAll('.input');

let account = {
    name: 'Zbyszek',
    password: '123'
};

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    loginFunc();
})

function loginFunc() {
    if (input[0].value === 'Zbyszek' && input[1].value === '123') {
        alert("Connected");
    }
    else
        alert('Wrong name or password');
};