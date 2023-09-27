const username = document.getElementById('username'); 
const password = document.getElementById('password');
const email = document.getElementById('email')
const passwordConfirm = document.getElementById('password-re');
const submitButton = document.getElementById('submit');

const errorUser = document.querySelector('.error-msg-user')
const errorMail = document.querySelector('.error-msg-email')
const errorPass = document.querySelector('.error-msg-pw')

let checkPass = false;

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    checkFields();
    passChecker();
    console.log('form submitted');
});

email.addEventListener('input', () => {
    checkEmail();
});

password.addEventListener('input', () => {
    passChecker();
});

function checkFields() {
    let usernameValue = username.value.trim()
   
    if (usernameValue === '') {
        username.classList.add('input-invalid')
        errorUser.textContent = 'You can\'t enter a blank field';
    } else {
        username.classList.remove('input-invalid')
        username.classList.add('input-valid')
        errorUser.textContent = '';
    }
}

function checkEmail() {
    let emailValue = email.value.trim();

    if (emailValue === '') {
        email.classList.add('input-invalid');
        errorMail.textContent = 'You can\'t enter a blank field';
    } else {
      
        email.classList.remove('input-invalid');
        email.classList.add('input-valid');
        errorMail.textContent = '';
    }
}

function passChecker() {
    if (password.value === passwordConfirm.value) {
        passwordConfirm.classList.remove('input-invalid');
        checkPass = true;
        errorPass.textContent = '';
    } else if (password.value === '') {
        errorPass.textContent = 'You can\'t enter a blank field';
    } else {
        checkPass = false;
        passwordConfirm.classList.add('input-invalid');
        errorPass.textContent = 'Passwords don\'t match'; 
    }
}
