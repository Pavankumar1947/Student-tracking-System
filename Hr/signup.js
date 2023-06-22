document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("HrUsername").value;
    var password = document.getElementById("HrPassword").value;
  
    if (localStorage.getItem(username)) {
      alert("Username already exists. Please choose a different username.");
      return;
    }
  
    localStorage.setItem(username, password);
  
    alert("Signup successful! You can now login.");
    document.getElementById("signup-form").reset();
    // window.location.href = 'Home.html';
    window.open("http://127.0.0.1:5501/Management/Home.html")
  });
  
  