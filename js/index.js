const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

const passOneElement = document.querySelector('#generated-password-one');
const passTwoElement = document.querySelector('#generated-password-two');
const generatePasswordButton = document.querySelector('#generate-password');

const getRandomCharacter = () => {
  const randomCharacters = Math.floor(Math.random() * characters.length);
  return characters[randomCharacters];
};

const getRandomCharacters = () => {
  let i = 0;
  const number = 15;
  let randomCharacters = '';

  while (i < number) {
    randomCharacters += getRandomCharacter();
    i += 1;
  }
  return randomCharacters;
};

generatePasswordButton.addEventListener('click', function generatePassword() {
  passOneElement.textContent = getRandomCharacters();
  passTwoElement.textContent = getRandomCharacters();
});
