// PUNYA AKU
var addTwoNumbers = function (l1, l2) {
    let total = 0;
    let carry = 0;
    const dataArray = [];
    for (let i = 0; i < l1.length && i < l2.length; i++) {
        let total = l1[i] + l2[i] + carry;
        carry = Math.floor(total / 10)
        const pembagian = total % 10;
        dataArray.push(pembagian)
    }
    return dataArray
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))









// PUNYA LIITCODE
var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let curr = dummyHead;
    let carry = 0;
    while (l1 !== null || l2 !== null || carry !== 0) {
        let x = l1 !== null ? l1.val : 0;
        let y = l2 !== null ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    return dummyHead.next;
};