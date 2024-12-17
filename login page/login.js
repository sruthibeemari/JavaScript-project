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
 