function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const input = fs.readFileSync(path).toString().replaceAll('\r', '').replaceAll('\n', '').split("");
    const result = input.map(ch => {
        if( /[a-zA-Z]/.test(ch) === false) {
            return ch;
        } else if(ch.toLowerCase() === ch) {
            const temp = ch.charCodeAt(0) + 13;
            const result = temp > 122 ? ((temp - 97) % 26) + 97 : temp;
            return String.fromCharCode(result);
        } else {
            const temp = ch.charCodeAt(0) + 13;
            const result = temp > 90 ? ((temp - 65) % 26) + 65 : temp;
            return String.fromCharCode(result);
        }
    });

    console.log(result.join(""));

    return;
}

solve();