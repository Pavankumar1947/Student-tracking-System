window.onload = function() {
    
    var today = new Date().toISOString().split('T')[0];
    document.getElementById("scheduledDate").value = today;
  };

  document.getElementById("postRequirementsForm").onsubmit = function(event) {
    event.preventDefault(); 

   
    var companyCode = document.getElementById("companyCode").value;
    var companyFullName = document.getElementById("companyFullName").value;
    var scheduledDate = document.getElementById("scheduledDate").value;
    var skills = document.getElementById("skills").value;
    var positions = document.getElementById("positions").value;
    var qualification = document.getElementById("qualification").value;
    var driveLocation = document.getElementById("driveLocation").value;

    
    console.log("Company Code:", companyCode);
    console.log("Company Full Name:", companyFullName);
    console.log("Scheduled Date:", scheduledDate);
    console.log("Skills:", skills);
    console.log("Number of Positions:", positions);
    console.log("Qualification:", qualification);
    console.log("Drive Location:", driveLocation);

    
    document.getElementById("postRequirementsForm").reset();
  };