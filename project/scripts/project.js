import { running } from "./api.mjs";

let ip = localStorage.getItem('ip') || '';
let user = localStorage.getItem('user') || '';
let pass = localStorage.getItem('pass') || '';

if (!ip || !user || !pass) {
    ip = prompt("Please enter the IP address of the Webcast System");
    user = prompt("Please enter the username for the Webcast System");
    pass = prompt("Please enter the password for the Webcast System");
    localStorage.setItem('ip', ip);
    localStorage.setItem('user', user);
    localStorage.setItem('pass', pass);
}

const footer = document.querySelector('footer');
function updateFooter() {
    running(ip, user, pass).then(data => {
        if (data.response) {
            footer.classList.add('streaming');
        } else {
            footer.classList.remove('streaming');
        }
    });
}

updateFooter();
setInterval(updateFooter, 15000);