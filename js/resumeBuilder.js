
/* Objects holding information to be inserted into the HTML */

var bio = {
    "name": "Neven Hajder",
    "role": "(Aspiring) Web Developer",
    "contacts": {
        "email": "neven.hajder@gmail.com",
        "githubURL": "https://github.com/nevenhajder",
        "location": "Kitchener, Ontario"
    },
    "bioPicURL": "http://www.washingtoncitypaper.com/blogs/youngandhungry/files/2008/11/benjamin-franklin.jpg",
    "welcomeMessage": "Welcome to my humble website.",
    "skills": [
        "Skill1",
        "Skill2",
        "Skill3",
        "Skill4",
        "Skill5"
    ],
    /* Display all of the bio info */
    display: function() {
        /* Insert info into generic variables from helper.js */
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPicURL);
        var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.githubURL);
        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

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
        $('#header').append(formattedBioPic);
        $('#header').append(formattedWelcome);

        /* If there is more than one skill then create variables and attach them to HTML */
        if (formattedSkills.length > 0) {
            $('#header').append(HTMLskillsStart);

            formattedSkills.forEach(function(entry){
                $('#skills').append(entry);
            });
        }

        $('#header').prepend(formattedName);
        $('#name').append(formattedRole);

        /* Contact */
        $('#footerContacts').append(formattedEmail);
        $('#footerContacts').append(formattedGithub);
        $('#footerContacts').append(formattedLocation);
    }
};

var work = {
    "jobs": [
        {
            "title": "Unemployed",
            "employer": "Mom",
            "dates": "January 2016 - present",
            "location": "Kitchener",
            "description": ""
        },
        {
            "title": "English Teacher",
            "employer": "Seosanyecheon Elementary School",
            "dates": "January 2014 - January 2016",
            "location": "Seosan, South Korea",
            "description": ""
        },
        {
            "title": "English Teacher",
            "employer": "ELA Language Academy",
            "dates": "October 2012 - October 2013",
            "location": "Daegu",
            "description": ""
        }
    ],
    display: function() {
        /* Create and disply a new .work-entry for each job */
        work.jobs.forEach(function(entry,index) {
            /* Insert info into generic variables from helper.js */
            var employer = HTMLworkEmployer.replace('%data%', work.jobs[index].employer);
            var title = HTMLworkTitle.replace('%data%', work.jobs[index].title);
            var date = HTMLworkDates.replace('%data%', work.jobs[index].dates);
            var location = HTMLworkLocation.replace('%data%', work.jobs[index].location);

            /* Create new .work-entry */
            $('#workExperience').append(HTMLworkStart);
            /* Append elements to the new .work-entry */
            $('.work-entry:last').append(employer + title);
            $('.work-entry:last').append(date);
            $('.work-entry:last').append(location);
        });
    }
};

var projects = {
    "projects": [
    {
        "title": "Abacus",
        "description": "",
        "img": "",
        "tags": ["HTML", "CSS", "JavaScript"]
    },
    {
        "title": "Library",
        "description": "",
        "img": "",
        "tags": ["HTML", "CSS", "JavaScript"]
    },
    {
        "title": "Game",
        "description": "",
        "img": "",
        "tags": ["HTML", "CSS", "jQuery"]
    }
    ],
    display: function() {
        /* Fix for function invocation context problems with "this" */
        var me = this;

        me.projects.forEach(function(entry,index) {
            /* Create variables with HTML templates */
            var title = HTMLprojectTitle.replace("%data%", me.projects[index].title);
            var description = HTMLprojectDescription.replace("%data%", me.projects[index].description);
            var img = HTMLprojectImage.replace("%data%", me.projects[index].img);
            /* Create a new .project-entry */
            $("#projects").append(HTMLprojectStart);
            /* Append project information to .project-entry */
            $(".project-entry:last").append(title);
            $(".project-entry:last").append(description);
            $(".project-entry:last").append(img);
        });
    }
};

var education = {
    "schools": [
        {
            "schoolName": "The World Wide Web",
            "degree": "Front End Web Developer",
            "dates": "January 2014 - present",
            "location": "San Francisco"
        },
        {
            "schoolName": "University of Waterloo",
            "degree": "BSc. - Kinesiology",
            "dates": "January 2008 - May 2012",
            "location": "Waterloo, Ontario, Canada"
        }
    ],
    display: function() {
        var me = this;

        me.schools.forEach(function(entry,index) {
            /* Insert info into generic variables from helper.js */
            var name = HTMLschoolName.replace('%data%', me.schools[index].schoolName);
            var degree = HTMLschoolDegree.replace('%data%', me.schools[index].degree);
            var date = HTMLschoolDates.replace('%data%', me.schools[index].dates);
            var location = HTMLschoolLocation.replace('%data%', me.schools[index].location);

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




