function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [M, ...testCases] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split('\n');

    let onlyNumbers = [];
    const zeroAscii = "0".charCodeAt(0);
    const nineAscii = "9".charCodeAt(0);

    const isNumber = ch => {
        const code = ch.charCodeAt(0);

        return code >= zeroAscii && code <= nineAscii;
    }

    testCases.forEach(e => {
        let start = -1;
        for(let i = 0; i < e.length; i++) {
            if(isNumber(e[i])) {
                if(start === -1) {
                    start = i;
                }

                if(i === e.length -1) {
                    onlyNumbers.push(BigInt(e.slice(start, i+1)));
                }
            } else {
                if(start !== -1) {
                    onlyNumbers.push(BigInt(e.slice(start, i)));
                    start = -1;
                }
            }
        }
    });

    onlyNumbers.sort((a, b) => {
        if(a > b) {
            return 1;
          } else if (a < b){
            return -1;
          } else {
            return 0;
          }
    }).forEach(e => {
        console.log(e.toString());
    });
}

solve();