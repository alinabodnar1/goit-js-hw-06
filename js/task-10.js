function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('#controls input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

btnCreate.addEventListener("click", getInputValue);

function getInputValue() {
  createBoxes(inputRef.value);
}

const createBoxes = amount => {

  let arrayDiv = [];
  
  for (let i = 0; i < amount; i += 1) {

    let div = document.createElement('div');

    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.background = getRandomHexColor();

    arrayDiv.push(div);
  }

  boxes.append(...arrayDiv);
}

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', removeBoxes);

function removeBoxes() {
  boxes.remove();
  inputRef.value = '';
}




