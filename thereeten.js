// EXAMPLE ONE Array Reduce
// let reduce = function (nums, init, fn) {
//     let result = init
//     for (let i = 0; i < nums.length; i++) {
//         result = fn(result, nums[i])
//     }

//     return result
// };


let reduceTwp = function (nums, init, fn) {
    let simpanDataArray = init;
    for (const valueArray of nums) {
        simpanDataArray = fn(simpanDataArray, valueArray)
    }
    return simpanDataArray
}

function sum(accum, curr) { return accum + curr; }
console.log(reduceTwp([1, 2, 3, 4], 0, sum))

// function reducer(accumulator, currentValue, index) {
//     const returs = accumulator + currentValue;
//     console.log(
//         `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returs}`,
//     );
//     return returs
// }

// array.reduce(reducer)