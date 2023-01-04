function generate(numRows: number): number[][] {
    if(numRows === 1) {
        return [[1]];
    }

    if(numRows === 2) {
        return [[1], [1, 1]];
    }

    const baseArr: number[][] = [[1], [1, 1]];
    let currentRow: number = 3;

    while(currentRow <= numRows) {
        let arr: number[] = [1, 1];
        let start: number = 1;
        let end: number = currentRow - 2;

        for(let i: number = start; i <= end; i++) {
            arr.splice(i, 0, baseArr[currentRow - 2][i - 1] + baseArr[currentRow - 2][i]);
        }

        baseArr.push(arr);
        currentRow++;
    }

    return baseArr;
};