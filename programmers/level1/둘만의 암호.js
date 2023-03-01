function solution(s, skip, index) {
    const alphabet = CreateAlphabet();
    const skipSet = new Set(skip);
    let result = "";
    let i = 0;

    while(i < s.length) {
        let start = s[i].charCodeAt(0) - "a".charCodeAt(0);
        let count = 0;
        while(true) {
            if(skipSet.has(alphabet[start])) {
                start = (start + 1) % 26;
            } else {
                ++count;
                start = (start + 1) % 26;

                if(count === index) {
                    if(!skipSet.has(alphabet[start])){
                        result += alphabet[start];
                    } else {
                        while(true) {
                            start = (start + 1) % 26;
                            if(!skipSet.has(alphabet[start])){
                                result += alphabet[start];

                                break;
                            }
                        }
                    }

                    break;
                }
            }
        }

        ++i;
    }

    return result;
}


function CreateAlphabet() {
    return (new Array(26)).fill(0).map((_, index) => String.fromCharCode(index + "a".charCodeAt(0)));
}

