function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const input = fs.readFileSync(path).toString().trim().replaceAll('\r', '').replaceAll('\n', '');

    // 팰린드롬 규칙....
    // 짝수인 문자의 갯수가 홀수인 문자보다 1개이상? 아 홀수가 1번 이하로 나와야 하네
    const counting = new Array(26).fill(0);
    for(const ch of input) {
        counting[ch.charCodeAt(0) - 65]++;
    }

    let odd = 0;
    let oddIndex = -1;
    counting.forEach((count, index) => {
        if(count & 0x01) {
            ++odd;
            oddIndex = index;
        }
    })

    if(odd > 1) {
        console.log("I'm Sorry Hansoo");

        return;
    }

    let result = [];
    
    /*
        오름차순으로 출력하려면, 아스키코드상으로 높은 값부터 출력을 해야한다.
        하지만, 만약 홀수가 하나라도 있다면, 홀수인 문자가 중앙에 와야 팰린드롬이 완성됨.
    */
    if(odd === 1) {
        result.push(String.fromCharCode(oddIndex+65));
        --counting[oddIndex];
    }
    
    for(let i = counting.length - 1; i >= 0; i--) {
        if(counting[i] <= 0) {
            continue;
        }

        for(let j = 0; j < counting[i]; j++) {
            if(j & 0x01) {
                result.push(String.fromCharCode(i+65));
            } else {
                result.unshift(String.fromCharCode(i+65));
            }
        }
    }

    console.log(result.join(""));    
}

solve();