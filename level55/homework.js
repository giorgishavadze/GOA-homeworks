document.getElementById('validateBtn').addEventListener('click', validatePassword);
document.getElementById('generateBtn').addEventListener('click', generatePassword);

function validatePassword() {
    const password = document.getElementById('passwordInput').value;
    const messageElement = document.getElementById('validationMessage');
    const regex = /^[a-zA-Z0-9._-]{4,12}$/;

    if (!password) {
        messageElement.textContent = "პაროლი არ უნდა იყოს ცარიელი!";
    } else if (password.includes(" ")) {
        messageElement.textContent = "პაროლი არ უნდა შეიცავდეს ცარიელ ადგილებს!";
    } else if (!regex.test(password)) {
        messageElement.textContent = "პაროლი უნდა შეიცავდეს მხოლოდ ასოებს, ციფრებს, -, . ან _ და იყოს 4-დან 12-მდე სიმბოლო.";
    } else {
        messageElement.textContent = "პაროლი არის ვალიდური!";
        messageElement.classList.add('valid');
        return;
    }

    messageElement.classList.remove('valid');
}

function generatePassword() {
    const length = Math.floor(Math.random() * 9) + 4; // 4-დან 12-მდე სიმბოლო
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_';
    let password = '';

    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById('generatedPassword').textContent = `შემთხვევითი პაროლი: ${password}`;
}