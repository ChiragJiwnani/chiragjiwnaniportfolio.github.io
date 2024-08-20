"use strict";

var skillsBtn = document.getElementById('skillsBtn');
var experienceBtn = document.getElementById('experienceBtn');
var toggleSpan = document.getElementById('toggleSpan');
var skillsContent = document.getElementById('skillsContent');
var experienceContent = document.getElementById('experienceContent');

function showSkills() {
  skillsBtn.classList.add('font-bold', 'text-white');
  experienceBtn.classList.remove('font-bold', 'text-white');
  toggleSpan.textContent = 'Skills';
  toggleSpan.classList.remove('left-1/2', '-ml-1');
  toggleSpan.classList.add('left-1');
  skillsContent.classList.remove('hidden');
  experienceContent.classList.add('hidden');
}

function showExperience() {
  experienceBtn.classList.add('font-bold', 'text-white');
  skillsBtn.classList.remove('font-bold', 'text-white');
  toggleSpan.textContent = 'Experience';
  toggleSpan.classList.add('left-1/2', '-ml-1');
  toggleSpan.classList.remove('left-1');
  experienceContent.classList.remove('hidden');
  skillsContent.classList.add('hidden');
}

skillsBtn.addEventListener('click', showSkills);
experienceBtn.addEventListener('click', showExperience); // Initialize with Skills selected

showSkills();
//# sourceMappingURL=btns.dev.js.map
