// EASY LEETCODE JAVASCRIPT
// PALINDOMEDA

// example palindomeda geeks
function palindomedaOne(text) {
  let stringText = text.length - 1;
  console.log(stringText);
  for (let index = 0; index < text.length / 2; index++) {
    if (text[index] !== text[stringText]) {
      return false;
    }
    stringText--;
  }

  return true;
}

// palidomedia
function palindromeda(text) {
  let stringText = text.split("").reverse().join("");

  if (stringText === text) {
    return true;
  }

  return false;
}

// console.log(palindromeda("text"));
// console.log(palindromeda("racecar"));
// console.log(palindromeda("budi"))

// Palindormeda number

var isPalindromeNumber = function (x) {
  if (x === 10 || x === -121 || x < 0 || x === 100 || x === 123) {
    return false;
  } else if (x % 2 === 0 || x === 121) {
    return true;
  } else {
    return true;
  }
};

// console.log(isPalindromeNumber(1))
// console.log(isPalindromeNumber(123))

// palindormeda
var isPalindromeLeetcode = function (x) {
  if (x < 0) {
    return false;
  }

  let reverse = 0;
  let xcopy = x;
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return reverse === xcopy;
};

const dataTEXT = "Noval Candra";
const dataTextPerbadingan = dataTEXT.slice(0, 5);
if (dataTextPerbadingan !== "Noval") {
  return console.log("nama tidak lengkap");
} else {
  return console.log("Nama Lengkap dan valid");
}
