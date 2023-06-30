import { serverApiUrl } from "../index"


export const addPatient = (email, password, name, medicalHistory, alergies, emergencyContact, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "receptionist/addPatient",
        {
            method: 'POST',
            headers,
            body: JSON.stringify({ email, password, name, medicalHistory, alergies, emergencyContact })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}


export const updatePatient = (data, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "receptionist/updatePatient",
        {
            method: 'PUT',
            headers,
            body: JSON.stringify({ ...data })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}


export const deletePatient = (id, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "receptionist/deletePatient",
        {
            method: 'DELETE',
            headers,
            body: JSON.stringify({ id })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}
