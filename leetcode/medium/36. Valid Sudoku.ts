function isValidSudoku(board: string[][]): boolean {
    // row 한줄을 확인한다.
    // row 두줄을 확인한다.
    // ...
    // col 한줄을 확인한다.
    // col 두줄을 확인한다.
    // ..
    // subboard(3x3)을 확인한다
    // subboard(3x3)을 확인한다.
    // subboard의 좌표는 [0][0], [0][3], [0][6], [3][0]
    // 위 중에 하나라도 fail이면 fail....

    // check row
    let y = 0;
    let line: number[] = Array(9).fill(0);
    for(let y = 0; y < 9; y++) {
        ClearLine(line);
        for(let x = 0; x < 9; x++) {
            const cell = board[y][x];
            if(cell !== '.') {
                const numberCell = parseInt(cell) - 1;
                ++line[numberCell];

                if(line[numberCell] > 1) {
                    return false;
                }
            }
        }
    }

    // check col
    for(let x = 0; x < 9; x++) {
        ClearLine(line);

        for(let y = 0; y < 9; y++) {
            const cell = board[y][x];
            if(cell !== '.') {
                const numberCell = parseInt(cell) - 1;
                ++line[numberCell];

                if(line[numberCell] > 1) {
                    return false;
                }
            }
        }
    }

    for(let j = 0; j < 3; j++) {
        for(let i = 0; i < 3; i++) {
            // check sub
            ClearLine(line);

            for(let x = 0; x < 3; x++) {
                for(let y = 0; y < 3; y++) {
                    const cell = board[y + 3*j][x + 3*i];
                    if(cell !== '.') {
                        const numberCell = parseInt(cell) - 1;

                        ++line[numberCell];

                        if(line[numberCell] > 1) {
                            return false;
                        }
                    }
                }
            }
        }
    }

    return true;
};

function ClearLine(line: number[]) {
    for(let i = 0; i < line.length; i++) {
        line[i] = 0;
    }
}