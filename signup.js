document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Here you can implement sending the form data to your server or an API
    console.log(`Username: ${username}, Email: ${email}`);

    // Clear the form after submission
    document.getElementById('signup-form').reset();
    alert('Registration successful! You can now log in.');
});
