function solution(s) {
    let xCount = 0;
    let otherCount = 0;
    let isFirst = true;
    let xCh = '';
    let result = 0;
    for(let i = 0; i < s.length; i++) {
        if(isFirst) {
            xCh = s[i];
            ++xCount;
            isFirst = false;
        } else {
            if(s[i] === xCh) {
                ++xCount;
            } else {
                ++otherCount;
            }

            if(xCount === otherCount) {
                ++result;
                isFirst = true;
            }
        }
    }

    if(isFirst === false) {
        ++result;
    }

    return result;
}