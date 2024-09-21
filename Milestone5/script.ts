// Get references to the form and display area
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDisplayelement = document.getElementById('resume-display') as HTMLDivElement;

const shareableLinkContain = document.getElementById('Shareable-link-container') as HTMLDivElement;

const shareableLinkelement = document.getElementById('Shareable-link') as HTMLAnchorElement;

const downloadPdfbutton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();  // prevent page reload

    // collect input value 
    const Username = (document.getElementById('Username') as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone number') as HTMLInputElement).value
    const Linkedin  = (document.getElementById('LinkedIn ID') as HTMLInputElement).value
    const Education  = (document.getElementById('education') as HTMLTextAreaElement).value
    const Experience  = (document.getElementById('Experience') as HTMLTextAreaElement).value
    const skills = (document.getElementById('Skills') as HTMLTextAreaElement).value

    // Save form data in localStorage with the username as the key
const resumeData = {
    name,
    email,
    phone,
    Linkedin,
    Education,
    Experience,
    skills
    };
    localStorage.setItem(Username, JSON.stringify(resumeData)); // Saving the data locally

    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>personal Information</h3>
    <p><b>name:</b><span contenteditable="true">${name}</span></p>
    <p><b>email:</b><span contenteditable="true">${email}</span></p>
    <p><b>phone:</b><span contenteditable="true">${phone}</span></p>
    <p><b>Linkedin:</b><span contenteditable="true">${Linkedin}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${Education}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${Experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `;

    // Display the generated resume
        resumeDisplayelement.innerHTML = resumeHTML;

        // Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(Username)}`;

// Display the shareable link

shareableLinkContain.style.display = 'block';
shareableLinkelement.href = shareableURL;
shareableLinkelement.textContent = shareableURL;
});

// Handle PDF download

downloadPdfbutton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to save as PDF
});

// Prefill the form based on the username in the URL

window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

if (username) {

    // Autofill form if data is found in localStorage
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
    const resumeData = JSON.parse(savedResumeData);
    (document.getElementById('username') as HTMLInputElement).value =
    username;
    (document.getElementById('name') as HTMLInputElement).value =
    resumeData.name;
    (document.getElementById('email') as HTMLInputElement).value =
    resumeData.email;
    (document.getElementById('phone') as HTMLInputElement).value =
    resumeData.phone;
    (document.getElementById('education') as HTMLTextAreaElement).value =
    resumeData.education;
    (document.getElementById('experience') as HTMLTextAreaElement).value
    = resumeData.experience;
    (document.getElementById('skills') as HTMLTextAreaElement).value =
    resumeData.skills;
    }
    }
    });
