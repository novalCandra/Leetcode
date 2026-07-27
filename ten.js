let map = function (arr, fr) {
    let dataBilangan = arr;
    const formartArray = [];
    for (const [i, dataArray] of dataBilangan.entries()) {
        formartArray.push(fr(dataArray, i))
    }
    return formartArray
}
const plusOne = (n) => n + 1;
console.log(map([1, 2, 3], plusOne))

const plusI = (n, i) => n + i;
console.log(map([1, 2, 3], plusI))

const constant = () => 42;
console.log(map([1, 2, 3], constant))

let map = function (arr, fn) {
    let dataBilangan = arr;
    // fn = function () { };
    function plusone(n) {
        const resultData = dataBilangan.map((n) => n + 1)
        return console.log(resultData)
    }
    function plusI(n, i) {
        const resultData = dataBilangan.map((n, i) => n + i)
        return console.log(resultData)
    }
    function constant(i) {
        const resultData = dataBilangan.map((n) => 42)
        return console.log(resultData)
    }
    fn(plusone())
    fn(plusI())
    fn(constant())
}

// map([1, 2, 3])
