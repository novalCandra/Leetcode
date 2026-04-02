var createCounter = function (i) {
  return function () {
    for (let b = i; b <= i; b++) {
      console.log(i, i + 1, i + 2);
    }
  };
};

// memanggil sebuah function
const counter = createCounter(10);
counter();
