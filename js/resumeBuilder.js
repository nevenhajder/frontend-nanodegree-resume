
/* Objects holding information to be inserted into the HTML */

var bio = {
    "name": "Neven Hajder",
    "role": "(Aspiring) Web Developer",
    "contacts": {
        "email": "neven.hajder@gmail.com",
        "github": "https://github.com/nevenhajder",
        "skype": "neven.hajder",
        "twitter": "https://twitter.com/neven_hajder",
        "linkedin": "",
        "mobile": "555-5555",
        "location": "Kitchener, Ontario"
    },
    "biopic": "http://www.washingtoncitypaper.com/blogs/youngandhungry/files/2008/11/benjamin-franklin.jpg",
    "welcomeMessage": "Welcome to my humble website.",
    "skills": [
        "Excellent time management skills",
        "Great speaker, writer, and listener",
        "Poise under pressure",
        "Hawkish eye for details",
        "Tireless focus"
    ],
    /* Display all of the bio info */
    display: function() {
        var data = "%data%";
        /* Insert info into generic variables from helper.js */
        var formattedName = HTMLheaderName.replace(data, bio.name);
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
        var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
        var formattedSkype = HTMLskype.replace(data, bio.contacts.skype);
        var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);

        function formatSkills() {
            /* Get skills from the bio object */
            var skills = bio.skills;

            /* Check that there are skills */
            if (skills.length > 0) {
                var formattedSkills = [];
                var newSkill = '';

                /* Insert info into generic varibales from helper.js */
                skills.forEach(function(entry,index) {
                    newSkill = HTMLskills.replace('%data%', bio.skills[index]);
                    formattedSkills.push(newSkill);
                });

                return formattedSkills;
            }
        }

        /* Format and store the skills as HTML */
        var formattedSkills = formatSkills();

        /* Attach Bio info to the HTML (order of appending/prepending is important) */
        /* Header */
        $("#bioPic").append(formattedBioPic);

        /* If there is more than one skill then create variables and attach them to HTML */
        if (formattedSkills.length > 0) {
            $('#skills').append(HTMLskillsStart);

            formattedSkills.forEach(function(entry){
                $('.skills--list').append(entry);
            });
        }

        /* Attach contact info to footer */
        $('.footer-contacts').append(formattedEmail);
        $('.footer-contacts').append(formattedGithub);
        $('.footer-contacts').append(formattedSkype);
        $('.footer-contacts').append(formattedTwitter);
    }
};

var work = {
    "jobs": [{
            "title": "Unemployed",
            "employer": "Mom",
            "dates": "January 2016 - present",
            "location": "Kitchener",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor inventore reprehenderit ratione harum omnis id ut sunt laboriosam? Minima nostrum mollitia alias quo sed obcaecati pariatur, autem inventore quas! Nihil!"
        },
        {
            "title": "English Teacher",
            "employer": "Seosanyecheon Elementary School",
            "dates": "January 2014 - January 2016",
            "location": "Seosan, South Korea",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error voluptate iste quo quibusdam a ratione beatae doloremque earum temporibus, debitis perspiciatis quasi quod, dicta blanditiis facilis. Eius dolorem excepturi, sequi illo, eos impedit a magni, voluptate at non quibusdam aliquid."
        },
        {
            "title": "English Teacher",
            "employer": "ELA Language Academy",
            "dates": "October 2012 - October 2013",
            "location": "Daegu, South Korea",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quam, adipisci dolor earum minus! Quia, sed, eaque. Deserunt odit temporibus, qui, expedita delectus molestias quis."
        }],
    display: function() {
        var data = "%data%";
        /* Create and disply a new .work-entry for each job */
        work.jobs.forEach(function(entry,index) {
            /* Insert info into generic variables from helper.js */
            var employer = HTMLworkEmployer.replace(data, work.jobs[index].employer);
            var title = HTMLworkTitle.replace(data, work.jobs[index].title);
            var date = HTMLworkDates.replace(data, work.jobs[index].dates);
            var location = HTMLworkLocation.replace(data, work.jobs[index].location);
            var description = HTMLworkDescription.replace(data, work.jobs[index].description);

            /* Create new .work-entry */
            $('#workExperience').append(HTMLworkStart);
            /* Append elements to the new .work-entry */
            $('.work-entry:last').append(employer + title);
            $('.work-entry:last').append(date);
            $('.work-entry:last').append(location);
            $(".work-entry:last").append(description);

        });
    }
};

