function isUgly(n: number): boolean {
    if(n === 0) {
        return false;
    }

    let candidate = n;

    while(true) {
        const r = candidate % 2;
        if(r !== 0) {
            break;
        }

        candidate = Math.round((candidate / 2));
    }

    while(true) {
        const r = candidate % 3;
        if(r !== 0) {
            break;
        }

        candidate = Math.round((candidate / 3));
    }

    while(true) {
        const r = candidate % 5;
        if(r !== 0) {
            break;
        }

        candidate = Math.round((candidate / 5));
    }

    return (candidate === 1);
};