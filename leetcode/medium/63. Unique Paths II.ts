function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const rows = obstacleGrid.length;
    const cols = obstacleGrid[0].length;
    if(obstacleGrid[0][0] === 1) {
        return 0;
    }

    if(rows === 1 && cols === 1) {
        return 1;
    }

    let distance: number[][] = Array(rows).fill(0).map(val => Array(cols).fill(0));
    distance[0][0] = 1;
    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            if(row - 1 >= 0 && obstacleGrid[row][col] !== 1) {
                distance[row][col] += distance[row-1][col];
            }

            if(col - 1 >= 0 && obstacleGrid[row][col] !== 1) {
                distance[row][col] += distance[row][col-1];
            }
        }
    }

    return distance[rows-1][cols-1];
};