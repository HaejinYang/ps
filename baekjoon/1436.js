function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const number = Number(fs.readFileSync(path).toString().trim().replaceAll('\r\n', ''));

    /*
        무슨 규칙이 있는거지
        1 : 666
        2 : 1666
        6 : 5666
        7 : 6660
        8 : 6661
        16 : 6669
        17 : 7666
        18 : 8666
        19 : 9666

        20 : 10666
        21 : 11666
        25 : 15666
        26 : 16660
        35 : 16669
        36 : 17666
        38 : 18666
        39 : 19666

        40 : 20666

        666의 10의 1배수가 되면 10을 더하고 
        666의 10의 2제곱이 되면 66600 100을 더하고

        예를 들어 0~1만까지는 666이 들어가는 수가 0666과, 1666부터 9666까지 10개에 6660 ~6669 10개에서 1개뺌 9 총 19개
        1만에서 2만까지는 또   20개네
    */

    let count = 0;
    let current = 666;
    while(true) {
        if(/[6]{3,}/.test(current.toString())) {
            count++;
        }

        if(count === number) {
            break;
        }

        current++;
    }

    console.log(current.toString());
}

solve();