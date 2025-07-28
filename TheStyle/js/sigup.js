const form = document.querySelector('#signup-form');

const emailField = form.querySelector('.email'),
  emailInput = emailField.querySelector('input'),
  passField = form.querySelector('.password'),
  passInput = passField.querySelector('input'),
  cpassField = form.querySelector('.cpassword'),
  cpassInput = cpassField.querySelector('input');

form.onsubmit = (e) => {
  e.preventDefault();
  let valid = true;

  // ===== 1. Validate Email =====
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailInput.value.trim() === '') {
    emailField.classList.add('error');
    emailField.querySelector('.error-txt').innerText = "Email can't be blank";
    valid = false;
  } else if (!emailInput.value.match(emailPattern)) {
    emailField.classList.add('error');
    emailField.querySelector('.error-txt').innerText = 'Enter a valid email';
    valid = false;
  } else {
    emailField.classList.remove('error');
  }

  // ===== 2. Validate Password =====
  if (passInput.value.trim() === '') {
    passField.classList.add('error');
    passField.querySelector('.error-txt').innerText = "Password can't be blank";
    valid = false;
  } else if (passInput.value.length < 6) {
    passField.classList.add('error');
    passField.querySelector('.error-txt').innerText =
      'Password must be at least 6 characters';
    valid = false;
  } else {
    passField.classList.remove('error');
  }

  // ===== 3. Validate Confirm Password =====
  if (cpassInput.value.trim() === '') {
    cpassField.classList.add('error');
    cpassField.querySelector('.error-txt').innerText =
      'Please confirm your password';
    valid = false;
  } else if (cpassInput.value !== passInput.value) {
    cpassField.classList.add('error');
    cpassField.querySelector('.error-txt').innerText = 'Passwords do not match';
    valid = false;
  } else {
    cpassField.classList.remove('error');
  }

  // ===== Final result =====
  if (valid) {
    console.log(`Sign up with ${emailInput.value} and ${passInput.value}`);

    const credentialsString = JSON.stringify({
      email: emailInput.value,
      password: passInput.value,
    });

    localStorage.setItem('credentials', credentialsString);

    form.reset();

    alert('Sign up successful! You can now log in.');

    window.location.href = 'login.html';
  }
};
