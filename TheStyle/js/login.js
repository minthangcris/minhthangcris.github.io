const form = document.querySelector('form');
(eField = form.querySelector('.email')),
  (eInput = eField.querySelector('input')),
  (pField = form.querySelector('.password')),
  (pInput = pField.querySelector('input'));

form.onsubmit = (e) => {
  e.preventDefault(); //preventing from form submitting
  try {
    //if email and password is blank then add shake class in it else call specified function
    eInput.value == '' ? eField.classList.add('shake', 'error') : checkEmail();
    pInput.value == '' ? pField.classList.add('shake', 'error') : checkPass();

    setTimeout(() => {
      //remove shake class after 500ms
      eField.classList.remove('shake');
      pField.classList.remove('shake');
    }, 500);

    eInput.onkeyup = () => {
      checkEmail();
    }; //calling checkEmail function on email input keyup
    pInput.onkeyup = () => {
      checkPass();
    }; //calling checkPassword function on pass input keyup

    function checkEmail() {
      //checkEmail function
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
      if (!eInput.value.match(pattern)) {
        //if pattern not matched then add error and remove valid class
        eField.classList.add('error');
        eField.classList.remove('valid');
        let errorTxt = eField.querySelector('.error-txt');
        //if email value is not empty then show please enter valid email else show Email can't be blank
        eInput.value != ''
          ? (errorTxt.innerText = 'Enter a valid email address')
          : (errorTxt.innerText = "Email can't be blank");
      } else {
        //if pattern matched then remove error and add valid class
        eField.classList.remove('error');
        eField.classList.add('valid');
      }
    }
    function checkPass() {
      //checkPass function
      if (pInput.value == '') {
        //if pass is empty then add error and remove valid class
        pField.classList.add('error');
        pField.classList.remove('valid');
      } else {
        //if pass is empty then remove error and add valid class
        pField.classList.remove('error');
        pField.classList.add('valid');
      }
    }

    //if eField and pField doesn't contains error class that mean user filled details properly
    if (
      !eField.classList.contains('error') &&
      !pField.classList.contains('error')
    ) {
      const signedUpCredentials = JSON.parse(
        localStorage.getItem('credentials')
      ) || {
        email: '',
        password: '',
      };

      const validCredentials =
        signedUpCredentials?.email === eInput.value &&
        signedUpCredentials?.password === pInput.value;

      if (validCredentials) {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to home page
      } else {
        alert('Invalid email or password. Please try again.');
        eField.classList.add('error');
        pField.classList.add('error');
      }
    }
  } catch (error) {
    console.log(error);
    alert('An error occurred. Please try again later.');
  }
};
