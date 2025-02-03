// Theme Toggle Functionality
const themeToggle = document.querySelector('.theme-toggle');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const themeColorMeta = document.getElementById('theme-color-meta');

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Update theme attribute
    document.documentElement.setAttribute('data-theme', newTheme);

    // Update theme color meta tag
    themeColorMeta.setAttribute('content', newTheme === 'dark' ? '#1a1a1e' : '#fafafa');

    // Save theme preference to localStorage
    localStorage.setItem('theme', newTheme);

    // Toggle icon visibility
    sunIcon.style.display = newTheme === 'light' ? 'block' : 'none';
    moonIcon.style.display = newTheme === 'dark' ? 'block' : 'none';
}

// Add event listener to theme toggle button
themeToggle.addEventListener('click', toggleTheme);