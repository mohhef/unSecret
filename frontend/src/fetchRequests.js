async function createMessageRequest(payload){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = payload;

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw
    };

    fetch("http://localhost:5000/create", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

module.exports = {
    createMessageRequest
}