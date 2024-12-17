document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
  
    const storedUsername = localStorage.getItem("name");
    const storedPassword = localStorage.getItem("password");
  
    // Check if the entered username and password match the saved credentials
    if (username === storedUsername && password === storedPassword) {
     
      document.getElementById("errorMessage").style.display = "none";
  
     
      alert("Login successful!");
      window.location.href = "../welcome page/welcome.html"; // Redirect to watches page
    } else {
      // Show error message if login fails
      document.getElementById("errorMessage").style.display = "block";
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

  
  