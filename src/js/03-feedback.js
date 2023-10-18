import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input')
const textareaEl = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onTextareaEdit, 500));
form.addEventListener('submit', onFormSubmit);

fillForm();

function onTextareaEdit() {
    const email = emailEl.value;
    const message = textareaEl.value;

    localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    console.log(localStorage.getItem('feedback-form-state'));
    localStorage.removeItem('feedback-form-state');

}

function fillForm() {
    const savedInfo = localStorage.getItem('feedback-form-state');
    const parsedInfo = JSON.parse(savedInfo);
    if (parsedInfo) {
        emailEl.value = parsedInfo.email;
        textareaEl.value = parsedInfo.message;
    }
}