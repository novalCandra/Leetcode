// const add5 = x => x + 5;
// const double = x => x * 2;

// const result = double(add5(0))
// console.log(result)


// EXAMOLE FUNCTION COMPOSE
// const compose = (...fn) => (arg) => {
//     return fn.reduceRight((acc, fn) => fn(acc), arg)
// }
// const trim = (str) => str.trim();
// const upperCase = (str) => str.toLowerCase();
// const exclaim = (str) => `${str}`;

// // CREATE the compose pipeline (read right-to-left)
// const format = compose(exclaim, upperCase, trim);

// const result = format("   Hello Savira  ");
// console.log(result)


// VALUE ANGKA
// const valueSatuan = (number) => number + 1;
// const valuePuluhan = (number) => number + 10;
// const valueRatusan = (number) => number + 100;

// const formatValue = compose(valueSatuan, valuePuluhan, valueRatusan);
// const total = formatValue(5)
// console.log(total) /// 116 



// FUNCTION COMPOSITTION
var compose = function (functions) {
    return function (x) {
        // // Function untuk simpan data arrays
        // let emptyArray = [];
        // function SaveArraysData(i) {
        //     emptyArray.push(i)
        //     return i
        // }
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            console.log("Before:", result);
            result = functions[i](result)
            console.log("After:", result);
        }
        // for (let i = 0; i < functions.length; i++) {
        //     console.log("Before:", result);
        //     result = functions[i](SaveArraysData(result))
        //     console.log("After:", result);
        // }
        // return result
    }
}


const fn = compose([x => x + 1, x => 2 * x])
fn(4)

