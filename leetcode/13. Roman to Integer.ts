enum eRomanNumber {
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000
};

function romanToInt(s: string): number {
    let arr: string[] = [...s];
    let prev: string = '';
    return arr.reduce((acc: number, value, index, arr)=>{
        let addNumber: number = eRomanNumber[value as keyof typeof eRomanNumber];

        if(prev === 'I') {
            if(value === 'V' || value === 'X') {
                addNumber = eRomanNumber[value] - 2;
            }
        } else if(prev === 'X') {
            if(value === 'L' || value === 'C') {
                addNumber = eRomanNumber[value] - 20;
            }
        } else if(prev === 'C') {
            if(value === 'D' || value === 'M') {
                addNumber = eRomanNumber[value] - 200;
            }
        } 
            
        prev = value;
        
        return acc + addNumber;
    }, 0);
};