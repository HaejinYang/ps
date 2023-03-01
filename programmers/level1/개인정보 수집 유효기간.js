function solution(today, terms, privacies) {
    const result = [];
    const map = new Map();
    terms.forEach((val) => {
        const [type, month] = val.split(" ");
        map.set(type, Number.parseInt(month));
    });

    privacies.forEach((val, index) => {
        const [date, type] = val.split(" ");
        const month = map.get(type);
        if(!IsEffective(today, month, date)) {
            result.push(index + 1);
        }
    })

    return result;
}

function IsEffective(today, month, date) {
    const convertToday = GetDays(today);
    const convertDate = GetDays(date);
    const days = month * 28;

    return ((convertDate + days) > convertToday);
}

function GetDays(date) {
    return date.split(".").reduce((acc, cur, index, arr) => {
        if(index === 0) {
            return acc + Number.parseInt(cur, 10) * 28 * 12;
        } else if(index === 1) {
            return acc + Number.parseInt(cur, 10) * 28;
        } else if(index === 2) {
            return acc + Number.parseInt(cur, 10);
        } else {
            throw Error(`GetDays는 인덱스 0~2외의 값을 가질 수 없다!!!!${index}`);
        }
    }, 0);
}