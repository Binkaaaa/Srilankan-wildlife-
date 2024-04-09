
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const linkCreateAccount = document.querySelector("#linkCreateAccount");
    const linkLogin = document.querySelector("#linkLogin");

    let registeredUsers = []; 

    // Function to toggle between login and create account forms
    function showLoginForm() {
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
        loginForm.reset(); 
    }

    function showCreateAccountForm() {
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
        createAccountForm.reset();
    }

    // Event listener for "Create an account" link
    linkCreateAccount.addEventListener("click", e => {
        e.preventDefault();
        showCreateAccountForm();
    });

    // Event listener for "Sign in" link in create account form
    linkLogin.addEventListener("click", e => {
        e.preventDefault();
        showLoginForm();
    });

    // Simulated admin credentials (replace with actual admin credentials)
    const adminUsername = "admin";
    const adminPassword = "admin123";

    // Event listener for login form submission
    loginForm.addEventListener("submit", e => {
        e.preventDefault(); 
        const usernameOrEmail = loginForm.querySelector('input[type="text"]').value.trim();
        const password = loginForm.querySelector('input[type="password"]').value.trim();

        if (!usernameOrEmail || !password) {
            alert("Please enter username/email and password."); 
            return; 
        }

        // Check if the entered credentials match admin credentials
        if (usernameOrEmail === adminUsername && password === adminPassword) {
            alert("Admin login successful!");
            window.location.href = "admin.html"; // Redirect to admin page
        } else {
            // Check if the entered credentials match a registered user
            const userExists = registeredUsers.some(user => user.username === usernameOrEmail);

            if (!userExists) {
                alert("This username/email is not registered."); 
            } else {
                const loggedIn = authenticateUser(usernameOrEmail, password);

                if (loggedIn) {
                    alert("Login successful!"); 
                    window.location.href = "index.html"; 
                } else {
                    alert("Invalid username or password.");
                }
            }
        }

        loginForm.reset(); 
    });

    // Simulated authentication function
    function authenticateUser(usernameOrEmail, password) {
        const user = registeredUsers.find(user => user.username === usernameOrEmail);
        return user && user.password === password;
    }

    // Event listener for create account form submission
    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();

        const username = createAccountForm.querySelector('#signupUsername').value.trim();
        const email = createAccountForm.querySelector('input[type="text"]').value.trim();
        const password = createAccountForm.querySelectorAll('input[type="password"]')[0].value.trim();
        const confirmPassword = createAccountForm.querySelectorAll('input[type="password"]')[1].value.trim();

        if (!username || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return; 
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again."); 
            return; 
        }
        registeredUsers.push({ username, email, password });
        alert("Account created successfully! You will be redirected to login."); 
        createAccountForm.reset();
        showLoginForm(); 
    });
});
