document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the form data to a server
    // For this example, we'll just log the data and show an alert
    console.log('Contact form submission:', { name, email, message });
    alert('Thank you for your message. This is a demo, so no message was actually sent.');
});