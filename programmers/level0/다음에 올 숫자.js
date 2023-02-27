function solution(common) {
    const lastIndex = common.length - 1;
    const secondToLastIndex = lastIndex - 1;
    const thirdToLastIndex = lastIndex - 2;

    if((common[lastIndex] - common[secondToLastIndex]) === (common[secondToLastIndex] - common[thirdToLastIndex])) {
        //등차
        const add = common[lastIndex] - common[secondToLastIndex];
        return common[lastIndex] + add;
    } else {
        //등비
        const multiply = common[lastIndex] / common[secondToLastIndex];
        return common[lastIndex] * multiply;
    }
}