//Email validation
const contactForm = document.querySelector('#contactForm');
const email = contactForm.elements.email;
const validationMassege = contactForm.querySelector('.error');
validationMassege.style.color = 'red';
validationMassege.style.backgroundColor = '#fff'
validationMassege.style.fontSize = '20px';
validationMassege.style.padding = '0 0 0 10px';
validationMassege.style.borderRadius = '2px';

contactForm.addEventListener('submit', (event) => {
  let isValid = false;
  if (email.value === email.value.toLowerCase()) {
    isValid = true;
  }
  if (isValid === false) {
    event.preventDefault();
    validationMassege.innerText = 'Only Lower Case Symbols Allowed';
    setTimeout(() => {
      validationMassege.textContent = '';
    }, 5000);
  }
});
//End of Email Validation

// password validation
const myInput = document.getElementById("psw");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  let numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
//End of password validation

