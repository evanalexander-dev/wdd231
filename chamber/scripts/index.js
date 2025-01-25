const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=39.74&lon=-104.97&units=imperial&appid=901e6d5d2fd695a4941c397f849dd3b5';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=39.74&lon=-104.97&units=imperial&appid=901e6d5d2fd695a4941c397f849dd3b5';

async function weatherApiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const weatherIcon = document.getElementById('weather-icon');
const currentTemp = document.getElementById('weather-current');
const description = document.getElementById('weather-description');
const highTemp = document.getElementById('weather-high');
const lowTemp = document.getElementById('weather-low');
const humidity = document.getElementById('weather-humidity');
const sunrise = document.getElementById('weather-sunrise');
const sunset = document.getElementById('weather-sunset');

function displayWeather(data) {
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    currentTemp.innerHTML = `<b>${data.main.temp}</b>`;
    description.textContent = data.weather[0].description.replace(/\b[a-z]/g, t => t.toUpperCase());
    highTemp.textContent = data.main.temp_max;
    lowTemp.textContent = data.main.temp_min;
    humidity.textContent = data.main.humidity;
    var sunriseDate = new Date(data.sys.sunrise * 1000);
    sunrise.textContent = `${sunriseDate.getHours() % 12 || 12}:${sunriseDate.getMinutes()}`;
    let sunsetDate = new Date(data.sys.sunset * 1000);
    sunset.textContent = `${sunsetDate.getHours() % 12 || 12}:${sunsetDate.getMinutes()}`;
}

async function forecastApiFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const weatherToday = document.getElementById('weather-today');
const weatherTomorrow = document.getElementById('weather-tomorrow');
const weatherOvermorrow = document.getElementById('weather-overmorrow');
function displayForecast(data) {
    const todayDate = (new Date(data.list[0].dt  * 1000)).toLocaleDateString("en-US",{ weekday: 'long' });
    const todayTemp = data.list[0].main.temp_max;
    weatherToday.innerHTML = `${todayDate}: <b>${todayTemp}</b>`;
    const tomorrowDate = (new Date(data.list[7].dt  * 1000)).toLocaleDateString("en-US",{ weekday: 'long' });
    const tomorrowTemp = data.list[1].main.temp_max;
    weatherTomorrow.innerHTML = `${tomorrowDate}: <b>${tomorrowTemp}</b>`;
    const overmorrowDate = (new Date(data.list[15].dt * 1000)).toLocaleDateString("en-US",{ weekday: 'long' });
    const overmorrowTemp = data.list[2].main.temp_max;
    weatherOvermorrow.innerHTML = `${overmorrowDate}: <b>${overmorrowTemp}</b>`;
}

let members = [];
const directoryDiv = document.querySelector('.directory');

async function getMemberData() {
    const response = await fetch("data/members.json");
    const data = await response.json();

    return data.members;
}

function displayMembers() {
    directoryDiv.innerHTML = '';
    directoryDiv.style.display = 'grid';
    
    let randomMembers = [];
    while (randomMembers.length < 3) {
        let member = members[Math.floor(Math.random() * members.length)];
        if (!randomMembers.includes(member) && member.level > 0) {
            randomMembers.push(member);
        }
    }
    
    randomMembers.forEach(member => {
        const card = document.createElement('section');
        const logo = document.createElement('img');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('a');

        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `${member.name} Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', 'auto');
        logo.setAttribute('height', '50rem');

        address.innerText = member.address;

        phone.innerText = member.phone;

        website.setAttribute('href', member.website);
        website.innerText = member.website;

        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        directoryDiv.appendChild(card);
    });
}

getMemberData().then(data => { members = data; displayMembers(); });
weatherApiFetch();
forecastApiFetch();