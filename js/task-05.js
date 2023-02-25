const nameRef = document.querySelector('#name-input');
const changeSpan = document.querySelector('#name-output');

nameRef.addEventListener('input', (event) => {
    event.preventDefault();

    if (event.currentTarget.value.trim() === '') {
         changeSpan.textContent = "Anonymous";
        return;
        
    }
    changeSpan.textContent = event.currentTarget.value;

    // або через тернарний оператор
    // changeSpan.textContent = event.currentTarget.value.trim() === '' ? "Anonymous" : `${event.currentTarget.value}`;
});
