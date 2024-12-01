const container = document.getElementById('container');
const registerbtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerbtn.addEventListener('click', () => {
    container.classList.add("active");
})

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
})

