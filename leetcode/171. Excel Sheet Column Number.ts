function titleToNumber(columnTitle: string): number {
    let length: number = columnTitle.length;
    let result: number = 0;
    let multiply: number = 0;
    while(length > 0) {
        result += (26**multiply)*(columnTitle.charCodeAt(length - 1) - 64);

        --length;
        ++multiply;
    }

    return result;
};