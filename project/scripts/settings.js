import { getSettings } from "./api.mjs";

const ip = localStorage.getItem('ip');
const user = localStorage.getItem('user');
const pass = localStorage.getItem('pass');

const autoField = document.querySelector('#auto');
const rtmpUrlField = document.querySelector('#rtmpurl');
const rtmpKeyField = document.querySelector('#rtmpkey');
const presetField = document.querySelector('#preset');
const resolutionField = document.querySelector('#resolution');
const audioBitrateField = document.querySelector('#abitrate');
const audioDelayField = document.querySelector('#audioDelay');
const videoBitrateField = document.querySelector('#vbitrate');
const videoDelayField = document.querySelector('#videoDelay');
const volumeField = document.querySelector('#volume');

getSettings(ip, user, pass).then(data => {
    autoField.value = data.auto;
    rtmpUrlField.value = data.rtmpurl;
    rtmpKeyField.value = data.rtmpkey;
    presetField.value = data.preset;
    resolutionField.value = data.resolution;
    audioBitrateField.value = data.abitrate;
    audioDelayField.value = data.audioDelay;
    videoBitrateField.value = data.vbitrate;
    videoDelayField.value = data.videoDelay;
    volumeField.value = data.volume;
});