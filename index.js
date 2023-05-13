var phoneNumber = document.getElementById("phone");
phoneNumber.style.display = "none";

var emailAddress = document.getElementById("email");


function toggleTextFields() {
  if (emailAddress.style.display === "none") {
    emailAddress.style.display = "block";
    phoneNumber.style.display = "none";
  } else {
    emailAddress.style.display = "none";
    phoneNumber.style.display = "block";
  }
}
