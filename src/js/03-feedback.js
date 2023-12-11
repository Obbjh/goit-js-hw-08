import throttle from 'lodash.throttle';

const loginForm = document.querySelector(`.feedback-form`);
const emailForm = document.querySelector(`.feedback-form input`);
const textareaForm = document.querySelector(`.feedback-form textarea`);

KEY_STORAGE = `feedback-form-state`;

let formData = {};
    
loginForm.addEventListener(`submit`, onFormSubmit);
loginForm.addEventListener(`input`, throttle(onFormInput, 500));

PopulateTextarea();

function onFormSubmit(e) {   
    e.preventDefault();

    if (!textareaForm.value || !emailForm.value) {
        alert('Всі поля форми, мають бути заповенені.');
        return;
    }

    console.log(formData);
   
    e.currentTarget.reset();
    localStorage.removeItem(KEY_STORAGE);
    formData = {};
}

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));

    console.log({
        email: formData.email,
        message: formData.message
    });
}

function PopulateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(KEY_STORAGE));

    if (savedMessage && savedMessage.email) {
        emailForm.value = savedMessage.email;
    }

    if (savedMessage && savedMessage.message) {
        textareaForm.value = savedMessage.message;
    }
}


