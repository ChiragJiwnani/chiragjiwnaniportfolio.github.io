"use strict";

// import "./input.css";
var tabs = document.querySelectorAll(".tab");
var indicator = document.querySelector(".indicator");
var panels = document.querySelectorAll(".tab-panel");
indicator.style.width = tabs[0].getBoundingClientRect().width + 'px';
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px';
tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    var tabTarget = tab.getAttribute("aria-controls");
    indicator.style.width = tab.getBoundingClientRect().width + 'px';
    indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px';
    panels.forEach(function (panel) {
      var panelId = panel.getAttribute("id");

      if (tabTarget === panelId) {
        panel.classList.remove("invisible", "opacity-0");
        panel.classList.add("visible", "opacity-100");
      } else {
        panel.classList.add("invisible", "opacity-0");
      }
    });
  });
});
//# sourceMappingURL=skillcomponent.dev.js.map
