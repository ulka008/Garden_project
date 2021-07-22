function validateName() {

    var name = document.getElementById('contact_name').value;

    if(name.length == 0) {

      producePrompt('Name is required', 'name_error' , 'red')
      return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

      producePrompt('First name, please.','name_error', 'red');
      return false;
  }

  producePrompt('Valid', 'name_error', 'green');
  return true;
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function validateEmail () {

var email = document.getElementById('contact_email').value;

if(email.length == 0) {

  producePrompt('Email Invalid','email_error', 'red');
  return false;
}

if(!isEmail(email)) {

  producePrompt('Email Invalid', 'email_error', 'red');
  return false;
}

producePrompt('Valid', 'email_error', 'green');
return true;
}

function validateMessage() {
var message = document.getElementById('contact_message').value;
var required = 30;
var left = required - message.length;

if (left > 0) {
  producePrompt(left + ' more characters required','message_error','red');
  return false;
}

producePrompt('Valid', 'message_error', 'green');
return true;
}

function validateForm() {
if (!validateName() || !validateEmail() || !validateMessage()) {
  jsShow('submit_error');
  producePrompt('Please fix errors to submit.', 'submit_error', 'red');
  setTimeout(function(){jsHide('submit_error');}, 2000);
  return false;
}
else {
}
}

function jsShow(id) {
document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
document.getElementById(id).style.display = 'none';
}


function producePrompt(message, promptLocation, color) {

document.getElementById(promptLocation).innerHTML = message;
document.getElementById(promptLocation).style.color = color;
}
