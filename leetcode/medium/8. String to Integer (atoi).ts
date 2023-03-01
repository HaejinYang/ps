function myAtoi(s: string): number {
    const trimedStr: string = s.trimStart();
    const words = trimedStr.split(" ");
    let result: number = Number.parseInt(words[0]);
    if(Number.isNaN(result)) {
        return 0;
    } else {
        if(result < (-1)*(2 ** 31))
        {
            result = (-1)*(2 ** 31);
        }

        if(result >= 2 ** 31) {
            result = 2 ** 31 - 1;
        }

        return result;
    }
};