// Longest Common Prefix Javascript

var longestCommonPrefix = function (strs) {
  // validasi untuk check apakah data kosong atau tida
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};

const dataAnimalOne = ["flower", "flow", "flight"];
const dataAnimalTwo = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(dataAnimalOne));
