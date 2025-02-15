import { postSettings } from "./api.mjs";

const ip = localStorage.getItem('ip');
const user = localStorage.getItem('user');
const pass = localStorage.getItem('pass');

const params = new URLSearchParams(window.location.search);
const output = document.querySelector('#settingsOutput');

let settings = {};
params.forEach((value, key) => settings[key] = decodeURIComponent(value));
settings.abitrate = Number(settings.abitrate);
settings.audioDelay = Number(settings.audioDelay);
settings.vbitrate = Number(settings.vbitrate);
settings.videoDelay = Number(settings.videoDelay);
settings.volume = Number(settings.volume);

postSettings(ip, user, pass, settings).then(data => {
    output.innerHTML += `<p><strong>Stream Source:</strong> ${data.auto === 'true' ? 'YouTube' : 'RTMP'}</p>`;
    output.innerHTML += `<p><strong>RTMP URL:</strong> ${data.rtmpurl}</p>`;
    output.innerHTML += `<p><strong>RTMP Key:</strong> ${data.rtmpkey}</p>`;
    output.innerHTML += `<p><strong>Preset:</strong> ${data.preset}</p>`;
    output.innerHTML += `<p><strong>Resolution:</strong> ${data.resolution}</p>`;
    output.innerHTML += `<p><strong>Audio Bitrate:</strong> ${data.abitrate}</p>`;
    output.innerHTML += `<p><strong>Audio Delay (s):</strong> ${data.audioDelay}</p>`;
    output.innerHTML += `<p><strong>Video Bitrate:</strong> ${data.vbitrate}</p>`;
    output.innerHTML += `<p><strong>Video Delay (s):</strong> ${data.videoDelay}</p>`;
    output.innerHTML += `<p><strong>Volume Gain (dB):</strong> ${data.volume}</p>`;
});
