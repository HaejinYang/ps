// case : ({}) true
function isValid(s: string): boolean {
    const BRACKET_MATCH: Map<string, string> = new Map<string, string>();
    BRACKET_MATCH.set('(', ')');
    BRACKET_MATCH.set('{', '}');
    BRACKET_MATCH.set('[', ']');
    let bracketStore: string[] = [];

    for(let i:number = 0; i < s.length; i++) {
        if(bracketStore.length === 0) {
            bracketStore.push(s[i]);
        } else {
            const top: string = bracketStore[bracketStore.length - 1];
            const topMatch: string | undefined = BRACKET_MATCH.get(top);
            if(topMatch !== undefined) {
                if(topMatch === s[i]) {
                    bracketStore.pop();
                } else {
                    bracketStore.push(s[i]);    
                }
            } else {
                bracketStore.push(s[i]);
            }
        }
    }

    return (bracketStore.length === 0);
};