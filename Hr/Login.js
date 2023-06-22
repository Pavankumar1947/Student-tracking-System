
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
  console.log(username,password);


console.log(arr);
    if (!localStorage.getItem(username)) {
      alert("User not found. Please sign up first.");
      return;
    }
  
   
    if (localStorage.getItem(username) !== password) {
      alert("Incorrect password. Please try again.");
      return;
    }
  
    alert("Login successful!");
    document.getElementById("login-form").reset();
    window.location.href = 'Home.html';
  });