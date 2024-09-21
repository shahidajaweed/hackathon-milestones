// Get references to the form and display area
var form = document.getElementById('resumeForm');
var resumeDisplayelement = document.getElementById('resume-display');
var shareableLinkContain = document.getElementById('Shareable-link-container');
var shareableLinkelement = document.getElementById('Shareable-link');
var downloadPdfbutton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input value 
    var Username = document.getElementById('Username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone number').value;
    var Linkedin = document.getElementById('LinkedIn ID').value;
    var Education = document.getElementById('education').value;
    var Experience = document.getElementById('Experience').value;
    var skills = document.getElementById('Skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        Linkedin: Linkedin,
        Education: Education,
        Experience: Experience,
        skills: skills
    };
    localStorage.setItem(Username, JSON.stringify(resumeData)); // Saving the data locally
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>personal Information</h3>\n    <p><b>name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    <p><b>Linkedin:</b><span contenteditable=\"true\">").concat(Linkedin, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(Education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(Experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display the generated resume
    resumeDisplayelement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(Username));
    // Display the shareable link
    shareableLinkContain.style.display = 'block';
    shareableLinkelement.href = shareableURL;
    shareableLinkelement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfbutton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
