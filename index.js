var createHelloWorld = function () {
  return function (...args) {
    const value = args[0] + args[1];
    return value;
  };
};

const f = createHelloWorld();
console.log(f("Hello" + " " + "World"));
