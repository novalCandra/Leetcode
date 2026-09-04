// var once = function (fn) {
//     let hasbeedCalled = false;
//     let result;
//     return function (...args) {
//         if(!hasbeedCalled){
//             hasbeedCalled = true;
//             result = fn.apply(this, args)
//             return result
//         }else{
//             return undefined
//         }
//     }
// }

// fn = (a, b, c) => (a + b + c)
// let onceFn = once(fn);
// onceFn(1, 2, 3)


// function apply for javascript
// const person1 = {name : "novel"}
// const person2 = {name : "dinata"}
// const person3 = {name : "candra"}

// function greet(gretting){
//     return gretting + " " + this.name
// }

// let mesaage = greet.apply(person1, ["HAI"]);
// console.log(mesaage)


// // fungsi limit sebuah angka limit angka
// let limit = function (fn, number) {
//     let hasbedCeller = 0;
//     let data;
//     return function (...args) {
//         if (hasbedCeller < number) {
//             hasbedCeller++;
//             data = fn.apply(this, args)
//             return data
//         } else {
//             return undefined
//         }

//     }
// };
// let fn = (a, b) => (a + b)
// const limitedFn = limit(fn, 2);
// console.log(limitedFn(1, 2));  // 3 (1st call)
// console.log(limitedFn(3, 4));  // 7 (2nd call)
// console.log(limitedFn(5, 6));  // undefined (3rd call, exceeded limit)
// console.log(limitedFn(7, 8));  // undefined (4th call, exceeded limit)

// Croted function

let limtedName = function(fn,){
    let menyapaName = false;
    let currentName;
    return function(...args){
        if(!menyapaName){
            menyapaName = true;
            currentName = fn.apply(this, args)
            return currentName
        }else{
            return undefined
        }
    }
}

let fn = (name) => `Hello My Name's ${name}`;
const limetedName = limtedName(fn);
limetedName("Novels");
limetedName("Saviras");
