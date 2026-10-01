// let isEmpty = function (obj) {
//     return Object.keys(obj).length === 0;
// };
let isEmptyMe = function (obj) {
    const data = JSON.parse(obj);
    if (JSON.stringify(data) === "{}")
        console.log(true)
    else
        console.log(false)
};
isEmptyMe('{"x": 5, "y": 42}');
isEmptyMe('{}');
isEmptyMe('[null, false, 0]')

function test(obj) {
    console.log(typeof obj)
}
test("hello")
test(123)
test({})
test([])