function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [numberOfPlayers, ...players] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split('\n');
    
    let codeList = new Array(26).fill(0);
    players.forEach(lastname => codeList[lastname.charCodeAt(0)- 97]++);
    let result = codeList.reduce((sum, count, index) => count >= 5 ? sum + String.fromCharCode(index + 97) : sum, "");
    
    if(result === "") {
        console.log("PREDAJA");
    } else {
        console.log(result);
    }

    return;
}

solve();