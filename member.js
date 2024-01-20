function skillsMember() {
  var member = document.getElementById("member");
  var skills = document.getElementById("skills");
  var projects = document.getElementById("projects");
  var contact = document.getElementById("contact");
  var about = document.getElementById("about");
  var memberContent = document.getElementById("member-content");
  var skillsContent = document.getElementById("skills-content");
  var projectsContent = document.getElementById("projects-content");
  var contactContent = document.getElementById("contact-content");
  var aboutContent = document.getElementById("about-content");
  memberContent.style.display = "block";
  skillsContent.style.display = "none";
  projectsContent.style.display = "none";
  contactContent.style.display = "none";
  aboutContent.style.display = "none";
  member.style.backgroundColor = "#333";
  skills.style.backgroundColor = "#111";
  projects.style.backgroundColor = "#111";
  contact.style.backgroundColor = "#111";
  about.style.backgroundColor = "#111";
}