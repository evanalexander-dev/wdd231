import { getSchedule } from "./api.mjs";

const ip = localStorage.getItem('ip');
const user = localStorage.getItem('user');
const pass = localStorage.getItem('pass');

const eventDetails = document.querySelector('dialog');
function displayEventDetails(event) {
    const eventStartTime = new Date(event.start_time);
    const eventEndTime = new Date(event.end_time);
    const eventLengthMinutes = (eventEndTime - eventStartTime) / (1000 * 60);

    eventDetails.innerHTML = '';
    eventDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${event.title}</h2>
        <h3>${event.channel}</h3>
        <p><strong>Start Time</strong>: ${eventStartTime.toLocaleDateString()} ${eventStartTime.toLocaleTimeString()}</p>
        <p><strong>End Time</strong>: ${eventEndTime.toLocaleDateString()} ${eventEndTime.toLocaleTimeString()}</p>
        <p><strong>Total Time</strong> (minutes): ${eventLengthMinutes}</p>
    `;
    eventDetails.showModal();

    let closeModal = document.querySelector('#closeModal');
    closeModal.addEventListener('click', () => eventDetails.close());
}

const eventsDiv = document.querySelector('#upcomingEvents');
function displayEvent(event) {
    const eventStartTime = new Date(event.start_time);
    const eventEndTime = new Date(event.end_time);

    const card = document.createElement('div');
    const title = document.createElement('h3');
    const date = document.createElement('p');
    const channel = document.createElement('p');

    title.innerText = event.title;
    date.innerText = `${eventStartTime.toLocaleDateString()} ${eventStartTime.toLocaleTimeString()}`;
    channel.innerText = `Channel: ${event.channel}`;

    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(channel);

    eventsDiv.append(card);

    card.addEventListener('click', () => displayEventDetails(event));
}

getSchedule(ip, user, pass).then(data => { data.events.forEach(displayEvent) });