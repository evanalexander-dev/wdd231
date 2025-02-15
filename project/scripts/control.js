import { start, stop, restart, getLogs } from "./api.mjs";

const ip = localStorage.getItem('ip');
const user = localStorage.getItem('user');
const pass = localStorage.getItem('pass');

const startButton = document.querySelector("button#start");
const stopButton = document.querySelector("button#stop");
const restartButton = document.querySelector("button#restart");
const logField = document.querySelector("p#logs");

startButton.addEventListener("click", () => start(ip, user, pass).then(data => updateLogs(data)));
stopButton.addEventListener("click", () => stop(ip, user, pass).then(data => updateLogs(data)));
restartButton.addEventListener("click", () => restart(ip, user, pass).then(data => updateLogs(data)));

function updateLogs(data = "") {
    if (data) {
        logField.innerHTML = data?.response.replaceAll('\n', '<br>');
        return;
    }

    getLogs(ip, user, pass).then(data => {
        logField.innerHTML = data?.response.replaceAll('\n', '<br>');
    });
}

updateLogs();
setInterval(updateLogs, 5000);