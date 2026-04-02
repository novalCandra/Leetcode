var createCounter = function (n) {
  return function () {
    return n++;
  };
};

// memanggil sebuah function
const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
