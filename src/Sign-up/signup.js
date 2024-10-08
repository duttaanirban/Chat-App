//sign-up

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get input values
        const fullName = form.querySelector('input[placeholder="Enter full name"]').value;
        const email = form.querySelector('input[placeholder="Enter email address"]').value;
        const phoneNumber = form.querySelector('input[placeholder="Enter phone number"]').value;
        const birthDate = form.querySelector('input[type="date"]').value;
        const password = form.querySelector('input[placeholder="Create a password"]').value;
        const confirmPassword = form.querySelector('input[placeholder="Confirm your password"]').value;
        const address = form.querySelector('input[placeholder="Enter street address"]').value;
        const city = form.querySelector('input[placeholder="Enter your city"]').value;

        // Basic validation
        if (!fullName || !email || !phoneNumber || !birthDate || !password || !confirmPassword || !address || !city) {
            alert('Please fill in all fields.');
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        // If all checks pass, show success message
        fetch('http://localhost:5000/register', {
            method: 'POST', // HTTP method
            headers: {
                'Content-Type': 'application/json', // Content type to specify JSON format
            },
            body: JSON.stringify({
                fullName: fullName,
                email: email,
                phoneNumber: phoneNumber,
                birthDate: birthDate,
                password: password,
                address: address,
                city: city
            }) // Convert your data to JSON string
        })
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            console.log('Success:', data); // Handle success
            alert('Account created successfully!');
            form.reset(); // Reset the form
        })
        .catch((error) => {
            console.error('Error:', error); // Handle error
        });
    });
});