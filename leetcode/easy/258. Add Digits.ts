function addDigits(num: number): number {
    let temp: number = 0;

    while(num >= 10) {
        while(num !== 0) {
            const q: number = Math.floor(num / 10);
            const r: number = num % 10;

            temp += r;
            num = q;
        }

        num = temp;
        temp = 0;
    }

    return num;
};