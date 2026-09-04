let addTwoPromisesMe = async function (promise1, promise2) {
    return await new Promise(resolver => setTimeout(() => {
        const [valuesOne, valueTwo] = Promise.all([promise1, promise2]);
        const plus =  valuesOne + valueTwo
        return plus
    }))
};

let addTwoPromises = async function (promise1, promise2) {
    return await new Promise((resolver) => {
        setTimeout(async() => {
            const [valuesOne, ValuesTwo] = await Promise.all([promise1, promise2]);
            const plus = valuesOne + ValuesTwo;
            resolver(plus)
        })
    })
};


let addTwoPromiseAiModels = async function (promise1, promise2) {
    const [valuesOne, valuesTwo] = await Promise.all([promise1, promise2]);
    return valuesOne + valuesTwo
}
// addTwoPromises(Promise.resolve(2), Promise.resolve(2))
//     .then(console.log).finally(() => console.log("selesai"))


// let check = function (promise1, promise2) {
//     const data = promise1 + promise2;
//     console.log(data)
// };
// check(2, 2)
// // console.log(check(2, 2))