function isPowerOfTwo(n: number): boolean {
    if(n <= 0) {
        return false;
    }

    if(n === 1) {
        return true;
    }

    while(n > 1) {
        const remain = n % 2;
        if(remain === 1) {
            return false;
        }

        n = Math.trunc((n / 2));
    }

    return true;
};