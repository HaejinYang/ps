function getRow(rowIndex: number): number[] {
    // start index 0 은 무조건 1
    // rowIndex -1은 무조건 1
    // 그 사이는 자신의 (rowindex - 1) -1 + (rowindex - 1) 이런식의 공식
    const memo: number[][] = [];
    for(let i = 0; i <= rowIndex; i++) {
        memo.push([]);
        for(let j = 0; j <= i; j++) {
            memo[i][j] = 0;
        }
        memo[i][0] = 1;
        memo[i][i] = 1;
    }

    const calculateByRecursively = (rowIndex: number, index: number): number => {
        if(index === 0) {
            return 1;
        }

        if(index === rowIndex) {
            return 1;
        }

        if(memo[rowIndex][index] !== 0){
            return memo[rowIndex][index];
        } else {
            const result: number = calculateByRecursively(rowIndex - 1, index - 1) + calculateByRecursively(rowIndex - 1, index);
            memo[rowIndex][index] = result;

            return result;
        }
    }

    const arr: number[] = [];
    for(let i = 0; i <= rowIndex; i++) {
        arr.push(calculateByRecursively(rowIndex, i));
    }

    return arr;
};