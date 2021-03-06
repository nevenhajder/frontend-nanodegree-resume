/*
These are HTML strings.
In resumeBuilder.js functions will replace "%data%" with meaningful information.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="role">%data%</span>';

var HTMLcontactGeneric = '<li>%contact%%data%</li>';
var HTMLmobile = '<li>mobile%data%</li>';
var HTMLemail = '<li><a href="mailto:%data%"><i class="fa fa-envelope-o fa-2x"></i></a></li>';
var HTMLtwitter = '<li><a href="%data%"><i class="fa fa-twitter fa-2x"></i></a></li>';
var HTMLgithub = '<li><a href="%data"><i class="fa fa-github fa-2x"></i></a></li>';
var HTMLskype = '<li><a href="skype:%data%?userinfo"><i class="fa fa-skype fa-2x"></i></a></li>';
var HTMLblog = '<li>blog%data%</li>';
var HTMLlocation = '<li></li>';

var HTMLbioPic = '<img class="img-thumbnail" src="%data%">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h2 class="skills--heading">Soft Skills</h2><ul class="skills--list"></ul>';
var HTMLskills = '<li class="skills--list-item">%data%</li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a><br>';
var HTMLworkDates = '<div class="dates">%data%</div>';
var HTMLworkLocation = '<div class="locations">%data%</div>';
var HTMLworkDescription = '<p class="entry--description">%data%</p>';

var HTMLprojectStart = '<div class="col-xs-12 col-sm-4 project-entry"></div>';
var HTMLprojectTitle = '<h4 class="project--title"><a href="#">%data%</a></h4>';
var HTMLprojectDates = '<div class="dates">%data%</div>';
var HTMLprojectDescription = '<p class="project--caption">%data%</p>';
var HTMLprojectImage = '<figure><a href="#"><img class="img-thumbnail" src="%data%"></a><br><figcaption><cite>Designed by Freepik</cite></figcaption></figure>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a><br>';
var HTMLschoolDates = '<div class="dates">%data%</div>';
var HTMLschoolLocation = '<div class="locations">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="dates">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var googleMap = '<div id="map"></div>';

/*
Generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/* initializeMap() is called when page is loaded. */
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array.
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array.
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });
    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    /* Open the infoWindow when the user clicks on the marker */
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);
