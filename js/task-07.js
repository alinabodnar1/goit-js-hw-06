const textInput = document.querySelector('#font-size-control');
const textFont = document.querySelector('#text');


textInput.addEventListener('input', changeTextSize);

function changeTextSize(element) {
    textFont.style.fontSize = `${element.currentTarget.value}px`;
    
    textFont.style.fontSize = `${textInput.value}px`;
}