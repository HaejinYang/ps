function divide(dividend: number, divisor: number): number {
    const sign: number = (dividend > 0 === divisor > 0)? 1 : -1;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let quotient: number = 0;
    if(divisor === 1) {
        return CorrectAnswer(dividend*sign);
    } else {
        while(dividend >= divisor) {
            dividend -= divisor;
            quotient++;
        }
    }

    return CorrectAnswer(quotient*sign);
};

function CorrectAnswer(ans: number) {
    if(ans < -1 * 2 ** 31) {
        return 2 ** 31;
    }

    if(ans > (2 ** 31) -1) {
        return (2 ** 31) - 1;
    }

    return ans;
}