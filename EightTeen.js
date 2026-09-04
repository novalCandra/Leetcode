// MENAMPILKAN PANJANG PADA PARAMETER
var argumentsLength = function (...args) {
    return args.length
};

argumentsLength(1, 2, 3)
// argumentsLength(1)


var nilaiTerbesar = function (...ValueMAX) {
    console.log(Math.max(...ValueMAX))
    // console.log
}

nilaiTerbesar(1, 2, 3)