function clearErrors()
{
    errors = document.getElementsByClassName("formError");
    for (let item of errors)
    {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
  document.getElementById(id).innerHTML = error;
}

function validateForm() {
  var returnvar = true;
  clearErrors();

  // first name
  var fname = document.getElementById("fName").value;
  if (fname.length < 3) {
    seterror("error-fname", "*first name length too short!");
    returnvar = false;
  }

  //   last name
  var lname = document.getElementById("lName").value;
  if (lname.length < 3) {
    seterror("error-lname", "*last name length too short!");
    returnvar = false;
  }

  // phone number
  var phone = document.getElementById("phone").value;
  if (phone.length != 10) {
    seterror("error-phone", "*phone number should be 10 digits!");
    returnvar = false;
  }

  // email
  var email = document.getElementById("email").value;
  if (email.length > 30) {
    seterror("error-email", "*email too long!");
    returnvar = false;
  }

  if (email.includes("@") != true) {
    seterror("error-email", "*please provide correct email!");
    returnvar = false;
  }

  // address
  var address = document.getElementById("address").value;
  if (address.length < 5) {
    seterror("error-address", "*address length too short!");
    returnvar = false;
  }

  // country
  var country = document.getElementById("country").value;
  if (country == "") {
    seterror("error-country", "*please select country!");
    returnvar = false;
  }

  // state
  var state = document.getElementById("state").value;
  if (state == "") {
    seterror("error-state", "*please select state!");
    returnvar = false;
  }

  var zip = document.getElementById("zip").value;
  if (zip.length != 6)
  {
    seterror("error-zip", "*zip should be 6 digits long!");
    returnvar = false;
  }

   // degree
   var degree = document.getElementById("degree").value;
   if (degree == "") {
     seterror("error-degree", "*please select degree!");
     returnvar = false;
   }

    // state
  var course = document.getElementById("course").value;
  if (course == "") {
    seterror("error-course", "*please select course!");
    returnvar = false;
  }

  // checkbox
  var checkbox = document.getElementById("checkbox");
  if (checkbox.checked == false)
  {
    alert("Please agree to the check box for further communication");
    returnvar = false;
  }
  return returnvar;
}

function submitfun() {
  if (validateForm() == true) {
    var fname = document.getElementById("fName").value;
    var lname = document.getElementById("lName").value;
    alert("Submited for " + fname + " " + lname);
  }
}
