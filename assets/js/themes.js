// Get all theme toggle switches
const themeAqua = document.getElementById('themeAqua');
const themeOrange = document.getElementById('themeOrange');
const themeGreen = document.getElementById('themeGreen');
const themeLight = document.getElementById('themeLight');

// Set the default theme to 'Aqua' on page load
document.documentElement.setAttribute('data-theme', 'aqua');

/**
 * switchTheme Function, used to set the theme attributes
 * @param {*} theme 
 */
function switchTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

// All event listeners for each of the different themes
themeAqua.addEventListener('change', function () {
  if (this.checked) switchTheme('aqua');
  console.log("aqua");
});

themeOrange.addEventListener('change', function () {
  if (this.checked) switchTheme('orange');
  console.log("orange");
});

themeGreen.addEventListener('change', function () {
  if (this.checked) switchTheme('green');
  console.log("green");
});

themeLight.addEventListener('change', function () {
  if (this.checked) switchTheme('light');
  console.log("light");
});
