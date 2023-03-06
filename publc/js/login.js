async function signupFormHandler(e) {
    e.preventDefualt();

    const username = document.getElementById('username-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();

    if(username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username, 
                password
            }),
            headers: { 'Content-type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    };
};

async function loginFormHandler(e) {
    e.preventDefualt();

    const username = document.getElementById('username-login').value.trim();
    const password = document.getElementById('password-login').value.trim();

    if(username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username, 
                password
            }),
            headers: { 'Content-type': 'application/json' }
        });
        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    };
};

document
.querySelector(".login-form")
.addEventListener("submit", loginFormHandler);

document
.querySelector(".signup-form")
.addEventListener("submit", signupFormHandler);