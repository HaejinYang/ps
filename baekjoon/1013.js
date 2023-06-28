function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    let [T, ...input] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split('\n');
    T = Number(T);

    // (100+1+ | 01)+
    // 1001 1001 1001 처럼 첫 번째 패턴이 반복되는경우 흠...

    // 첫 번째 패턴인데 뒤에 0이 있다면 해당 인덱스를 이용하여 첫 번째 패턴을 다시해봐야겟는데

    let prevOneCount = 0;
    const judgeFirstPattern = (text, start) => {
        if(text.length - start < 4) {
            return -1;
        }

        if(!(text[start] === '1' && text[start+1] === '0' && text[start+2] === '0')) {
            return -1;
        }

        let isStartedWithOne = false;
        let index = 0;
        for(index = start+3; index < text.length; index++) {
            if(text[index] === '0') {
                if(isStartedWithOne) {
                    return index;
                } else {
                    continue;
                }
            }     

            if(text[index] === '1') {
                prevOneCount++;
                isStartedWithOne = true;
            }
        }

        return index;
    }

    const judgeSecondPattern = (text, start) => {
        if(text.length - start < 2) {
            return -1;
        }

        if(!(text[start] === '0' && text[start+1] === '1')) {
            return -1;
        }

        prevOneCount = 0;

        return start+2;
    }

    let answer = [];
    input.forEach(text => {
        if(/^(01|100+1+)+$/.test(text)) {
            answer.push("YES");
        } else {
            answer.push("NO");
        }
    });

    console.log(answer.join("\n"));
}

solve();