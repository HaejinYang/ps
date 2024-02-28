function isHappy(n: number): boolean {
    let arr: number[] = [];
    let set: Set<number> = new Set<number>();

    while(true) {
        const strN: string = n.toString();
        for(let i = 0; i < strN.length; i++) {
            arr.push(parseInt(strN[i]));
        }

        n = arr.reduce((acc, val) => {
            return acc + val ** 2;
        }, 0);

        if(set.has(n)) {
            return false;
        }

        if(n === 1) {
            return true;
        }

        set.add(n);
        arr = [];
    }
};