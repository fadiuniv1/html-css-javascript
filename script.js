// --- FORM HANDLING SECTION ---

// --- DARK MODE SECTION ---
// Get the button by its ID
const toggleBtn = document.getElementById('darkToggle');

toggleBtn.addEventListener('click', function() {
    // Check if the current background is dark
    if (document.body.style.backgroundColor === 'rgb(30, 30, 30)') {
        // Change back to Light Mode colors
        document.body.style.backgroundColor = '#f4f4f4';
        document.body.style.color = '#000000';
        toggleBtn.textContent = "Switch to Dark Mode";
    } else {
        // Change to Dark Mode colors
        document.body.style.backgroundColor = '#1e1e1e';
        document.body.style.color = '#f1f1f1';
        toggleBtn.textContent = "Switch to Light Mode";
    }
});
// 1. Get references to the form and the display area
const myForm = document.getElementById('projectForm');
const displayArea = document.getElementById('formDataOutput');

// 2. Listen for the submit event
myForm.addEventListener('submit', function(event) {
    // Stop the page from refreshing 
    event.preventDefault();

    // 3. Collect the data from the 5 inputs
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const date = document.getElementById('userDate').value;
    const experience = document.getElementById('userExperience').value;
    const updates = document.getElementById('userUpdates').checked ? "Yes" : "No";

    // 4. Create the HTML string to show the data 
    const resultHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Birthday:</strong> ${date}</p>
        <p><strong>Experience:</strong> ${experience} years</p>
        <p><strong>Newsletter:</strong> ${updates}</p>
    `;

    // 5. Inject the data into the page dynamically 
    displayArea.innerHTML = resultHTML;
    
    // Optional: clear the form after submission
    myForm.reset();
});

