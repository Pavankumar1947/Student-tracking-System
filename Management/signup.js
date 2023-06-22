document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("managementUsername").value;
    var password = document.getElementById("managementPassword").value;
  
   
    if (localStorage.getItem(username)) {
      alert("Username already exists. Please choose a different username.");
      return;
    }
  
    localStorage.setItem(username, password);
  
    alert("Signup successful! You can now login.");
    document.getElementById("signup-form").reset();
    window.location.href = 'Login.html';
  });
  
  