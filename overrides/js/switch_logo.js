// Function to toggle the logo based on the theme
function toggleLogoBasedOnTheme() {
  const logoElement = document.querySelector('.md-header__button.md-logo img');
  const lightLogoSrc = 'assets/logo_light.gif';
  const darkLogoSrc = 'assets/logo_dark.gif';

  // Get the value of data-md-color-scheme attribute
  const colorScheme = document.body.getAttribute('data-md-color-scheme');

  // Check if the current theme is dark (slate)
  const isDarkTheme = colorScheme === 'slate';

  // Set the appropriate logo based on the theme
  logoElement.src = isDarkTheme ? darkLogoSrc : lightLogoSrc;
}

// Function to handle the theme change event
function handleThemeChange() {
  // Listen for the themechange event on the document
  document.addEventListener('themechange', function () {
    // Call the function to toggle the logo based on the theme
    toggleLogoBasedOnTheme();
  });
}

// Function to handle the dark mode switch event
function handleDarkModeSwitch() {
  const darkModeInput = document.getElementById('__palette_2');

  // Listen for the change event on the dark mode switch
  darkModeInput.addEventListener('change', function () {
    // Call the function to toggle the logo based on the theme
    toggleLogoBasedOnTheme();
  });
}

// Function to handle the light mode switch event
function handleLightModeSwitch() {
  const lightModeInput = document.getElementById('__palette_1');

  // Listen for the change event on the light mode switch
  lightModeInput.addEventListener('change', function () {
    // Call the function to toggle the logo based on the theme
    toggleLogoBasedOnTheme();
  });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', function () {
  toggleLogoBasedOnTheme(); // Set the logo based on the initial theme
  handleThemeChange(); // Add event listener for theme change
  handleDarkModeSwitch(); // Add event listener for dark mode switch
  handleLightModeSwitch(); // Add event listener for light mode switch
});
