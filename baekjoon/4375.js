function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    let n = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split("\n").map(BigInt);

    n.forEach(element => {
        if(element === 1n) {
            console.log(1);

            return;
        }  

        let count = 1n;
        let target = "1";
        while(true) {
            if((BigInt(target) % element) === 0n) {
                console.log(Number(count));

                return;
            }

            target += "1";
            count += 1n;
        }
    });

    return;
}

solve();