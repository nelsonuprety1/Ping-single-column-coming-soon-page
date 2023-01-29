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
  } else {
    errorMsg.style.display = 'none';

    document.querySelector('#email').value = '';
  }
}
