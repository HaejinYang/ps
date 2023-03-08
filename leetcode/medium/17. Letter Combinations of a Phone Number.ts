function letterCombinations(digits: string): string[] {
    if(digits.length === 0) {
        return [];
    }

    let letters: string[] = []
    for(let i = 0; i < digits.length; i++) {
        letters.push(GetLetters(Number.parseInt(digits[i])));
    }

    const result: string[] = [];
    const dfs = (depth: number, index: number, ...comb: string[]): void => {
        if(depth === letters.length) {
            result.push(comb.join(""));

            return;
        }

        for(let i = 0; i < letters[depth].length; i++) {
            dfs(depth + 1, i, ...comb, letters[depth][i]);
        }
    }

    dfs(0, 0);

    return result;
};

function GetLetters(index: number): string {
    switch(index) {
        case 2:
            return "abc";
        case 3:
            return "def";
        case 4:
            return "ghi";
        case 5:
            return "jkl";
        case 6:
            return "mno";
        case 7:
            return "pqrs";
        case 8:
            return "tuv";
        case 9:
            return "wxyz";
        default:
            return "";
    }
}