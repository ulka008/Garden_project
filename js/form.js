// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("form_sample");
var createForm = document.createElement("form"); // Create New Element Form
createForm.setAttribute("action", ""); // Setting Action Attribute on Form
createForm.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createForm);

var heading = document.createElement("h2"); // Heading of Form
heading.innerHTML = "Contact Form ";
createForm.appendChild(heading);

var line = document.createElement("hr"); // Giving Horizontal Row After Heading
createForm.appendChild(line);

var linebreak = document.createElement("br");
createForm.appendChild(linebreak);

var nameLabel = document.createElement("label"); // Create Label for Name Field
nameLabel.innerHTML = "Your Name : "; // Set Field Labels
createForm.appendChild(nameLabel);

var inputElement = document.createElement("input"); // Create Input Field for Name
inputElement.setAttribute("type", "text");
inputElement.setAttribute("name", "dname");
createForm.appendChild(inputElement);

var linebreak = document.createElement("br");
createForm.appendChild(linebreak);

var emailLabel = document.createElement("label"); // Create Label for E-mail Field
emailLabel.innerHTML = "Your Email : ";
createForm.appendChild(emailLabel);

var emailElement = document.createElement("input"); // Create Input Field for E-mail
emailElement.setAttribute("type", "text");
emailElement.setAttribute("name", "email");
createForm.appendChild(emailElement);

var emailbreak = document.createElement("br");
createForm.appendChild(emailbreak);

var messageLabel = document.createElement("label"); // Append Textarea
messageLabel.innerHTML = "Your Message : ";
createForm.appendChild(messageLabel);

var textAreaElement = document.createElement("textarea");
textAreaElement.setAttribute("name", "dmessage");
createForm.appendChild(textAreaElement);

var messagebreak = document.createElement("br");
createForm.appendChild(messagebreak);

var submitElement = document.createElement("input"); // Append Submit Button
submitElement.setAttribute("type", "submit");
submitElement.setAttribute("name", "submit");
submitElement.setAttribute("value", "Submit");
createForm.appendChild(submitElement);