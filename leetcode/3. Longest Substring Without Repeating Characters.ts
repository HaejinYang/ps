/*
반복되지 않는다는 의미는..
abcabc가 있을때
abc 까지 반복안되는데 a가 나오니까 반복되는구나.
*/
function lengthOfLongestSubstring(s: string): number {
    if(s.length <= 1) {
        return s.length;
    }

    const set: Set<string> = new Set<string>();
    let maxCount = -1;
    for(let i = 0; i < s.length; i++) {
        let count = 0;
        for(let j = i; j < s.length; j++) {
            if(set.has(s[j])) {
                set.clear();

                break;
            } else {
                set.add(s[j]);
                ++count;
                if(count > maxCount) {
                    maxCount = count;
                }
            }
        }
    }

    return maxCount;
};