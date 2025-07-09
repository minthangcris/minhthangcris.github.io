// This file contains JavaScript code for client-side functionality, including form validation and interactive features.

document.addEventListener("DOMContentLoaded", function() {
    // Form validation for the registration page
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            const username = document.getElementById("register-username").value;
            const password = document.getElementById("register-password").value;
            const confirmPassword = document.getElementById("register-confirm-password").value;

            if (username === "" || password === "" || confirmPassword === "") {
                alert("All fields are required.");
                event.preventDefault();
            } else if (password !== confirmPassword) {
                alert("Passwords do not match.");
                event.preventDefault();
            }
        });
    }

    // Form validation for the login page
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            const username = document.getElementById("login-username").value;
            const password = document.getElementById("login-password").value;

            if (username === "" || password === "") {
                alert("Both fields are required.");
                event.preventDefault();
            }
        });
    }

    // Additional interactive features can be added here
});