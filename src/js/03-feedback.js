import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {};

form.addEventListener('input', throttle(onTextareaEdit, 500));
form.addEventListener('submit', onFormSubmit);

fillForm();

function onTextareaEdit(e) {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    console.log(formData);
    formData = {};
    localStorage.removeItem(STORAGE_KEY);

}

function fillForm() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) return;
        formData = JSON.parse(data);
        Object.entries(formData).forEach(([key, val]) => {
            form.elements[key].value = val;
        });
    } catch (error) {
        console.log(error.message);
    }
}