function validate() {
	var check = true;
	var first_name = document.myForm.first_name.value;
	var last_name = document.myForm.last_name.value;
	var email = document.myForm.email.value;
	var mobile = document.myForm.mobile.value;
	var pass = document.myForm.pass.value;
	var gender = document.myForm.gender.value;
	var education = document.myForm.education.value;

	var name_format = /^[a-zA-Z\s]+$/;
	var email_format = /^\S+@\S+\.\S+$/;
	var mobile_format = /^[1-9]\d{9}$/;

	if (name_format.test(first_name) === false || name_format.test(last_name) === false) {
		document.getElementById("nameErr").innerHTML = "Please enter a valid name";
		document.myForm.first_name.focus();
		check = false;
	} else {
		document.getElementById("nameErr").innerHTML = "";
	}

	if (email_format.test(email) === false) {
		document.getElementById("emailErr").innerHTML = "Please enter a valid email";
		document.myForm.email.focus();
		check = false;
	} else {
		document.getElementById("emailErr").innerHTML = "";
	}

	if (mobile_format.test(mobile) === false) {
		document.getElementById("mobileErr").innerHTML =
			"Please enter a valid 10 digit mobile number";
		check = false;
	} else {
		document.getElementById("mobileErr").innerHTML = "";
	}

	if (pass.length < 6) {
		document.getElementById("passErr").innerHTML = "Password is too short";
		check = false;
	} else if (pass.length > 24) {
		document.getElementById("passErr").innerHTML = "Password is too long";
		check = false;
	} else {
		document.getElementById("passErr").innerHTML = "";
	}

	if (gender == "") {
		document.getElementById("genderErr").innerHTML = "Please select your gender";
		check = false;
	} else {
		document.getElementById("genderErr").innerHTML = "";
	}

	if (education == "") {
		document.getElementById("educationErr").innerHTML = "Please select your education";
		check = false;
	} else {
		document.getElementById("educationErr").innerHTML = "";
	}

	if (check) {
		confirm("Do you want to submit details");
		return true;
	} else return false;
}
