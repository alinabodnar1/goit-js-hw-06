const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('button');
const spanRef = document.querySelector('.color');

btnRef.addEventListener('click', changeColor);

function changeColor() {

  bodyRef.style.background = getRandomHexColor();
  
  spanRef.textContent = `${bodyRef.style.background}`;

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
