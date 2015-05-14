var bio = 
{
    "name"              : "Kelly J Norton",
    "role"              : "Software Engineer",
    "welcomeMessage"    : "A message of welcome: Welcome, I say",
    "skills"            : ["C programming", "Software Engineering", "Linux", "Satellite Communication", "Telecommunications", "Furious Rock Band Drumming", "Smart Ass"],
    "biopic"            : "images/biopic.png",
    "contacts" : 
    {
        "mobile"    : "571-314-0571",
        "email"     : "kellynorton@gmail.com",
        "github"    : "kajota",
        "twitter"   : "kajota",
        "location"  : "Roswell, Ga"
    },
    "display"       : function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedWelcomeMsg);
        $("#header").append(formattedbioPic);
        
        if(bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for(var i=0;i<bio.skills.length;i++)
            {
                $("#header").append(HTMLskills.replace("%data%",bio.skills[i]));
            }
        }

        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    }
};

var work = 
{
    "jobs"  :   
    [
        {
            "employer"      : "US Army",
            "title"         : "Satellite Controller",
            "location"      : "Ft Detrick, MD",
            "dates"         : "1992-1995",
            "description"   : "Satellite payload control. Satellite earth station repair"
        },
        {
            "employer"      : "American Mobile Satellite",
            "title"         : "Lead RF Technician",
            "location"      : "Reston, Va",
            "dates"         : "1995-2000",
            "description"   : "Satellite earth station repair"
        },
        {
            "employer"      : "Skjei Telecom",
            "title"         : "Staff Engineer",
            "location"      : "Falls Church, Va",
            "dates"         : "2000-2004",
            "description"   : "Programming, Satellite link budgets, Random RF & Satellite engineering"
        },
        {
            "employer"      : "Stellar Satellite Communications",
            "title"         : "Software Engineer",
            "location"      : "Dulles, Va",
            "dates"         : "2004-2011",
            "description"   : "Embedded software design for Orbcomm satellite modems"
        },
        {
            "employer"      : "Strata Worldwide",
            "title"         : "Senior Software Engineer",
            "location"      : "Sandy Springs, Ga",
            "dates"         : "2011-2015",
            "description"   : "Embedded software design for mining/oil and gas safety equipment"
        }
    ],
    "display" : function() {
        for (var i=0; i<work.jobs.length; ++i)
        {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDesc);
        }
    }
};

var projects =
{
    "projects" : 
    [
        {
            "title"         : "Underground Atmospheric Monitoring",
            "dates"         : "2013-2015",
            "description"   : "Hardware and software used to monitor gases in underground mines",
            "images"        : ["images/mine.png"]
        },
        {
            "title"         : "Walmart Trailer Tracking",
            "dates"         : "2005-2007",
            "description"   : "Hardware and software used to track Walmart trailer via GPS and Orbcomm Satellites",
            "images"        : ["images/orbcomm.png","images/trailer.png"]
        }
    ],
    "display" : function() {

        for (var proj=0; proj<projects.projects.length; ++proj) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle          = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
            var formattedDates          = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
            var formattedDescription    = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

            if(projects.projects[proj].images.length > 0) {
                for(image in projects.projects[proj].images) {
                    var formattedimage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
                    $(".project-entry:last").append(formattedimage);          
                }
            }
        }
    }    
};

var education = 
{
    "schools" : 
    [
        {
            "name" 	: "Florida State University",
            "location" 	: "Panama City, Panama",
            "degree"	: "N/A",
            "majors"	: ["General Studies"],
            "dates"     : "1989-1990",
            "url"       : "http://panama.fsu.edu/"
        },
        {
            "name" 	: "Frederick Community College",
            "location" 	: "Frederick, MD",
            "degree"	: "AA",
            "majors"	: ["General Studies"],
            "dates"     : "1992",
            "url"       : "http://www.frederick.edu/"
        },			
        {
            "name" 	: "Strayer University",
            "location" 	: "Washington DC",
            "degree"	: "BS",
            "majors"	: ["Computer Information Systems"],
            "dates"     : "1998-2000",
            "url"       : "http://www.strayer.edu/"
        },
        {
            "name" 	: "George Mason University",
            "location" 	: "Fairfax, Va",
            "degree"	: "N/A",
            "majors"	: ["Computer Science"],
            "dates"     : "2005-2007",
            "url"       : "https://www.gmu.edu/"
        }
    ],
    
    "onlineCourses" :   
    [
        {
            "title"     :   "Front End Web Developer",
            "school"    :   "Udacity",
            "dates"     :   "2015",
            "url"       :   "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }    
    ],
    "display"       : function() {
        if(education.schools.length > 0) {
            for(var school = 0; school<education.schools.length; ++school) {
                $("#education").append(HTMLschoolStart);

                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

                $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
                $(".education-entry:last").append(formattedSchoolDates);
                $(".education-entry:last").append(formattedSchoolLocation);
                $(".education-entry:last").append(formattedSchoolMajor);
            }
        }

        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(var course=0; course<education.onlineCourses.length; ++course) {
                $("#education").append(HTMLschoolStart);

                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }
    }    
};

$("#mapDiv").append(googleMap);

work.display();  
projects.display();
bio.display();
education.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks(x,y);
    
});
