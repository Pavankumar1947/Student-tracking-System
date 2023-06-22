function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');

    if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}