function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) {
        return false;
    }

    const lhs = s.split("").sort((a, b) => (a.charCodeAt(0) - b.charCodeAt(0)));
    const rhs = t.split("").sort((a, b) => (a.charCodeAt(0) - b.charCodeAt(0)));

    let index = 0;
    while(index < lhs.length) {
        if(lhs[index] !== rhs[index]) {
            return false;
        }

        ++index;
    }

    return true;
};