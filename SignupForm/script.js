// script.js

function register() {
    var firstName = document.getElementById('First-name').value;
    var lastName = document.getElementById('Last-name').value;
    var fatherName = document.getElementById('Father-name').value;
    var phoneNo = document.getElementById('Phone-no').value;
    var country = document.getElementById('Country').value;
    var regEmail = document.getElementById('reg-email').value;
    var regPassword = document.getElementById('reg-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Perform basic client-side validation
    if (!firstName || !lastName || !fatherName || !phoneNo || !country || !regEmail || !regPassword || !confirmPassword) {
        showMessage('Please fill out all fields.', 'error', 'reg-message');
        return;
    }

    // Validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(regEmail)) {
        showMessage('Please enter a valid email address.', 'error', 'reg-message');
        return;
    }

    // Validate phone number format
    var phonePattern = /^\d{4}-\d{7}$/;
    if (!phonePattern.test(phoneNo)) {
        showMessage('Please enter a valid phone number (e.g., xxxx-xxxxxxx).', 'error', 'reg-message');
        return;
    }

    // Validate password match
    if (regPassword !== confirmPassword) {
        showMessage('Passwords do not match.', 'error', 'reg-message');
        return;
    }

    // All validation passed, show success message
    showMessage('Registration successful!', 'success', 'reg-message');

    // Reset form after successful registration (optional)
    document.getElementById('registrationForm').reset();
}

function showMessage(message, type, messageId) {
    var messageDiv = document.getElementById(messageId);
    messageDiv.textContent = message;
    messageDiv.className = type;
}
