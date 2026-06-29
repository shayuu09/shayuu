// Function to load HTML content into a target element
async function loadHTML(elementId, filePath) {
  try {
    // Fetch the external HTML file
    const response = await fetch(filePath);
    
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
    }
    
    // Extract HTML text from the response
    const html = await response.text();
    
    // Insert the HTML into the target element
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = html;
    } else {
      throw new Error(`Element with ID "${elementId}" not found`);
    }
    // After inserting HTML, initialize dynamic elements
    if (elementId === 'header') {
      initHeaderEvents(); // Call a function to set up header interactions
    }
  } catch (error) {
    console.error('Error loading content:', error);
    // Optional: Display a fallback message in the UI
    document.getElementById(elementId)?.innerHTML = `<p>Error loading content.</p>`;
  }
}

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