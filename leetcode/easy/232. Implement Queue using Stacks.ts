/*
    스택 2개를 이용하여 큐 구현하기
*/
class MyQueue {
    private leftStack: number[];
    private rightStack: number[];

    constructor() {
        this.leftStack = [];
        this.rightStack = [];
    }

    push(x: number): void {
        this.leftStack.push(x);
    }

    pop(): number {
        if(this.leftStack.length > 0) {
            while(this.leftStack.length > 1) {
                this.rightStack.push(this.leftStack.pop());
            }

            const data: number = this.leftStack.pop();

            while(this.rightStack.length > 0 ) {
                this.leftStack.push(this.rightStack.pop());
            }

            return data;
        }

        return -1;
    }

    peek(): number {
        if(this.leftStack.length > 0) {
            while(this.leftStack.length > 1) {
                this.rightStack.push(this.leftStack.pop());
            }

            const data: number = this.leftStack.pop();
            this.leftStack.push(data);

            while(this.rightStack.length > 0 ) {
                this.leftStack.push(this.rightStack.pop());
            }

            return data;
        }

        return -1;
    }

    empty(): boolean {
        return this.leftStack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */