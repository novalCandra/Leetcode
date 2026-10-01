// var cancellable = function (fn, args, t) {
//   let timeout = setTimeout(() => {
//     fn(...args);
//   }, t);
//
//   return function () {
//     return clearInterval(timeout);
//   };
// };

// var cancellable = function (fn, args, t) {
//   let conditionTimer = false;
//   setTimeout(() => {
//     if (!conditionTimer) {
//       fn(...args);
//     }
//   }, t);
//
//   return () => {
//     conditionTimer = true;
//   };
// };
//

var cancellable = function (fn, args, t) {
  let TimerStart = setTimeout(function () {
    fn.apply(null, args);
  }, t);

  return function StopTimer() {
    clearInterval(TimerStart);
  };
};

const result = [];

const fn = (x) => x * 5;
const args = [2],
  t = 20,
  cancelTimeMs = 50;

const start = performance.now();
console.log(start);
console.log(args);
