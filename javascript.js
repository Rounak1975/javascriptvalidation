document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (validateEmail(email) && validatePassword(password)) {
        alert('Login successful!');
    } else {
        alert('Invalid login credentials');
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (validateEmail(email) && validatePassword(password) && password === confirmPassword) {
        alert('Registration successful!');
    } else {
        if (!validateEmail(email)) {
            alert('Invalid email format');
        }
        if (!validatePassword(password)) {
            alert('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character');
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match');
        }
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    // Password must be at least 8 characters long, contain at least one uppercase letter,
    // one lowercase letter, one digit, and one special character
    const re = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    return re.test(password);
}