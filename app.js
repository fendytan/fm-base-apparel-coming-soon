const email_input = document.querySelector(".email-input");
const email_button = document.querySelector(".email-button");
const email_error_icon = document.querySelector(".email-error-icon");
const email_error_text = document.querySelector(".email-error-text");

email_button.addEventListener("click", validateEmail);

function validateEmail() {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email_input.value.match(mailformat)) {
    return true;
  } else {
    email_error_icon.classList.toggle("error");
    email_error_text.classList.toggle("error");
    return false;
  }
}
