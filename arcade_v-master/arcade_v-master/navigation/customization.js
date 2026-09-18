function changeFavicon(src) {
  const oldLink = document.getElementById('dynamic-favicon');
  if (oldLink && oldLink.parentNode === document.head) {
    try {
      document.head.removeChild(oldLink);
    } catch (error) {
      console.warn('Failed to remove old favicon:', error);
    }
  }

  const link = document.createElement('link');
  link.id = 'dynamic-favicon';
  link.rel = 'icon';
  link.href = src + '?v=' + new Date().getTime(); // prevent caching
  document.head.appendChild(link);

  localStorage.setItem('faviconSrc', src);
}

function changeTitle(title) {
  document.title = title;
  localStorage.setItem('pageTitle', title);
}

function cloakpage(title, src) {
  changeTitle(title);
  changeFavicon(src);
}

function changetheme(src) {
  document.body.style.backgroundImage = `url('${src}')`;
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.style.backgroundImage = `url('${src}')`;
  }
  const dropdownContent = document.querySelector('.dropdown-content');
  if (dropdownContent) {
    dropdownContent.style.backgroundImage = `url('${src}')`;
  }
      localStorage.setItem('themeBg', src);
  }

function changeFont(font) {
  document.body.style.fontFamily = font;
  localStorage.setItem('userFont', font);
  document.querySelectorAll('select').forEach(select => {
    select.style.fontFamily = font;
  });
  const searchBar = document.getElementById('searchBar');
  if (searchBar) {
    searchBar.style.fontFamily = font;
  }
}


function changeTextColor(color) {
document.documentElement.style.setProperty('--text-color', color);
localStorage.setItem('textColor', color);
}

function changeSelectedTextColor(color) {
document.documentElement.style.setProperty('--selected-text-color', color);
localStorage.setItem('selectedTextColor', color);
}



function resetToDefault() {
// Clear localStorage
localStorage.removeItem('faviconSrc');
localStorage.removeItem('pageTitle');
localStorage.removeItem('themeBg');
localStorage.removeItem('userFont');
localStorage.removeItem('textColor');
localStorage.removeItem('selectedTextColor');
localStorage.removeItem('activeTextColor');

// Reset Favicon & Title
changeFavicon('https://gitlab.com/arcade_v/arcade_v_images/-/raw/main/favicon/logo.png');
changeTitle('Arcade 4');

// Reset Theme
changetheme('https://gitlab.com/arcade_v/arcade_v_images/-/raw/main/backgrounds/void_theme.png');

// Reset Font
changeFont('Pixelify Sans, sans-serif');

// Reset Normal Text Color
changeTextColor('#ffffff');
const picker1 = document.getElementById('textColorPicker1');
if (picker1) picker1.value = '#ffffff';

// Reset Selected/Focus/Active Text Color
changeSelectedTextColor('#7F00FF');
changeFocusTextColor('#7F00FF');
changeActiveTextColor('#7F00FF');
const picker2 = document.getElementById('textColorPicker2');
if (picker2) picker2.value = '#7F00FF';

// Reset dropdown selections
document.getElementById('cloakDropdown').selectedIndex = 0;
document.getElementById('backgroundDropdown').selectedIndex = 0;
document.getElementById('fontDropdown').selectedIndex = 0;
}



// On page load
const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet"; 
stylesheet.type = "text/css"; 
stylesheet.href = "https://fonts.googleapis.com/css2?family=Pixelify+Sans&family=Comic+Neue&family=Courier+Prime&family=Press+Start+2P&family=VT323&family=Orbitron:wght@400;700&family=Roboto:wght@400;700&family=Open+Sans:wght@400;700&family=Patrick+Hand&family=Russo+One&display=swap"; 
document.head.appendChild(stylesheet);
const savedTheme = localStorage.getItem('themeBg');
if (savedTheme) changetheme(savedTheme);

const savedTitle = localStorage.getItem('pageTitle');
if (savedTitle) document.title = savedTitle;

const savedFavicon = localStorage.getItem('faviconSrc');
if (savedFavicon) changeFavicon(savedFavicon);

const savedFont = localStorage.getItem('userFont');
if (savedFont) changeFont(savedFont);

const savedColor = localStorage.getItem('textColor');
if (savedColor) {
changeTextColor(savedColor);
const picker1 = document.getElementById('textColorPicker1');
if (picker1) picker1.value = savedColor;
}

const selectedTextColor = localStorage.getItem('selectedTextColor');
if (selectedTextColor) {
changeSelectedTextColor(selectedTextColor);
changeFocusTextColor(selectedTextColor);
changeActiveTextColor(selectedTextColor);
const picker2 = document.getElementById('textColorPicker2');
if (picker2) picker2.value = selectedTextColor;
}


