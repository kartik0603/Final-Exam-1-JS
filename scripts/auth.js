document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;

    const user = { name, email, password, phone, city };
    
    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup successful! Please login.');
    window.location.href = 'login.html';
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert('Login successful!');
        window.location.href = 'home.html';
    } else {
        alert('Invalid email or password.');
    }
});
