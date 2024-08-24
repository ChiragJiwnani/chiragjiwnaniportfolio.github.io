"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var themeToggleBtn = document.getElementById("theme-toggle");
  var htmlElement = document.documentElement;
  var sunIcon = document.getElementById("sun-icon");
  var moonIcon = document.getElementById("moon-icon"); // Default to dark mode

  if (!localStorage.getItem("theme")) {
    htmlElement.classList.add("light");
    localStorage.setItem("theme", "light");
  } else if (localStorage.getItem("theme") === "dark") {
    htmlElement.classList.add("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }

  themeToggleBtn.addEventListener("click", function () {
    if (htmlElement.classList.contains("light")) {
      htmlElement.classList.remove("light");
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
    } else {
      htmlElement.classList.remove("dark");
      htmlElement.classList.add("light");
      localStorage.setItem("theme", "light");
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
    }
  });
});
//# sourceMappingURL=lightdark.dev.js.map
