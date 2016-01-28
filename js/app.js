(function app() {

	/* Get Elements */
	var navToggle = document.getElementsByClassName('nav--toggle')[0];
	var navList = document.getElementsByClassName('nav--list')[0];

	/* If user clicks outside nav, close menu */
	document.addEventListener('click', function(event) {

		/* If it's not a nav child */
		if(!(event.target).closest('nav')) {

			if(navList.classList.contains('open')) {
				navList.classList.toggle('open');
				navToggle.classList.toggle('open');
			}
		}
	});

	/* Toggle menu on toggle button click */
	navToggle.addEventListener('click', function() {
		navList.classList.toggle('open');
		navToggle.classList.toggle('open');
	});

}());