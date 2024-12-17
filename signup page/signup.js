// document.getElementById("signupForm").addEventListener("submit", function(event) {
//     event.preventDefault(); 
  
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
    
//     const confirmPassword = document.getElementById("confirmPassword").value;

    
    
//     // password requirements
//     const passwordVal = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     const passwordError = document.getElementById('password-error');
//     const passwordMismatchError = document.getElementById("errorMessage");
//     const usernameError = document.getElementById("usernameError");
  
    
//     passwordError.style.display = "none";
//     passwordMismatchError.style.display = "none";
//     if (usernameError) {
//       usernameError.textContent = ""; 
//     }
  
//     let isValid = true;  
  
//     // Password validation
//     if (!passwordVal.test(password)) {
//       passwordError.textContent = "Password must be at least 8 characters long and include at least one letter and one number.";
//       passwordError.style.display = "block"; 
//       isValid = false;  
//     }
  
//     // Passwords match validation
//     if (password !== confirmPassword) {
//       passwordMismatchError.style.display = "block";
//       isValid = false; 
//     }
  
//     // user already exists
//     const storedUsername = localStorage.getItem("name");
//     const storedEmail = localStorage.getItem("email");
  
//     if (storedUsername === name && storedEmail === email) {
//       if (usernameError) {
//         usernameError.textContent = "User already exists. Please login.";
//         usernameError.style.color="red"
//       }
//       isValid = false; 
//     }
  
//     if (isValid) {
//       // Save user data to localStorage
//       localStorage.setItem("name", name);
//       localStorage.setItem("password", password);
//       localStorage.setItem("email", email);
  
//       alert("Signup successful!");
  
  
//       window.location.href = "../welcome page/welcome.html";
//     }
//   });


document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // password requirements
  const passwordVal = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const passwordError = document.getElementById('password-error');
  const passwordMismatchError = document.getElementById("errorMessage");
  const usernameError = document.getElementById("usernameError");

  passwordError.style.display = "none";
  passwordMismatchError.style.display = "none";
  if (usernameError) {
    usernameError.textContent = ""; 
  }

  let isValid = true;  

  // Password validation
  if (!passwordVal.test(password)) {
    passwordError.textContent = "Password must be at least 8 characters long and include at least one letter and one number.";
    passwordError.style.display = "block"; 
    isValid = false;  
  }

  // Passwords match validation
  if (password !== confirmPassword) {
    passwordMismatchError.style.display = "block";
    isValid = false; 
  }

  // user already exists
  const storedUsername = localStorage.getItem("name");
  const storedEmail = localStorage.getItem("email");

  if (storedUsername === name && storedEmail === email) {
    if (usernameError) {
      usernameError.textContent = "User already exists. Please login.";
      usernameError.style.color="red"
    }
    isValid = false; 
  }

  if (isValid) {
    // Save user data to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);

    alert("Signup successful!");

    window.location.href = "../welcome page/welcome.html";
  }
});


// Eye toggle function
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function() {
  // Toggle password visibility
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;

  // Change the eye icon
  if (passwordInput.type === "password") {
    // If password is hidden, show eye
    this.classList.remove("fa-eye");
    this.classList.add("fa-eye-slash");
  } else {
    // If password is visible, show eye-slash
    this.classList.remove("fa-eye-slash");
    this.classList.add("fa-eye");
  }
});


  