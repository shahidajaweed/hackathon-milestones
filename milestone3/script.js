// Get references to the form and display area
var form = document.getElementById('resumeForm');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input values
    var Firstname = document.getElementById('First name').value;
    var Lastname = document.getElementById('Last name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone number').value;
    var Linkedin = document.getElementById('LinkedIn ID').value;
    var Education = document.getElementById('education').value;
    var Experience = document.getElementById('Experience').value;
    var skills = document.getElementById('Skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>personal Information</h3>\n    <p><b>First name:</b>".concat(Firstname, "</p>\n    <p><b>Last name:</b>").concat(Lastname, "</p>\n    <p><b>email:</b>").concat(email, "</p>\n    <p><b>phone:</b>").concat(phone, "</p>\n    <p><b>Linkedin:</b>").concat(Linkedin, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(Education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(Experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
