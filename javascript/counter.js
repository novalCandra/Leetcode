var createCounter = function (n) {
  return function () {
    return n++;
  };
};

let counte = createCounter(10);
counte();
counte();
counte();
