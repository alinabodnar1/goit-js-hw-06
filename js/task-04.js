const decrRef = document.querySelector('button[data-action="decrement"]');
const incRef = document.querySelector('button[data-action="increment"]');
const changeValue = document.querySelector('#value');

let counterValue = 0;

decrRef.addEventListener('click', () => {
  counterValue  -= 1;
  changeValue.textContent = counterValue;
});

incRef.addEventListener('click', () => {
  counterValue  += 1;
  changeValue.textContent = counterValue;
});
 
