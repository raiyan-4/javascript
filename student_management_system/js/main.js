document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------
    // 1. LOGIN LOGIC (Simulated Authentication)
    // ------------------------------------------
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    function handleLogin(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;
        const messageElement = document.getElementById('login-message');
        
        // Simple Mock Authentication
        if (username === 'test' && password === '123') {
            // Redirect based on selected role
            if (role === 'student') {
                window.location.href = 'portals/student.html';
            } else if (role === 'teacher') {
                window.location.href = 'portals/teacher.html';
            } else if (role === 'admin') {
                window.location.href = 'portals/admin.html';
            }
        } else {
            messageElement.textContent = 'Invalid credentials. Try username: test, password: 123';
        }
    }
    
    // ------------------------------------------
    // 2. GENERAL UI LOGIC (Can add more here)
    // ------------------------------------------
    // Example: Toggle mobile navigation menu (if implemented in CSS)
});