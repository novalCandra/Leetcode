// // SPREAD JAVASCRIPT
// function sum(x, y, z) {
//     return x + y + z
// }

// const numbers = [1, 2, 3];
// // console.log(sum(...numbers))


// let arr1 = [0, 1, 2, 3];
// const arr2 = [4, 5, 6, 7];

// let gabungkan = [...arr1, ...arr2]
// console.log(gabungkan)


// TRAINING TWO SUM

// var TwoSumTrainig = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] === target - nums[i]) {
//                 return console.log([i, j])
//             }
//         }
//     }
//     return []
// }

// TwoSumTrainig([-1, -3, 4, 2], -4)


// array
[1, 2, 3, 4, "5"]


// {
//     "nama" : novel,
//         "age" : 12,
//             "perusahaan" : ["A", 'B', "C"]
// }

const testing = {
    nama: [1, 2, 3, 4],
}
const arrayObject = [1, 2, 3, 4, {
    nama: "nama",
    age: 12
}]


// const cobakoBJECT = {
//     "nama": "nama",
//     "age": 12,
//     "perushaan": "A",
//     "alamat": "pasuruan"
// }

// // console.log(cobakoBJECT.age)

// // delete cobakoBJECT.age
// console.log(cobakoBJECT)


const array = [1, 2, 4, 6];
const array2 = array.map((item) => {
    return item * 2
})
const array3 = array.forEach((item) => {
    return item * 2
})

// const array4 = fo
for (let i = 0; i < array.length; i++) {
    console.log(i)
}

console.log(array2)
console.log(array3)

