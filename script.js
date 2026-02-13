/* --- dark mode toggle (now using class only) --- */
const toggleBtn = document.getElementById('darkToggle');

toggleBtn.addEventListener('click', () => {
    // just flip the class on body
    document.body.classList.toggle('dark-mode');

    // update button text
    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'Light Mode';
    } else {
        toggleBtn.textContent = 'Dark Mode';
    }
});


/* --- form handling (same logic, just cleaned notes) --- */

// get form + output area
const myForm = document.getElementById('projectForm');
const displayArea = document.getElementById('formDataOutput');

// only run form logic if the form exists (so index/gallery don't error)
if (myForm) {

    myForm.addEventListener('submit', function (event) {
        event.preventDefault(); // stop refresh

        // collect inputs
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const date = document.getElementById('userDate').value;
        const experience = document.getElementById('userExperience').value;
        const updates = document.getElementById('userUpdates').checked ? "Yes" : "No";

        // clear old output
        displayArea.innerHTML = "";

        // create new elements
        const pName = document.createElement("p");
        pName.innerHTML = `<strong>Name:</strong> ${name}`;

        const pEmail = document.createElement("p");
        pEmail.innerHTML = `<strong>Email:</strong> ${email}`;

        const pDate = document.createElement("p");
        pDate.innerHTML = `<strong>Birthday:</strong> ${date}`;

        const pExperience = document.createElement("p");
        pExperience.innerHTML = `<strong>Experience:</strong> ${experience} years`;

        const pUpdates = document.createElement("p");
        pUpdates.innerHTML = `<strong>Newsletter:</strong> ${updates}`;

        // add them to the page
        displayArea.appendChild(pName);
        displayArea.appendChild(pEmail);
        displayArea.appendChild(pDate);
        displayArea.appendChild(pExperience);
        displayArea.appendChild(pUpdates);

        // reset form
        myForm.reset();
    });
}