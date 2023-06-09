const usernameField = document.getElementById('username-field');
const usernameError = document.getElementById('username-error-message');

const passwordField = document.getElementById('password-field');
const passwordError = document.getElementById('password-error-message');

usernameField.addEventListener('keyup', handleInputUsername);
passwordField.addEventListener('keyup', handleInputPassword);

function handleInputUsername(e) {
    if (e.target.value.includes('@')) {
        usernameError.textContent = "Gebruikersnaam mag geen @ bevatten";
    } else usernameError.textContent = "";
}

function handleInputPassword(e) {
    if (e.target.value === "" || e.target.value.length > 6) {
        passwordError.textContent = "";
    } else {
        passwordError.textContent = "Wachtwoord is te kort, gebruik minimaal 6 tekens";
    }
}



