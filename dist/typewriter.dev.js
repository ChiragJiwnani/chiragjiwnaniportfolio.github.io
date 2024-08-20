"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var typingText = document.getElementById('typing-text');
  var typingContainer = typingText.parentElement; // Calculate the text width

  var textWidth = typingText.scrollWidth; // Apply the width to the container for the typing animation

  typingContainer.style.width = "".concat(textWidth, "px"); // Apply the final width to the keyframes via a CSS variable if necessary

  typingText.style.animation = "typing 4 steps(".concat(typingText.textContent.length, ") infinite alternate, blink 1s infinite");
});
//# sourceMappingURL=typewriter.dev.js.map
