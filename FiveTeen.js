// Chunks Arrays;
// var chunk = function (arr, size) {
//   const array = [];
//   for (let i = 0; i < arr.length; i += size) {
//     array.push(arr.slice(i, i + size));
//     console.log(array.push(i));
//     console.log(`Slice arrays ${array.push(arr.slice(i))}`);
//   }
//
//   return array;
// };

var chunk = function (arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
    arr.slice(index * size, index * size + size),
  );
};

let dataDumy = [1, 2, 3, 4, 5];
chunk(dataDumy, 2);

console.log(Array.from("savira"));
console.log(Array.from([1, 2, 3], (x) => x + x));
