const themeButton = document.querySelector('#themeSwitch');
const lightIcon = document.querySelector('#lightIcon');
const darkIcon = document.querySelector('#darkIcon');

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
let darkMode = localStorage.getItem('theme') ? localStorage.getItem('theme') === 'dark' : darkModeMediaQuery.matches;

function updateTheme() {
    if (darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        lightIcon.setAttribute('display', 'block');
        darkIcon.setAttribute('display', 'none');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightIcon.setAttribute('display', 'none');
        darkIcon.setAttribute('display', 'block');
        localStorage.setItem('theme', 'light');
    }
}

updateTheme();
themeButton.addEventListener('click', () => { darkMode = !darkMode; updateTheme(); });

const navElement = document.querySelector('nav');
const navButton = document.querySelector('#navIcon');

navButton.addEventListener('click', () => navElement.classList.toggle('navActive'));
