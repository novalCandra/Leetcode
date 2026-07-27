let filter = function (arr, fn) {
    let arrayKosong = arr;
    function greaterThan10(n) {
        const value10 = arrayKosong.filter((n) => n > 10)
        return console.log(value10)
    }
    function firstIndex(n, i) {
        const firstIndex = arrayKosong.filter((n, i) => {
            return i === 0
        })
        return console.log(firstIndex)
    }

    function plusOne(n) {
        const hasilOne = arrayKosong.filter((n) => n += 1)
        return console.log(hasilOne)
    }
    greaterThan10()
    firstIndex()
    plusOne()
    return filter
}


// filter([0, 10, 20, 30])
// filter([1, 2, 3])
// filter([-2, -1, 0, 1, 2])


var filter = function (arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i])
        }
    }
    return result
}