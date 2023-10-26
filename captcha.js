function generateRandomText() {
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const captchaText = Array.from({ length: 6 }, () => possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))).join('');
    return captchaText;
}

function checkCaptcha() {
    const userInput = document.getElementById("captcha-input").value;
    const captchaText = document.getElementById("captcha-text").textContent;

    if (userInput === captchaText) {
        document.getElementById("captcha-message").textContent = "CAPTCHA correct. You're human!";
    } else {
        document.getElementById("captcha-message").textContent = "CAPTCHA incorrect. Try again.";
        refreshCaptcha();
    }
}

function refreshCaptcha() {
    const captchaText = generateRandomText();
    document.getElementById("captcha-text").textContent = captchaText;
    document.getElementById("captcha-input").value = '';
}
