//  Longest Substring Without Repeating Characters
const lengthOfLongestSubstring = function (s) {
    let dataSubString = ""
    let valueNumber = 0;
    for (const dataArray of s) {
        while (dataSubString.includes(dataArray)) {
            dataSubString = dataSubString.substring(1)
        }
        dataSubString += dataArray
        valueNumber = Math.max(valueNumber, dataSubString.length)
    }
    return valueNumber
};

console.log(lengthOfLongestSubstring("ababa"))
console.log(lengthOfLongestSubstring("bbbb"))
console.log(lengthOfLongestSubstring("abcde"))