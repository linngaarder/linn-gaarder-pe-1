const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm() {
    try {
        event.preventDefault();

        if(name.value.trim().length > 0) {
            nameError.style.display = "none";
        } else {
            nameError.style.display = "block";
        }

        if (validateEmail(email.value) === true) {
            emailError.style.display = "none";
        } else {
            emailError.style.display = "block";
        }

        if(message.value.trim().length > 0) {
            messageError.style.display = "none";
        } else {
            messageError.style.display = "block";
        }
    }  catch(error) {
        container.innerHTML += `
        <p class="error">An error has occured while loading the form</p>
        `
    }
}


form.addEventListener("submit", validateForm)

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}