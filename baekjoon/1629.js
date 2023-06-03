function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    let [A, B, C] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').replaceAll('\n', '').split(" ").map(Number);

    /*
        3, 9, 27, 81, 243

        3  4  2   1  3
        ... 나머지를 다음 수로 이용하면 똑같은 값이 나오네.
    */

    // 시간 초과
    // let count = 0;
    // let result = 1;
    // while(count < B) {
    //     result *= A;
    //     result %= C;

    //     ++count;
    // }

    // console.log(result);

    /*
        3^6 = 3^3*3^3
        3^3 = 3^2*3^1
        3^2 = 3*3;
    */

    A = BigInt(A);
    B = BigInt(B);
    C = BigInt(C);

    console.log(Number(Exp(A, B, C)));


    return;
}

function Exp(A, B, C) {
    if (B === 1n) {
		return A % C;
	}

	let result = Exp(A, B / 2n, C);
	result = (result * result) % C;
	if (B % 2n == 1n)
	{
		result = (result * A) % C;
	}
	
	return result;
}

solve();