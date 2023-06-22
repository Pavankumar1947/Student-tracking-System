function handleFileInputChange(event) {
  const input = event.target;
  const label = input.nextElementSibling;
  const fileName = input.files[0].name;
  label.textContent = fileName;
}

function resetForm() {
  document.getElementById("studentForm").reset();
  const fileLabels = document.querySelectorAll('.file-input label');
  fileLabels.forEach(label => {
      label.textContent = 'Choose File';
  })
}
  
  