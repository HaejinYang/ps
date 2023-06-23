function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const testCase = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split('\n');

    const hasVowels = s => {
        return /[aeiou]/.test(s);
    }
    const continuousSameCharacter = s => {
        let prev = "";
        for(const ch of s) {
            if(prev == ch && prev != 'o' && prev != 'e') {
                return false;
            }

            prev = ch;
        }

        return true;
    }

    const continuousVowel= s => {
        return !(/[aeiou]{3,}/.test(s));
    }

    const continuousConsonant= s => {
        return !(/[^aeiou]{3,}/.test(s));
    }

    testCase.forEach(s => {
        if(s === 'end') {
            return;
        }

        const result = (hasVowels(s) && continuousSameCharacter(s) && continuousVowel(s) && continuousConsonant(s));

        if(result) {
            console.log(`<${s}> is acceptable.`);
        } else {
            console.log(`<${s}> is not acceptable.`);
        }
    });
}

solve();