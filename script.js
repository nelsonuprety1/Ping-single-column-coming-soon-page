const form = document.querySelector('form');
form.addEventListener('submit', validateEmail);

const emailInput = document.querySelector('#email');
emailInput.setCustomValidity('');

function validateEmail(event) {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const errorMsg = document.querySelector('.error-msg');

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errorMsg.style.display = 'block';
    emailInput.style.border = '1px solid red';
  } else {
    errorMsg.style.display = 'none';
    emailInput.style.border = '';
    document.querySelector('#email').value = '';
  }
}
