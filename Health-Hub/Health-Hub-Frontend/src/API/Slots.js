import { serverApiUrl } from "../index"

export const addSlot = (timing, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "slots/addSlot",
        {
            method: 'POST',
            headers,
            body: JSON.stringify({ timing })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

export const getSlots = (callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "slots/getSlots",
        {
            method: 'GET',
            headers,
            //body: JSON.stringify({ id })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

export const deleteSlot = (id, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "slots/deleteSlot",
        {
            method: 'DELETE',
            headers,
            body: JSON.stringify({ id })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

export const addDocSlot = (slotId,docId, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "slots/addDocSlot",
        {
            method: 'POST',
            headers,
            body: JSON.stringify({ slotId,docId, })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

export const deleteDocSlot = (id, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "slots/deleteDocSlot",
        {
            method: 'DELETE',
            headers,
            body: JSON.stringify({ id })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}
