// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num )
//             resolve();
//         }, 1000);
//     })
// }

// async function demo() {
//    await getNum();
//    await getNum();
//    await getNum();
// }

let h1 = document.querySelector("h1");

function changeColor(colors, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("promise reject");
            }
            if (h1) {
                console.log(colors);
                h1.style.color = colors;
                resolve("color changed");
            }
            else {
                reject("h1 element not found");
            }
        }, delay)
    })
}

async function demo() {
    try{
        await changeColor("pink", 800);
        await changeColor("red", 800);
        await changeColor("yellow", 800);    
    }catch(e){
        console.log(e)
    }
   
    let a = 5;
    console.log(a + 3);
}