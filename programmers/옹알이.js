// 내풀이
function solution(babbling) {
    let answer = 0;
    let i = 0;
    const fourWords = ["aya", "ye", "woo", "ma"];
    while(i < babbling.length) {
        let j = 0;
        let wordLength = 0;
        while(j < fourWords.length) {
            if(babbling[i].includes(fourWords[j])) {
                if(babbling[i].length === fourWords[j].length + wordLength) {
                    ++answer;

                    break;
                } else {
                    wordLength += fourWords[j].length;
                }
            }

            ++j;
        }

        ++i;
    }

    return answer;
}

// 프로그래머스 추천 풀이
function solution(babbling) {
    var answer = 0;
    const regex = /^(aya|ye|woo|ma)+$/;

    babbling.forEach(word => {
        if (regex.test(word)) answer++;
    })

    return answer;
}