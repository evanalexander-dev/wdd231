import { places } from '../data/places.mjs';
const discoverSection = document.querySelector('#discoverItems');

places.forEach(place => {
    const card = document.createElement('div');
    const title = document.createElement('h2');
    const img = document.createElement('img');
    const address = document.createElement('address');
    const description = document.createElement('p');
    const learnMore = document.createElement('button');

    title.innerText = place.name;

    img.setAttribute('src', `images/${place.image}`);
    img.setAttribute('alt', place.name);
    img.setAttribute('loading', 'lazy');

    address.innerText = place.address;

    description.innerText = place.description;

    learnMore.innerText = "Learn More";

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(learnMore);

    discoverSection.appendChild(card);
});

const message = document.querySelector('#message');
const lastVisited = localStorage.getItem('lastVisited');
if (lastVisited == null) {
    message.innerText = "Welcome! Let us know if you have any questions."
} else {
    const lastVisitDate = new Date(lastVisited);
    const currentDate = new Date();

    const timeDiff = currentDate - lastVisitDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff < 1) {
        message.innerText = "Back so soon! Awesome!";
    } else {
        message.innerText = `You last visited ${daysDiff} day${daysDiff > 1 ? 's' : ''} ago.`;
    }
}

localStorage.setItem('lastVisited', new Date().toISOString());