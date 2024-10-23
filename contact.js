
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can implement sending the form data to your server or an API
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Clear the form after submission
    document.getElementById('contact-form').reset();
    alert('Thank you for contacting us! We will get back to you shortly.');
});
