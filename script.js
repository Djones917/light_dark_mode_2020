const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Swith Theme Dynamically
function switchTheme(e) {
   console.log(e);
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
