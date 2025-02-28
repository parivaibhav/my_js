async function greet() {
    throw "error"
    return "Hello world!";
}

greet().then((result) => {
    console.log("sucess", result)
})
    .catch((e) => {
        console.error("page not found")
    })

let demo = async () => { return 5;}

demo();