const passOneElement = document.querySelector('#generated-password-one');
const passTwoElement = document.querySelector('#generated-password-two');
const generatePasswordButton = document.querySelector('#generate-password');

generatePasswordButton.addEventListener('click', function generatePassword() {
  passOneElement.textContent = Number(passOneElement.textContent) + 1;
  passTwoElement.textContent = Number(passTwoElement.textContent) + 2;
});
