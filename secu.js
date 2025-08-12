const correctPassword = "10k2022@sis"; // Replace with your actual password

function checkPasswordAndDisplayContent() {
    // Check if the password was already entered before
    if (localStorage.getItem("passwordEntered") === "true") {
        showContent();
        return;
    }

    // Prompt for password
    const enteredPassword = prompt("Enter password:");

    if (enteredPassword === correctPassword) {
        localStorage.setItem("passwordEntered", "true");
        showContent();
    } else {
        alert("Wrong password. Redirecting back to the previous page.");
        window.history.back();
    }
}

function showContent() {
    const contentDiv = document.getElementById("content");
    contentDiv.classList.remove("hidden");
}

// Run the check on page load
window.onload = checkPasswordAndDisplayContent;