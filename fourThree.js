// // ARRAY AND OBJECT

// // ARRAY
// let makanan = ['telur', 'nasi', 'sayuran'];
// makanan.push("buah")
// console.log(makanan)
// // HASIL
// // console.log(makanan)
// console.log(makanan.length)
// console.log(makanan.indexOf[0])

let value = [1, 2, 3, 4]

// for (let i = 0; i < value.length; i++) {
//     console.log(value[i])
// }

// for (const valueNumber of value) {
//     const hasil = valueNumber
//     console.log(hasil)
// }

// value.forEach((item) => (
//     console.log(`NILAI DARI PELUNGAN FOREACH : ${item}`)
// ))

// value?.map((item) => (
//     console.log(`Nilai Mapping : ${item}`)
// ))

// ARRAY OBJECY

// [
//     {
//         "id": 1,
//         "name": "novel"
//     },
//     {
//         "id": 2,
//         "name": "novel"
//     },
//     {
//         "id": 3,
//         "name": "novel"
//     },
//     {
//         "id": 4,
//         "name": "novel"
//     }
// ]



// OBJECT BIASA
// {}
// let user = {
//     "id": 1,
//     "name": "noval",
//     'age': "18"
// }
// console.log(user)
// console.log(`ID USER : ${user.id}`)
// console.log(`NAME USER : ${user.name ? user.name : "tidak memiliki name"}`)
// console.log(`AGE USER : ${user.age}`)

// // OBJECT METHOD OOP
// const userOOPS = {
//     name: "noval",
//     name2: "putri",
//     panggilDIA() {
//         console.log("HAI" + " " + this.name2)
//     }
// }
// userOOPS.panggilDIA()



// PIRAMIDA

// const n = 5; // Tinggi piramida yang diinginkan

// // 1. Loop luar untuk mengatur tinggi/baris piramida
// for (let i = 1; i <= n; i++) {
//     let baris = ""; // Wadah untuk menampung teks setiap baris

//     // 2. Loop dalam pertama untuk mencetak SPASI (Rumus: n - i)
//     for (let j = 1; j <= n - i; j++) {
//         baris += " ";
//     }

//     // 3. Loop dalam kedua untuk mencetak BINTANG (Rumus ganjil: 2 * i - 1)
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         baris += "*";
//     }

//     // 4. Cetak hasil gabungan spasi dan bintang untuk baris ini
//     console.log(baris);
// }