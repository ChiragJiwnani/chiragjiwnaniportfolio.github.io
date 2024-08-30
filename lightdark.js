
// document.addEventListener("DOMContentLoaded", function () {
//   const themeToggleBtn = document.getElementById("theme-toggle");
//   const htmlElement = document.documentElement;
//   const sunIcon = document.getElementById("sun-icon");
//   const moonIcon = document.getElementById("moon-icon");

//   // Default to dark mode
//   if (!localStorage.getItem("theme")) {
//     htmlElement.classList.add("light");
//     localStorage.setItem("theme", "light");
//   } else if (localStorage.getItem("theme") === "dark") {
//     htmlElement.classList.add("dark");
//     sunIcon.classList.remove("hidden");
//     moonIcon.classList.add("hidden");
//   }

//   themeToggleBtn.addEventListener("click", () => {
//     if (htmlElement.classList.contains("light")) {
//       htmlElement.classList.remove("light");
//       htmlElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       sunIcon.classList.remove("hidden");
//       moonIcon.classList.add("hidden");
//     } else {
//       htmlElement.classList.remove("dark");
//       htmlElement.classList.add("light");
//       localStorage.setItem("theme", "light");
//       sunIcon.classList.add("hidden");
//       moonIcon.classList.remove("hidden");
//     }
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const toggleCheckbox = document.getElementById("toggle");
  const htmlElement = document.documentElement;
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  // Set initial theme based on local storage or default to light
  if (!localStorage.getItem("theme") || localStorage.getItem("theme") === "light") {
      htmlElement.classList.add("light");
      localStorage.setItem("theme", "light");
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
      toggleCheckbox.checked = false;
  } else if (localStorage.getItem("theme") === "dark") {
      htmlElement.classList.add("dark");
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
      toggleCheckbox.checked = true;
  }

  toggleCheckbox.addEventListener("click", () => {
    if (htmlElement.classList.contains("light")) {
        htmlElement.classList.remove("light");
        htmlElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
        console.log("Dark mode activated, moon icon should be visible.");
    } else {
        htmlElement.classList.remove("dark");
        htmlElement.classList.add("light");
        localStorage.setItem("theme", "light");
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
        console.log("Light mode activated, sun icon should be visible.");
    }
});

});


