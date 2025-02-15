export async function running(ip, user, pass) {
    try {
        const encodedAuth = btoa(`${user}:${pass}`);
        const headers = { "Authorization": `Basic ${encodedAuth}` };
        const response = await fetch(`http://${ip}:5001/webcast/running`, { headers });
        if (response.ok) {
            return await response.json();
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

export async function start(ip, user, pass) {
    try {
        const encodedAuth = btoa(`${user}:${pass}`);
        const headers = { "Authorization": `Basic ${encodedAuth}` };
        const response = await fetch(`http://${ip}:5001/webcast/start`, { headers });
        if (response.ok) {
            return await response.json();
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

export async function stop(ip, user, pass) {
    try {
        const encodedAuth = btoa(`${user}:${pass}`);
        const headers = { "Authorization": `Basic ${encodedAuth}` };
        const response = await fetch(`http://${ip}:5001/webcast/stop`, { headers });
        if (response.ok) {
            return await response.json();
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

export async function restart(ip, user, pass) {
    try {
        const encodedAuth = btoa(`${user}:${pass}`);
        const headers = { "Authorization": `Basic ${encodedAuth}` };
        const response = await fetch(`http://${ip}:5001/webcast/restart`, { headers });
        if (response.ok) {
            return await response.json();
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getLogs(ip, user, pass) {
    try {
        const encodedAuth = btoa(`${user}:${pass}`);
        const headers = { "Authorization": `Basic ${encodedAuth}` };
        const response = await fetch(`http://${ip}:5001/webcast/status`, { headers });
        if (response.ok) {
            return await response.json();
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getSchedule(ip, user, pass) {
    try {
        const encodedAuth = btoa(`${user}:${pass}`);
        const headers = { "Authorization": `Basic ${encodedAuth}` };
        const response = await fetch(`http://${ip}:5001/webcast/upcoming`, { headers });
        if (response.ok) {
            return await response.json();
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getSettings(ip, user, pass) {
    try {
        const encodedAuth = btoa(`${user}:${pass}`);
        const headers = { "Authorization": `Basic ${encodedAuth}` };
        const response = await fetch(`http://${ip}:5001/webcast/settings`, { headers });
        if (response.ok) {
            return await response.json();
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

export async function postSettings(ip, user, pass, settings) {
    try {
        const encodedAuth = btoa(`${user}:${pass}`);
        const headers = { "Authorization": `Basic ${encodedAuth}`, "Content-Type": "application/json" };
        const response = await fetch(`http://${ip}:5001/webcast/settings`, {
            method: "POST",
            body: JSON.stringify(settings),
            headers
        });
        if (response.ok) {
            return await response.json();
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}