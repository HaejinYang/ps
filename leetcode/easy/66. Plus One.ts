function plusOne(digits: number[]): number[] {
    let carry: number = Math.floor((digits[digits.length - 1] + 1) / 10);
    let current: number = (digits[digits.length - 1] + 1) % 10;
    let result: number[] = [];
    result.unshift(current);

    for(let i = digits.length - 2; i >= 0; i--) {
        if(carry > 0) {
            digits[i] = digits[i] + 1;
        }

        carry = Math.floor(digits[i] / 10);
        current = digits[i] % 10;
        result.unshift(current);
    }

    if(carry > 0) {
        result.unshift(1);
    }

    return result;
};