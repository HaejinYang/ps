function numDecodings(s: string): number {
    /*
     1 글자 혹은 2글자로 해석될 수 있다.
     1 글자로 해석된 후에 나머지 글자도 다시 1글자 혹은 2글자로 해석될 수 있다.
    */
    let memo: number[][] = Array(s.length).fill(0).map(val => Array(2).fill(-1));
    const solveRecursively = (str: string, index: number, lettersCount: number): number => {
        if(index + lettersCount === s.length) {
            if(IsValid(str.substring(index, index + lettersCount))) {
                return 1;
            }

            return 0;
        } else if(index + lettersCount > s.length) {
            return 0;
        }

        if(!IsValid(str.substring(index, index + lettersCount))) {
            return 0;
        }

        const countOne = memo[index + lettersCount][0] === -1 ? solveRecursively(str, index + lettersCount, 1) : memo[index + lettersCount][0];
        memo[index + lettersCount][0] = countOne;
        const countTwo = memo[index + lettersCount][1] === -1 ? solveRecursively(str, index + lettersCount, 2) : memo[index + lettersCount][1];
        memo[index + lettersCount][1] = countTwo;

        return countOne + countTwo;
    }

    return solveRecursively(s, 0, 1) + solveRecursively(s, 0, 2);
};


function IsValid(s: string): boolean {
    if(s[0] === "0") {
        return false;
    }

    const num = Number.parseInt(s);

    return num >= 1 && num <= 26;
}