function uniquePaths(m: number, n: number): number {
    /*
        ㅁ ㅁ ㅁ
        ㅁ ㅁ ㅁ
        ㅁ ㅁ ㅁ

        answer : 4
    */
    let distance: number[][] = Array(m).fill(0).map(() => Array(n).fill(0));
    distance[0][0] = 1;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(i - 1 >= 0) {
                distance[i][j] += distance[i - 1][j];
            }

            if(j - 1 >= 0) {
                distance[i][j] += distance[i][j - 1];
            }
        }
    }

    return distance[m-1][n-1];
};