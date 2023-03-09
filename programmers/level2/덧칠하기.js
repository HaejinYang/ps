function solution(n, m, section) {
    const { count } = section.reduce((acc, val, index, arr) => {
        if(val > acc.prevPaintMax) {
            acc.prevPaintMax = val + m - 1;
            acc.count++;
        }

        return acc;
    }, { count: 0, prevPaintMax: -1 });

    return count;
}