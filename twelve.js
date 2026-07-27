// function delayAdd(nums) {
//     return new Promise((resolver) => {
//         setTimeout(() => {
//             resolver(nums + 10)
//         }, 2000)
//     })
// }


// async function processNumbers(numbers) {
//     try {
//         const formatArray = [];
//         console.log("tunggu 2 detik")
//         for (const arrayNumbers of numbers) {
//             const delay = await delayAdd(arrayNumbers);
//             formatArray.push(delay)
//         }
//         return formatArray;
//     } catch (error) {
//         return console.error("error di bagian sini", error)
//     }
// }

// async function program() {
//     const numbers = [1, 2, 3, 4, 5];
//     const hasil = await processNumbers(numbers);
//     console.log(hasil)
// }

// program()



// TASK 2
// OUPUT NYA : [4, 16, 36, 64]
// const numbers = [2, 4, 6, 8]
// let array = []
// function delaySquare(nums) {
//     console.log("tunggu 500 ms detik")
//     return new Promise((resolver) => {
//         setTimeout(() => {
//             for (const nums of numbers) {
//                 const hasil = nums * nums;
//                 array.push(hasil)
//             }
//             resolver(array)
//         }, 500)
//     })
// }

// delaySquare(numbers).then((success) => console.log(success)).catch((error) => console.log(error))



// TASK THREE
// OUPUT NYA : ["APPLE", "BANANA", "ORANGE"];
// const fruits = ["Apple", "Banana", "Orange"];
// let formartArray = [];
// function delayUppercase(text) {
//     return new Promise((resolver) => {
//         setTimeout(() => {
//             for (const formartText in text) {
//                 let hasil = text[formartText].toUpperCase();
//                 console.log(hasil)
//                 formartArray.push(hasil)
//             }
//             resolver(formartArray)
//         }, 2000)
//     })
// }

// delayUppercase(fruits).then((success) => console.log(success)).catch((error) => console.log(error))


// TASK FOUR
// OUTPUT NYA : [6, 12, 18]
const numbers = [1, 2, 3, 4, 5, 6];
const formarArray = [];

function EventNumberOnly(num) {
    return new Promise((resolver) => {
        setTimeout(() => {
            for (const numsValue of num) {
                if (numsValue % 2 === 0) {
                    const perkalian = numsValue * 3;
                    formarArray.push(perkalian)
                }
            }
            resolver(formarArray)
        }, 1000)
    })
}

EventNumberOnly(numbers).then((resolver) => console.log(resolver))

// TASK FIVE
const products = [
    { name: "Laptop", price: 5000 },
    { name: "Mouse", price: 200 },
    { name: "Keyboard", price: 800 }
];

for (const key in products) {
    const price = products[key].price;
    if (price) {
        console.log(price % 20)
    }
}

const users = [
    { name: "Andi", age: 18 },
    { name: "Budi", age: 20 },
    { name: "Siti", age: 17 }
];

function delayUpdateAge(users) {
    return new Promise((resolver) => {
        setTimeout(() => {
            for (const key in users) {
                if (users[key].age >= 18) {
                    users[key].status = "Adult"
                } else {
                    users[key].status = "Not Adult"
                }
            }
            resolver(users)
        }, 1000)
    })
}

delayUpdateAge(users).then((success) => console.log(success)).catch((error) => console.log(error))
