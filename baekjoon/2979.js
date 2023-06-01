function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const input = fs.readFileSync(path).toString().trim().replaceAll('\r','').split("\n");
    const cost = input[0].split(" ").map(Number);
    
    let trucks = [];
    for(let i = 1; i < input.length; i++) {
        trucks.push(input[i].split(" ").map(Number));
    }    
    
    let board = new Array(200).fill(0);
    for(let i = 0; i < 3; i++) {
        for(let j = trucks[i][0]; j < trucks[i][1]; j++) {
            board[j]++;
        }
    }

    let result = 0;
    for(let i = 0; i < board.length - 1; i++) {
        if(board[i] > 0) {
            const price = (board[i] === 1 ? cost[0] : board[i] === 2 ? cost[1] : cost[2]) * board[i];
            result += price;
        } 
    }

    console.log(result);
}

solve();