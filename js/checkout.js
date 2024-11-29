
// Exercise 6
function validate(event) {
	event.preventDefault(); // Evitar la recarga del formulario

	let error = false;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastName = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements --------------------------------------------> Si se usa el is-invalid de bootstrap no es necesario
	// var errorName = document.getElementById("errorName");
	// var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value.length < 3 || fName.value.match(/[0-9]/)){
		fName.classList.add('is-invalid');
		error = true;
	} else {
		fName.classList.remove('is-invalid');
		fName.classList.add('is-valid');
	}

	if(fEmail.value.length < 3 || !fEmail.value.includes("@")){
		error = true;
		fEmail.classList.add('is-invalid');
	} else {
		fEmail.classList.remove('is-invalid');
		fEmail.classList.add('is-valid');
	}

	if(fAddress.value.length < 3){
		fAddress.classList.add('is-invalid');
		error = true;
	} else {
		fAddress.classList.remove('is-invalid');
		fAddress.classList.add('is-valid');
	}

	if(fLastName.value.length < 3 || fLastName.value.match(/[0-9]/)){
		fLastName.classList.add('is-invalid');
		error = true;
	} else {
		fLastName.classList.remove('is-invalid');
		fLastName.classList.add('is-valid');
	}

	if(fPassword.value.length < 4 || fPassword.value.length > 8 || !fPassword.value.match(/[a-zA-Z]/) || !fPassword.value.match(/[0-9]/)){
		fPassword.classList.add('is-invalid');
		error = true;
	} else {
		fPassword.classList.remove('is-invalid');
		fPassword.classList.add('is-valid');
	}

	if(fPhone.value.length != 9 || fPhone.value.match(/[a-zA-Z]/)){
		fPhone.classList.add('is-invalid');
		error = true;
	} else {
		fPhone.classList.remove('is-invalid');
		fPhone.classList.add('is-valid');
	}
	 
	if(error === false){
		alert("Save OK");
	}

}
