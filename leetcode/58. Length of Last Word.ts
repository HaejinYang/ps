function lengthOfLastWord(s: string): number {
    let notSpace: number = 0;
    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] !== ' ') {
            notSpace++;
        }

        if(notSpace > 0 && s[i] === ' ') {
            break;
        }
    } 

    return notSpace;
};