function longestCommonPrefix(strs: string[]): string {
    const minLength = strs.reduce((acc:number, val, index, arr) => val.length > acc ? val.length : acc, 0);
    let prefix: string = "";
    let isPrefix: boolean = true;

    for(let i:number = 0; i < minLength; i++) {
        prefix = strs[0].substring(0, i + 1);
        
        for(let j: number = 0; j < strs.length; j++) {
            if(!strs[j].startsWith(prefix)) {
                isPrefix = false;
            }
        }

        if(!isPrefix) {
            prefix = strs[0].substring(0, i);

            break;
        }
    }

    return prefix;
};