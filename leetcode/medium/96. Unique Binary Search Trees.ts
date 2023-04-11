// 첫 번째 접근 방법
function numTrees(n: number): number {
    /*
        1. 어떻게 모든 경우를 구할 것인가
        2. 모든 경우에서 중복된 것을 어떻게 구할 것인가?


        => 모든 경우를 구하더라도, 중복 체크를 하려면, 서브 트리, 서브 트리의 서브 트리... 너무 복잡해짐
    */


};

// 배열 2개의 트리가 주어졌을때, 0(부모) 1(좌) 2(우) 노드를 이용하여 3개로 이루어진 패밀리가 같은지 비교
function IsSameFamily(arr1: number[], arr2: number[], baseIndex: number): boolean {
    const left1 = arr1[2*baseIndex + 1];
    const right1 = arr1[2*baseIndex + 2];
    const left2 = arr2[2*baseIndex + 1];
    const right2 = arr2[2*baseIndex + 2];

    if(left1 === left2 && right1 === right2) {
        return true;
    }

    if(left1 === right2 && right1 === left2) {
        return true;
    }

    return false;
}

// 두 번째 접근 방법 n이 1부터 커질 수록 어떤 규칙이 있나 살펴봄
// 못찾음... 힌트 봤음... ㅜㅜ
function numTrees(n: number): number {
    /*
        1           = 1

        1 2         = 2

        1
            2

        2
    1

        1 2 3       = 5
        BST[0]  =   1
        BST[1]  =   1
        BST[2]  =   2

        BST[3]  =   BST[0]*BST[2]
                    BST[1]*BST[1]
                    BST[2]*BST[0]
                =
    */

    const calculateUniqueBST = (nodes: number) => {
        if(nodes === 0) {
            return 1;
        }

        if(nodes === 1) {
            return 1;
        }

        if(nodes === 2) {
            return 2;
        }

        let sum = 0;
        for(let i = 0; i < nodes; i++) {
            sum += calculateUniqueBST(i) * calculateUniqueBST(nodes-i-1);
        }

        return sum;
    }

    return calculateUniqueBST(n);
};

// 세 번째 개선... 두 번재 방법은 논리적으로 맞지만 너무 느리다. 하위 6% 런타임...
// 결과를 재사용하는 메모이제이션을 활용 속도 100% ... 처음이야
function numTrees(n: number): number {
    /*
        1           = 1

        1 2         = 2

        1
            2

        2
    1

        1 2 3       = 5
        BST[0]  =   1
        BST[1]  =   1
        BST[2]  =   2

        BST[3]  =   BST[0]*BST[2]
                    BST[1]*BST[1]
                    BST[2]*BST[0]
                =
    */

    let memo = Array<number>(n).fill(-1);
    memo[0] = 1;
    memo[1] = 1;
    memo[2] = 2;
    const calculateUniqueBST = (nodes: number) => {
        let sum = 0;
        for(let i = 0; i < nodes; i++) {
            const left = memo[i] === -1 ? calculateUniqueBST(i) : memo[i];
            memo[i] = left;
            const right = memo[nodes-i-1] === -1 ? calculateUniqueBST(nodes-i-1) : memo[nodes-i-1];
            memo[nodes-i-1] = right;
            sum += left * right;
        }

        return sum;
    }

    return calculateUniqueBST(n);
};