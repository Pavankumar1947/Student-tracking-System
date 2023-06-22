// function fetchStudentDetails() {
//     const studentId = document.getElementById('studentId').value;
//     const studentDetails = getStudentDetails(studentId);
//     const studentDetailsContainer = document.getElementById('studentDetails');

//     if (studentDetails) {
//         const html = `
//             <p><strong>Name:</strong> ${studentDetails.name}</p>
//             <p><strong>Phone:</strong> ${studentDetails.phone}</p>
//             <p><strong>Email:</strong> ${studentDetails.email}</p>
//             <p><strong>Year of Passout:</strong> ${studentDetails.yearOfPassout}</p>
//             <p><strong>Highest Qualification:</strong> ${studentDetails.highestQualification}</p>
//             <p><strong>Address:</strong> ${studentDetails.address}</p>
//         `;
//         studentDetailsContainer.innerHTML = html;
//     } else {
//         studentDetailsContainer.innerHTML = "<p>No student found with the provided ID.</p>";
//     }

//     return false; // Prevent form submission
// }