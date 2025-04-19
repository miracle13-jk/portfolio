// Show current date & time
document.getElementById("datetime").textContent = new Date().toLocaleString();

// Toggle dark mode
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}
