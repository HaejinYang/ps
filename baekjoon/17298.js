function solve() {
    const path = process.platform === 'linux'? '/dev/stdin' : __dirname + "/test.txt";
    const fs = require('fs');
    let [N, input]= fs.readFileSync(path).toString().trim().replaceAll("\r", "").split("\n");
    N = Number(N);
    input = input.split(" ").map(Number);
    let answer = new Array(N).fill(-1);
    // 가장 간단한 풀이, 그러나 시간 초과 느낌이?
    // for(let i = 0; i < N; i++) {
    //     const target = input[i];
    //     let find = -1;
    //     for(let j = i + 1; j < N; j++) {
    //         if(input[j] > target) {
    //             find = input[j];
    //             break;
    //         }
    //     }

    //     answer.push(find);
    // }

    // // 이전에 찾은 NGE를 사용할 수 있나? 만약에 i+1이 i보다 같거나 작다면 그대로 쓸 수 있네.
    // // 찾으면서 재사용할 방법이 있나?
    // let i = 0;
    // while(i < N) {
    //     const target = input[i];
    //     let bFind = false;

    //     for(let j = i + 1; j < N; j++) {
    //         if(input[j] > target) {
    //             //answer[i] = input[j];
    //             // 여기서 할 수 있는 일들이 뭐임?
    //             // NGE(i)와 NGE(j)까지 숫자들을 확인했고, 이 중에서 j번째가 가장 크다는 것은 알겠네.
    //             // 그렇다면 NGE(i)부터 NGE(j-1)까지는 모두 NGE(i) 아냐?

    //             for(let k = i; k < j; k++) {
    //                 answer[k] = input[j];
    //             }

    //             // 그러면 j까지는 안봐도 되네
    //             // 그러면 다음에 볼 i는 j네
    //             bFind = true;
    //             i = j;

    //             break;
    //         }
    //     }

    //     if(!bFind) {
    //         ++i;
    //     }
    // }

    let stack = [{value: input[0], index: 0}];
    let index = 1;
    while(index < N) {
        const value = input[index];
        while(stack.length > 0 && stack[stack.length - 1].value < value) {
            let element = stack.pop();
            answer[element.index] = value;
        }

        stack.push({value, index});
        ++index;
    }

    while(stack.length > 0) {
        let element = stack.pop();
        answer[element.index] = -1;
    }

    console.log(answer.join(" "));
}

solve();