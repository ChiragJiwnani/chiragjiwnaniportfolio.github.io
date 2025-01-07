document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.getElementById("dropdownDefaultButton");
    const dropdownMenu = document.getElementById("dropdown");
  
    // Toggle dropdown visibility
    dropdownButton.addEventListener("click", () => {
      dropdownMenu.classList.toggle("hidden");
    });
  
    // Optionally, close dropdown when clicking outside
    document.addEventListener("click", (event) => {
      if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add("hidden");
      }
    });
  });
  