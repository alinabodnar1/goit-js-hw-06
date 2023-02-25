const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', (event) => {
    event.preventDefault();

    if (event.currentTarget.value.length === Number(textInput.dataset.length)) {

        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
        return;
    }
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
});