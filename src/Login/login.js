//Login

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        alert("Form submitted successfully");
        // Redirect to chat.html after successful login
        window.location.href = '../Chat/chat.html'; // Redirect to the chat page
    }

    // Clear input fields after validation
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}