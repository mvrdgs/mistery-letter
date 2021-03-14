const textInput = document.querySelector('#carta-texto');
const btnCreate = document.querySelector('#criar-carta');
const textDisplay = document.querySelector('#carta-gerada');

function generateLetter() {
  const splitedWords = textInput.value.split(' ');
  let textOut = '';
  if (splitedWords.length !== ['']) {
    for(let index = 0; index < splitedWords.length; index += 1) {
      textOut += `<span>${splitedWords[index]}</span>`;
    }
    console.log(textOut);
  }
  return textOut;
}

function generateButton() {
  textDisplay.innerHTML = generateLetter();
}

btnCreate.addEventListener('click', generateButton);
