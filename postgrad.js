const matric = document.getElementById("matricnum");
const full_name = document.getElementById("full-name");
const dob = document.getElementById("dob");
const department = document.getElementById("department");
const hostel = document.getElementById("hostel");
const postgraduateform = document.getElementById("postgraduateform");
const details_con = document.getElementById("details-con");

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

  var selectedDate = new Date(dob.value);
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

if (postgraduateform) {
  postgraduateform.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents the form from submitting
    if (!validateForm()) {
      const formData = {
        matric: matric.value,
        full_name: full_name.value,
        dob: dob.value,
        department: department.value,
        hostel: hostel.value,
      };
      localStorage.setItem("formData", JSON.stringify(formData));
      window.location.href = "nextpage.html";
    }
  });
}

if (details_con) {
  const formData = JSON.parse(localStorage.getItem("formData"));
//   const name = document.getElementById("name");
//   name.textContent = formData.full_name;

  console.log(formData);
  details_con.innerHTML = `<h1 id="name">${formData.full_name}</h1>
  <h1 id="name">${formData.matric}</h1>
  <h1 id="name">${formData.department}</h1>
  <h1 id="name">${formData.hostel}</h1>
  <h1 id="name">${formData.dob}</h1>`;
}
