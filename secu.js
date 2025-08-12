const correctPassword = "10k2022@sis"; // Replace with your actual password

// Function to check the password and display content
function checkPasswordAndDisplayContent() {
    // Prompt the user for a password
    const enteredPassword = prompt("Enter password:");

    if (enteredPassword === correctPassword) {
        // Display the content since the password is correct
        const contentDiv = document.getElementById("content");
        contentDiv.classList.remove("hidden");
    } else {
        // If the password is incorrect, redirect back to the previous page
        alert("Wrong password. Redirecting back to the previous page.");
        window.history.back();
    }
}

// Attach the checkPasswordAndDisplayContent function to the window.onload event
window.onload = checkPasswordAndDisplayContent;
