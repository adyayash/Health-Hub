import { serverApiUrl } from "../index"

export const getVisit = (Did, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
   // headers.append("password", password)

    fetch(serverApiUrl + "doctor/getVisit?Did="+Did,
        {
            method: 'GET',
            headers,
           // body: JSON.stringify({ email, password })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

export const getAvailableSlot = (date,docId, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
   // headers.append("password", password)
    console.log("IN API",date,docId)
    fetch(serverApiUrl + "doctor/getAvailableSlot?date="+date+"&docId="+docId,
        {
            method: 'GET',
            headers,
           // body: JSON.stringify({ email, password })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}
