const urlParams = new URLSearchParams(window.location.search);

function getParam(name) {
    return decodeURIComponent(urlParams.get(name) || '');
}

document.getElementById('fullName').textContent =
    `${getParam('firstName')} ${getParam('lastName')}`;
document.getElementById('email').textContent = getParam('email');
document.getElementById('cellPhone').textContent = getParam('cellPhone');
document.getElementById('organization').textContent = getParam('organization');

const timestamp = new Date(getParam('timestamp'));
document.getElementById('timestamp').textContent = timestamp.toLocaleString();