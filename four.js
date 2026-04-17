// LEETCODE
var expect = function (val) {
    return {
        toBe: function (valueData) {
            if (val === valueData) return true;
            else throw new Error("Not Equal")
        },
        notToBe: function (valueData) {
            if (val !== valueData) return true;
            else throw new Error("Equal");
        }
    }
}

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(10));
console.log(expect(5).notTobBe(null))


// TRAINING ONE
const bilangan = function (data) {
    return {
        ganjil: function (dataGanjil) {
            if (data % dataGanjil) return true;
            else throw new Error("error");

        },
        genap: function (dataGenap) {
            if (data % dataGenap == 0) return true;
            else throw new Error("error")
        }
    }
};
// fungsi untuk melihat ganjil and genap

// example output
console.log(bilangan(5).ganjil(2));
console.log(bilangan(4).genap(2));
