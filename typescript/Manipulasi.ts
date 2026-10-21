
interface TypeDataManipluasi {
    score : string | number[] 
}

function SolveProblem(score : TypeDataManipluasi) {
    // validasi  pertama
    if (score.score.length < 3 && score.score.length === 0) return "";
    // console.log(score)

    let N =  Number.parseInt(`${score.score[0]}`)
    let dataHuda = 0;
    let dataForga = 0;

    // perbandingan perulangan
    const perbandinganPertama = score.score[1]
    const perbadinganKedua = score.score[2]

    // perulanga increments
    for (let i = 0; i < N; i++) {
        if (perbandinganPertama > perbadinganKedua) {
            dataHuda++
        } else {
            dataForga++
        }
    }

    console.log(`Score perrbadingan dari  Huda dan Forga : \n huda ${dataHuda}-${dataForga} Forga`)
}

