function solution(keymap, targets) {
    const map = new Map();
    let answer = [];
    keymap.forEach((keys) => {
        for(let i = 0; i < keys.length; i++) {
            if(!map.has(keys[i])) {
                map.set(keys[i], i + 1);
            } else {
                const prev = map.get(keys[i]);
                const current = i + 1;
                if(current < prev) {
                    map.set(keys[i], current);
                }
            }
        }
    })

    targets.forEach((target) => {
        let sum = 0;
        for(let i = 0; i < target.length; i++) {
            if(!map.get(target[i])) {
                answer.push(-1);

                return;
            } else {
                sum += map.get(target[i]);
            }
        }

        answer.push(sum);
    })

    return answer;
}