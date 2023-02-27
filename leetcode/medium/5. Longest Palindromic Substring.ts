function longestPalindrome(s: string): string {
    if(s.length === 1) {
        return s;
    }

    let length = s.length;
    while(length >= 0) {
        const subs = GetAllSubString(s, length);

        for(let i = 0; i < subs.length; i++) {
            const ret = IsPalindrom(subs[i]);
            if(ret) {
                return subs[i];
            }
        }

        --length;
    }
};

function GetAllSubString(str: string, length: number): string[] {
    const sub: Array<string> = [];

    for(let i = 0; i < str.length; i++) {
        if(i + length <= str.length) {
            sub.push(str.substring(i, i + length));
        }
    }

    return sub;
}

function IsPalindrom(str: string): boolean {
    let i = 0;
    let j = str.length - 1;
    while(true) {
        if(i > j) {
            return true;
        }

        if(str[i] !== str[j]) {
            return false;
        }

        i++;
        j--;
    }
}