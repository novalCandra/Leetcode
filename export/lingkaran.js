let n = 5;

for (let i = 1; i < n; i++) {
    let baris = ""

    for (let spasi = 0; spasi < i; spasi++) {
        baris += " "
    }
    for (let spasiTengah = 0; spasiTengah < 2 * n; spasiTengah++) {
        baris += "*"
    }
    for (let spasiTengah = 0; spasiTengah < 2 * (n - i - 1); spasiTengah++) {
        baris += " "
    }
    for (let spasiTengah = 0; spasiTengah < 2 * n; spasiTengah++) {
        baris += "*"
    }
    console.log(baris)
}