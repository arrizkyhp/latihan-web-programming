console.log('this is just a test!');

// Prevent Default
const btnSubmit = document.querySelector('.btnSubmit');

btnSubmit.addEventListener('click', function (event) {
  //   event.preventDefault();
});

const formSignUp = document.querySelector('[name="signUp"]');

formSignUp.addEventListener('submit', function (event) {
  console.log(event.target.name.value);
  console.log(event.target.email.value);
  console.log(event.target.agree.checked);

  if (event.target.agree.checked === true) {
    alert('Data Submitted');
  } else {
    alert('Click Agree!!');
  }

  event.preventDefault();
});
