document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // In a real application, you would send this data to a server for authentication
    // For this demo, we'll use localStorage to simulate user authentication
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Store the logged-in state
        localStorage.setItem('loggedIn', 'true');
        // Redirect to the home page
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
});

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('loggedIn') === 'true') {
        window.location.href = 'index.html';
    }
});