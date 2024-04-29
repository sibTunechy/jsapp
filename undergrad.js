const matric = document.getElementById("matricnum");
const full_name = document.getElementById("full-name");
const programmetype = document.getElementById("programmetype");
const department = document.getElementById("department");
const institution = document.getElementById("institution");
const undergraduateform = document.getElementById("undergraduateform");
const details_container = document.getElementById("details-container");

const validateForm = () => {
  let error = false;
  var matricNumber = matric.value;
  var regex = /^[A-Z]{3}-[0-9]{3}-[0-9]{3}$/;

  if (regex.test(matricNumber)) {
    document.getElementById("message").textContent =
      "Matriculation number is valid.";
  } else {
    document.getElementById("message").textContent =
      "Invalid matriculation number format. Please use the format ABC-567-890.";
    error = true;
    return error;
  }

  var selectedDate = new Date(programmetype.value);
  var ageDifMs = Date.now() - selectedDate.getTime();
  var ageDate = new Date(ageDifMs); 
  var age = Math.abs(ageDate.getUTCFullYear() - 1970);

  if (age < 18) {
    alert("You must be at least 18 years old.");
    this.value = ""; // reset the value
    error = true;
    return error;
  }
  return error;
  //   };
};

if (undergraduateform) {
    undergraduateform.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents the form from submitting
    if (!validateForm()) {
      const formData = {
        matric: matric.value,
        full_name: full_name.value,
        programmetype: programmetype.value,
        department: department.value,
        institution: institution.value,
      };
      localStorage.setItem("formData", JSON.stringify(formData));
      window.location.href = "currentpage.html";
    }
  });
}

if (details_container) {
  const formData = JSON.parse(localStorage.getItem("formData"));
//   const name = document.getElementById("name");
//   name.textContent = formData.full_name;

  console.log(formData);
  details_container.innerHTML = `<h1 id="name">${formData.full_name}</h1>
  <h1 id="name">${formData.matric}</h1>
  <h1 id="name">${formData.department}</h1>
  <h1 id="name">${formData.institution}</h1>
  <h1 id="name">${formData.programmetype}</h1>`;
}
