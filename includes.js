// Initialize header event listeners
function initHeaderEvents() {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }
}

// Load header and footer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  loadHTML('hfile', 'header.html'); // Load header into #header
  loadHTML('ffile', 'footer.html'); // Load footer into #footer
});