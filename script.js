//create variables
var bio = "[not initialized]";
var git = "[not initialized]";
var codepen = "[not initialized]";
var message = "[not initialized]";
var usernames = git + codepen;
var str1 = "";
var result1 = "[not initialized]";
var str2 = "";
var result2 = "[not initialized]";
var str3 = "";
var result3 = "[not initialized]";
var str4 = "";
var result4 = "[not initialized]";
var str5 = "";
var result5 = "[not initialized]";

//set up bio function
function setBio() {
  bio =
    "Hello! My name is Kyra Mardos and I am a CIS major student at the University of North Alabama set to graduate May 2020. This is my Web Dev profile.";
}
//set text
function setTextContentById(getId, setText) {
  var el = document.getElementById(getId);
  el.textContent = setText;
}
//execute bio function
setBio();
setTextContentById("intro", bio);
//set up usernames function
function setUsernames() {
  git = "Kmard1 on Github";
  codepen = " Kmard1 on CodePen";
  message = "My usernames are ";
  usernames = message + git + " and" + codepen;
}
//set text for usernames by getting IDs
function setTextContentById(getId, setText) {
  var el = document.getElementById(getId);
  el.textContent = setText;
}
//execute Username function
setUsernames();
setTextContentById("user", usernames);

//create function for example projects
function setProjects() {
  str1 = "Example Project 1";
  result1 = str1.link("https://kmard1.github.io/webportfolio/index.html");
  document.getElementById("proj1").innerHTML = result1;
  str2 = "Example Project 2";
  result2 = str2.link("https://kmard1.github.io/DEV06_js/");
  document.getElementById("proj2").innerHTML = result2;
}
setProjects();

function setLinks() {
  str3 = "W3Schools";
  result3 = str3.link("https://www.w3schools.com/");
  document.getElementById("link1").innerHTML = result3;
  str4 = "CodeCademy";
  result4 = str4.link("https://www.codecademy.com/catalog/subject/all");
  document.getElementById("link2").innerHTML = result4;
  str5 = "DevDocs";
  result5 = str5.link("https://devdocs.io/");
  document.getElementById("link3").innerHTML = result5;
  
}
setLinks();

$(document).ready(function() { 
  
            $("button").click(function() { 
                
              //here the value is stored in variable.  
                var x = $("input:text").val();  
  
                document.getElementById("demo").innerHTML = x; 
            }); 
  
        });
		

