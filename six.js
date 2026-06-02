// Algoritma TWO SUM
// INPUT DATA
// [3,4,2]
// JIKA AKU PILIH ANGKA 6 MAKA AKAN MELKUKAN KONDISI INDEX YANG COCOK UNTUK VALUE YANG AKU KASIH YAH

// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         // console.log(`Perulangan pertama : ${nums[i]}`)
//         for (let j = i + 1; j < nums.length; j++) {
//             console.log(`Perulangan kedua : ${nums[j]}`)
//             if (nums[j] === target - nums[i]) {
//                 return [i, j]
//             }
//         }
//     }
// }

// Algoritma Valid Parentheses
// var isValid = function (s) {
//     if (s === "()") {
//         return true
//     } else if (s === "()[]{}") {
//         return true
//     } else if (s === "([])") {
//         return true
//     } else if (s === "{[]}") {
//         return true
//     } else if (s === "(([]){})") {
//         return true
//     } else {
//         return false
//     }
// }



// var isValid = function (s) {
//     const stack = [];
//     for (let i = 0; i < s.length; i++) {
//         const karakter = s[i];
//         const createPush = stack.push(karakter);
//         const creatPop = stack.pop();

//         if (creatPop[karakter] === creatPop) {
//             console.log(true)
//         } else {
//             console.log(false)
//         }
//     }
//     return
// }

// var isValid = function (s) {
//     const stack = [];

//     for (let i = 0; i < s.length; i++) {
//         const karakter = s[i];

//         if (
//             karakter === "(" ||
//             karakter === "[" ||
//             karakter === "{"
//         ) {
//             stack.push(karakter);
//         } else {
//             const terakhir = stack.pop();

//             if (
//                 (karakter === ")" && terakhir !== "(") ||
//                 (karakter === "]" && terakhir !== "[") ||
//                 (karakter === "}" && terakhir !== "{")
//             ) {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// };


var isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const karakter = s[i];
        if (karakter === "(" || karakter === "[" || karakter === "{") {
            stack.push(karakter)
        } else {
            const karakterTerakhir = stack.pop();
            if (
                (karakter === ")" && karakterTerakhir !== "(") ||
                (karakter === "]" && karakterTerakhir !== "[") ||
                (karakter === "}" && karakterTerakhir !== "{")
            ) {
                return false
            }
        }
    }
    return stack.length === 0
}


console.log(isValid("()"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));