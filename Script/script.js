(function(){
"use strict";

console.log("app started.");

var homeParagraph = document.getElementById("homeParagraph");
var projectParagraph = document.getElementById("projectParagraph");
var aboutParagraph = document.getElementById("aboutParagraph");
var paragraph = [];
paragraph[0]="Welcome to my profile";
paragraph[1]="Here are a few projects created by me.";
paragraph[2]="Hello, I am Jagdeep Virk. I am a student at Centennial college.Love taking pictures with my phone.";


if(homeParagraph){
homeParagraph.textContent = paras[0];

}
if(projectParagraph){
projectParagraph.textContent = paras[1];

	
}
if(aboutParagraph){
aboutParagraph.textContent = paras[2];

	
}

})();
