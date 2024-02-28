function convertToTitle(columnNumber: number): string {
    let result: string = "";
    while(true) {
        columnNumber -= 1;
        const qutoient: number = Math.floor(columnNumber / 26);
        const remainder: number = columnNumber % 26;

        result += String.fromCharCode(65 + remainder);
        columnNumber = qutoient;

        if(columnNumber < 1) {
            break;
        }
    }

    return [...result].reverse().join("");
};