var projects = {
    "projects": [{
        "title": "Abacus",
        "description": "Exactly what it says: an abacus, which I made as a way to practise CSS and JavaScript. Admitedly, it's fairly simple, but a fun, little project nonetheless.",
        "images": ["images/abacus.jpg"],
        "dates": "January, 2015",
        "tags": ["HTML", "CSS", "JavaScript"]
    },
    {
        "title": "Library",
        "description": "Here you'll find a collection of books I consider important to me for various reasons. I also wrote a summary covering the most interesting ideas so that I could reflect on them later, and to give others a chance to learn a little more about me.",
        "images": ["images/bookshelf.jpg"],
        "dates": "June, 2015",
        "tags": ["HTML", "CSS", "JavaScript"]
    },
    {
        "title": "Heroes",
        "description": "These are some of the people that are my role models. But calling them heroes is more fitting because it captures more of their grandeur. Everyone will easily recognize them and what they stand for, but I've written a blurb specificaly about why <em>I</em> admire them.",
        "images": ["images/hero.jpg"],
        "dates": "December, 2014",
        "tags": ["HTML", "CSS", "JavaScript"]
    }
    // {
    //     "title": "Game",
    //     "description": "Still to come.",
    //     "images": [""],
    //     "tags": ["HTML", "CSS", "jQuery"]
    // }
    ],
    display: function() {
        var data = "%data%";

        /* Fix for function invocation context problems with "this" */
        var me = this;

        me.projects.forEach(function(entry,index) {
            /* Create variables with HTML templates */
            var title = HTMLprojectTitle.replace(data, me.projects[index].title);
            var description = HTMLprojectDescription.replace(data, me.projects[index].description);
            var img = HTMLprojectImage.replace(data, me.projects[index].images[0]);
            /* Create a new .project-entry */
            $("#projects").append(HTMLprojectStart);
            /* Append project information to .project-entry */
            $(".project-entry:last").append(title);
            $(".project-entry:last").append(img);
            $("figcaption:last").append(description);
        });
    }
};

var education = {
    "schools": [{
            "name": "The World Wide Web",
            "location": "San Francisco",
            "degree": "Front End Web Developer",
            "majors": [""],
            "dates": "January 2014 - present",
            "url": "https://en.wikipedia.org/wiki/World_Wide_Web"
        },
        {
            "name": "University of Waterloo",
            "location": "Waterloo, Ontario, Canada",
            "degree": "BSc. - Kinesiology",
            "majors": ["BSc."],
            "dates": "January 2008 - May 2012",
            "url": "https://uwaterloo.ca/"
        }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "November 2015 - now",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
        "title": "JavaScript: Understanding the Weird Parts",
        "school": "Udemy",
        "date": "June, 2015",
        "url": "https://www.udemy.com/understand-javascript/#/"
    },
    {
        "title": "Learn and Understand Angular",
        "school": "Udemy",
        "date": "July, 2015",
        "url": "https://www.udemy.com/learn-angularjs/learn/#/"
    }],
    display: function() {
        var data = "%data%";
        var me = this;

        me.schools.forEach(function(entry,index) {
            /* Insert info into generic variables from helper.js */
            var name = HTMLschoolName.replace(data, me.schools[index].name);
            var degree = HTMLschoolDegree.replace(data, me.schools[index].degree);
            var date = HTMLschoolDates.replace(data, me.schools[index].dates);
            var location = HTMLschoolLocation.replace(data, me.schools[index].location);

            /* Create new .education-entry */
            $('#education').append(HTMLschoolStart);
            /* Append elements to the new .education-entry */
            $('.education-entry:last').append(name + degree);
            $('.education-entry:last').append(date);
            $('.education-entry:last').append(location);
        });
    }
};


/* Insert information into the HTML */

/* Bio */
bio.display();

/* Work */
work.display();

/* Projects */
projects.display();

/* Education */
education.display();


/* Google Map */
/* Append googleMap to the #mapDiv in the HTML */
$("#mapDiv").append(googleMap);

/* TODO:
    Incorporate a JavaScript library, like D3, to graph or chart your skills
*/




