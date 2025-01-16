// This code should be included in a script tag or a JavaScript file that is linked to pass.html

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("visited") === "true") {
      if (confirm("Do you want to fill credentials again?")) {
        localStorage.removeItem("visited"); // Clear the flag
        window.location.href = "index.html"; // Redirect to index.html
      }
    } else {
      localStorage.setItem("visited", "true"); // Set the flag on first visit
    }
  });