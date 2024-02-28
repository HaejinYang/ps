function reverseBits(n: number): number {
    const nToBinary: string = n.toString(2);
    let binaryStr: string = "0".repeat(32 - nToBinary.length);
    binaryStr += nToBinary;
    const arr: string[] = [...binaryStr];

    return parseInt(arr.reverse().join(""), 2);
};