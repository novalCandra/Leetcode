async function sleep(millis) {
    return new Promise(resolver => {
        setTimeout(resolver, millis)
    })
}
let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100



// function sleep(miliis){
//     return new Promise(resolve => {
//         setTimeout(resolve, miliis)
//     })
// }

// async function main() {
//     let t = Date.now();
//     await sleep(100);
//     console.log(Date.now() - t)
// }

// await main()