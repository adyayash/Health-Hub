import { serverApiUrl } from "../index"

export const getVisit = (userId, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "patient/getVisit?userId=" + userId,
        {
            method: 'GET',
            headers,
            //  body: JSON.stringify({ email, password })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}


