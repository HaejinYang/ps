function isIsomorphic(s: string, t: string): boolean {
    const sMap: Map<string, string> = new Map<string, string>();
    const tMap: Map<string, string> = new Map<string, string>();

    let index: number = 0;
    while(index < s.length) {
        if(!sMap.has(s[index])) {
            sMap.set(s[index], t[index]);

            if(tMap.has(t[index])) {
                return false;
            }

            tMap.set(t[index], s[index]);
        } else {
            if(sMap.get(s[index]) !== t[index]) {
                return false;
            }

            if(!tMap.has(t[index])) {
                return false;
            }

            if(tMap.get(t[index]) !==s[index]) {
                return false;
            }
        }

        ++index;
    }

    return true;
};