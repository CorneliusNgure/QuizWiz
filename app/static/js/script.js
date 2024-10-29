// Handle opening and closing of the dropdown menu
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".dropdown-menu").style.left = "0";
});

document.querySelector(".close-btn").addEventListener("click", () => {
  document.querySelector(".dropdown-menu").style.left = "-100%";
});

// Dark mode toggle
const modeSwitch = document.getElementById("mode-switch");
modeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
