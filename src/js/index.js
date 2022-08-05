const toggleBtn = document.querySelector(".toggler");

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.documentElement.classList.add("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.documentElement.classList.remove("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}

// When someone clicks the button
toggleBtn.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});

// Up to top

// Selector
const upButton = document.querySelector(".up");

// appear if scrolled 350
window.addEventListener("scroll", () => {
  if (window.scrollY >= 290) {
    upButton.classList.add("show");
  } else {
    upButton.classList.remove("show");
  }
});
