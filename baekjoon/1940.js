function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [N, M, ...input] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split('\n');
    const testCase = input[0].split(" ").map(e=>{
        return {val: Number(e), isUsed: false};
    }).sort((a, b) => a.val - b.val);

    const target = Number(M);
    let result = 0;

    testCase.forEach((element, index) => {
        if(element.isUsed) {
            return;
        }

        let findIndex = binarySearch(target - element.val, testCase, index);
        if(findIndex >= 0 ){
            testCase[findIndex].isUsed = true;
            testCase[index].isUsed = true;
            ++result;
        }
    });

    console.log(result);

    return;
}

function binarySearch(target, arr, except) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {        
        mid = Math.floor((start + end) / 2);

        if(arr[mid].val === target) {
            if(mid === except) {
                return -1;
            }

            return mid;
        }

        if(arr[mid].val < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

solve();