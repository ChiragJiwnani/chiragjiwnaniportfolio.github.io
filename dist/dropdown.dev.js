"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var dropdownButton = document.getElementById("dropdownDefaultButton");
  var dropdownMenu = document.getElementById("dropdown"); // Toggle dropdown visibility

  dropdownButton.addEventListener("click", function () {
    dropdownMenu.classList.toggle("hidden");
  }); // Optionally, close dropdown when clicking outside

  document.addEventListener("click", function (event) {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.add("hidden");
    }
  });
});
//# sourceMappingURL=dropdown.dev.js.map
