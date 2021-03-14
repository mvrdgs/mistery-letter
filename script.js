const textInput = document.querySelector('#carta-texto');
const btnCreate = document.querySelector('#criar-carta');
const textDisplay = document.querySelector('#carta-gerada');

function generateLetter() {
  const splitedWords = textInput.value.split(' ');
  let textOut = '';
  for (let index = 0; index < splitedWords.length; index += 1) {
    if (splitedWords[index] !== '') {
      textOut += `<span>${splitedWords[index]}</span>`;
    }
  }
  if (textOut === '') {
    textOut = 'Por favor, digite o conteúdo da carta.';
  }
  console.log(textOut);
  return textOut;
}

function generateButton() {
  textDisplay.innerHTML = generateLetter();
}

btnCreate.addEventListener('click', generateButton);
