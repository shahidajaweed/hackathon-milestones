// Get references to the form and display area
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();  // prevent page reload

    // collect input values
    const Firstname = (document.getElementById('First name') as HTMLInputElement).value
    const Lastname = (document.getElementById('Last name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone number') as HTMLInputElement).value
    const Linkedin  = (document.getElementById('LinkedIn ID') as HTMLInputElement).value
    const Education  = (document.getElementById('education') as HTMLInputElement).value
    const Experience  = (document.getElementById('Experience') as HTMLInputElement).value
    const skills = (document.getElementById('Skills') as HTMLInputElement).value

    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>personal Information</h3>
    <p><b>First name:</b><span contenteditable="true">${Firstname}</span></p>
    <p><b>Last name:</b><span contenteditable="true">${Lastname}</span></p>
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
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else {
        console.error('The resume display element is missing.');
    }
});
