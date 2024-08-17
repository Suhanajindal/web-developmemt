// Get the login form element
const loginForm = document.getElementById('login-form');

// Get the error message element
const errorMessage = document.getElementById('error-message');

// Set up a dummy user database (in a real app, you would use a secure database)
const users = [
    { username: 'admin', password: 'password123' },
    { username: 'user', password: 'password456' }
];

// Function to handle the login form submission
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let isValid = false;

    // Check if the username and password match a user in the database
    users.forEach((user) => {
        if (user.username === username && user.password === password) {
            isValid = true;
        }
    });

    if (isValid) {
        // If the login is valid, redirect to a protected page
        window.location.href = 'protected.html';
    } else {
        // If the login is invalid, display an error message
        errorMessage.textContent = 'Invalid username or password';
    }
}

// Add an event listener to the login form
loginForm.addEventListener('submit', handleLogin);
