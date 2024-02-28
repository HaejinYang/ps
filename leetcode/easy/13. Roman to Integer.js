const eRomans = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romans = [...s];
    let prev = null;
    return romans.reduce((acc, val, index, arr) => {
        let addNumber = eRomans[val];
        if(prev === 'I') {
            if(val === 'V' || val === 'X') {
                addNumber = eRomans[val] - 2;
            }
        } else if(prev === 'X') {
            if(val === 'L' || val === 'C') {
                addNumber = eRomans[val] - 20;
            }
        } else if(prev === 'C') {
            if(val === 'D' || val === 'M') {
                addNumber = eRomans[val] - 200;
            }
        }

        prev = val;

        return addNumber + acc;
    }, 0);
};