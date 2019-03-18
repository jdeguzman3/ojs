/* Vars for form, and the 2 inputs */
var form = document.querySelector('form');
var jobtype = document.getElementById('jobtype');
var joblocation = document.getElementById('joblocation');

/* Validation check for both inputs */
function validate(evt){
	var typevalue = jobtype.value.trim();
	var locationvalue = joblocation.value.trim();

	/* If type or location is empty after trim, don't show success message */
	if(!typevalue || !locationvalue){
		/*alert("Missing required information.");*/
	}
	else{
		alert("Form submitted.");
	}
	evt.preventDefault();
}

/* Event listener for when the form is submitted */
form.addEventListener('submit', validate);

/* Responsive menu on small screens */
var topNav = document.getElementById('topNav');

/* add the 'responsive' class to toggle menu */
function toggleMenu(){
	if(topNav.className === "top-nav"){
		topNav.className += " responsive";
	} else {
		topNav.className = "top-nav";
	}
}

topNav.addEventListener('click', toggleMenu);

