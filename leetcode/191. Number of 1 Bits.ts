function hammingWeight(n: number): number {
    return n.toString(2).split("").filter((val)=> val === '1').length;
};