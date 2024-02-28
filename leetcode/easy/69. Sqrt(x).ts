function mySqrt(x: number): number {
    let result: number = 0;

    for(let i: number = 0; i <= x; i++) {
        const compare: number = i * i;
        if(compare === x) {
            result = i;

            break;
        } else if (compare > x) {
            result = i -1;

            break;
        }
    }

    return result;
};