import { serverApiUrl } from "../index"

export const addDoctor = (email, password, name, field, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
   // headers.append("password", password)

    fetch(serverApiUrl + "admin/addDoctor",
        {
            method: 'POST',
            headers,
            body: JSON.stringify({ email, password, name, field })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

export const updateDoctor = (data, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
   // headers.append("password", password)

    fetch(serverApiUrl + "admin/addDoctor",
        {
            method: 'PUT',
            headers,
            body: JSON.stringify({ ...data })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

export const getDoctors = (callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
   // headers.append("password", password)

    fetch(serverApiUrl + "admin/getDoctors",
        {
            method: 'GET',
            headers,
            //body: JSON.stringify({ email, password, name, field })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

export const getDoctor = (Did, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
   // headers.append("password", password)

    fetch(serverApiUrl + "admin/getDoctor?Did="+Did,
        {
            method: 'GET',
            headers,
         //   body: JSON.stringify({ Did })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

export const deleteDoctor = (id, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
   // headers.append("password", password)

    fetch(serverApiUrl + "admin/deleteDoctor",
        {
            method: 'DELETE',
            headers,
            body: JSON.stringify({ id })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

export const addReceptionist = (email, password, name, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
   // headers.append("password", password)

    fetch(serverApiUrl + "admin/addReceptionist",
        {
            method: 'POST',
            headers,
            body: JSON.stringify({ email, password, name })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

export const updateReceptionist = (data, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
   // headers.append("password", password)

    fetch(serverApiUrl + "admin/updateReceptionist",
        {
            method: 'PUT',
            headers,
            body: JSON.stringify({ ...data })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

export const getReceptionists = ( callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
   // headers.append("password", password)

    fetch(serverApiUrl + "admin/getReceptionists",
        {
            method: 'GET',
            headers,
            //body: JSON.stringify({ email, password, name, field })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

export const deleteReceptionist = (id, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
   // headers.append("password", password)

    fetch(serverApiUrl + "admin/deleteReceptionist",
        {
            method: 'POST',
            headers,
            body: JSON.stringify({ id })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}
