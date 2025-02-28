let url = "https://catfact.ninja/fact";

fetch(url)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data.fact);
        return fetch(url)
    })
    .then((response2) => {
        return response2.json();
    })
    .then((data2) => {
        console.log(data2.fact);
    })
    .catch((error) => {
        console.log(error);
    })


