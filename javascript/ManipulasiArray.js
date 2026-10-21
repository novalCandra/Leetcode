function solveProblem(score) {
    // validasi pertama
    if (score.length < 3 && score === 0) return "";
    // console.log(score)

    let N = Number.parseInt(score[0])
    let dataHuda = 0;
    let dataForga = 0;

    // perbandingan perulangan
    const perbandinganPertama = score[1]
    const perbadinganKedua = score[2]

    // perulanga increments
    for (let i = 0; i < N; i++) {
        if (perbandinganPertama > perbadinganKedua) {
            dataHuda++
        } else {
            dataForga++
        }
    }

    console.log(`Score perrbadingan dari  Huda dan Forga : \nhuda ${dataHuda} - ${dataForga} Forga`)
}

solveProblem([1, [0, 20000], [0, 10000]]);
