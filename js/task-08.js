const formRef = document.querySelector('.login-form');


formRef.addEventListener('submit', manageForm);

function manageForm(element) {
    element.preventDefault();
    const { elements: { email, password } } = element.currentTarget;

    if ( email.value !== '' && password.value !== '') {
        const obj = {};

        obj.email = email.value;
        obj.password = password.value;

        console.log(obj);

        formRef.reset();
        return;
    }

    alert("Всі поля форми мають бути заповнені!");
}