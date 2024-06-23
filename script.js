document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.getElementById("about-link");
    const skillsLink = document.getElementById("skills-link");
    const interestLink = document.getElementById("interest-link");

    const aboutSection = document.getElementById("about");
    const skillsSection = document.getElementById("skills");
    const interestSection = document.getElementById("interest");

    aboutLink.addEventListener("click", function() {
        aboutSection.style.display = "block";
        skillsSection.style.display = "none";
        interestSection.style.display = "none";
    });

    skillsLink.addEventListener("click", function() {
        aboutSection.style.display = "none";
        skillsSection.style.display = "block";
        interestSection.style.display = "none";
    });

    interestLink.addEventListener("click", function() {
        aboutSection.style.display = "none";
        skillsSection.style.display = "none";
        interestSection.style.display = "block";
    });
});