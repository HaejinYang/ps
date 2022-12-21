function isPalindrome(x: number): boolean {
    const numString = x.toString();
    let i: number = 0;
    let j: number = numString.length - 1;
    let result: boolean = true;
    for(; i < j; i++, j--) {
        if(numString[i] !== numString[j]) {
            result = false;

            break;
        }
    }

    return result;
};