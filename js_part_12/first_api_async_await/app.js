let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data.fact);
//         return fetch(url)
//     })
//     .then((response2) => {
//         return response2.json();
//     })
//     .then((data2) => {
//         console.log(data2.fact);
//     })
//     .catch((error) => {
//         console.log(error);
//     })


async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }
    catch (e) {
        console.log(e);
    }
}