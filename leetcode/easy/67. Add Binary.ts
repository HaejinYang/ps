function addBinary(a: string, b: string): string {
    let aIndex: number = a.length - 1;
    let bIndex: number = b.length - 1;
    let result: string = '';
    let carry:number = 0;
    let sum:number = 0;
    let current:number = 0;
    while(true) {
        if(aIndex >= 0 && bIndex >= 0) {
            current = Number(a[aIndex]) + Number(b[bIndex]) + carry;
        } else if(aIndex >= 0) {
            current = Number(a[aIndex]) + carry;
        } else if(bIndex >= 0) {
            current = Number(b[bIndex]) + carry;
        } else {
            break;
        }

        carry = Math.floor(current / 2);
        sum = current % 2;

        result += String(sum);

        aIndex--;
        bIndex--;
    }

    if(carry > 0) {
        result += String(1);
    }

    return [...result].reverse().join("");
};