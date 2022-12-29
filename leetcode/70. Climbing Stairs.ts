function climbStairs(n: number): number {
    // sn = sn-1 + sn-2;
    // s0 = 0, s1 = 1, s2 = 2
        const arr: number[] = new Array<number>(50);
        arr.fill(0);
    
        function Recursively(n: number): number {
            if(n <= 0) {
                return 0;
            }
    
            if(n === 1) {
                return 1;
            }
    
            if(n === 2) {
                return 2;
            }
    
            if(arr[n] === 0) {
                arr[n] = Recursively(n - 1) + Recursively(n - 2);
            }
    
            return arr[n];
        }
    
        return Recursively(n);
    };