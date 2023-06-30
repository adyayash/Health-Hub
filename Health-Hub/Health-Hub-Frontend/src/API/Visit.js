import { serverApiUrl } from "../index"

export const addVisit = (date, userId, docId, slotId, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "visit/addVisit",
        {
            method: 'POST',
            headers,
            body: JSON.stringify({ date, userId, docId, slotId })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

export const updateVisit = (data, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "visit/updateVisit",
        {
            method: 'PUT',
            headers,
            body: JSON.stringify({ ...data })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}


export const addRequest = (userId, subject, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "visit/addRequest",
        {
            method: 'POST',
            headers,
            body: JSON.stringify({ userId, subject })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

export const getRequests = (callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "visit/getRequests",
        {
            method: 'GET',
            headers,
           // body: JSON.stringify({ userId, subject })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}


export const updateRequests = (data,callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "visit/updateRequests",
        {
            method: 'PUT',
            headers,
            body: JSON.stringify({ ...data })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}


export const deleteRequest = (Vid, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "visit/deleteRequest",
        {
            method: 'DELETE',
            headers,
            body: JSON.stringify({ Vid })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}


export const reAssignVisit = (visitId, docId, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "visit/reAssignVisit",
        {
            method: 'PUT',
            headers,
            body: JSON.stringify({ visitId, docId })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}



export const getAlternateDoctorForCancelledVisit = (vId, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "visit/getAlternateDoctorForCancelledVisit?vId="+vId,
        {
            method: 'GET',
            headers,
          //  body: JSON.stringify({ Vid })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}



export const getDoctorCancelledVisit = (callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "visit/getDoctorCancelledVisit",
        {
            method: 'GET',
            headers,
         //   body: JSON.stringify({ Vid })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

