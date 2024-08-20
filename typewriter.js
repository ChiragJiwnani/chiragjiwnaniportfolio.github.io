document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.getElementById('typing-text');
    const typingContainer = typingText.parentElement;

    // Calculate the text width
    const textWidth = typingText.scrollWidth;

    // Apply the width to the container for the typing animation
    typingContainer.style.width = `${textWidth}px`;

    // Apply the final width to the keyframes via a CSS variable if necessary
    typingText.style.animation = `typing 4 steps(${typingText.textContent.length}) infinite alternate, blink 1s infinite`;
});