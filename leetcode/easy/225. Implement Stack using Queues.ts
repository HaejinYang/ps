class MyStack {
    private leftQ: number[];
    private rightQ: number[];
    constructor() {
        this.leftQ = [];
        this.rightQ = [];
    }

    push(x: number): void {
        if(this.leftQ.length !== 0) {
            this.leftQ.push(x);
        } else {
            this.rightQ.push(x);
        }
    }

    pop(): number {
        if(this.leftQ.length === 0) {
            while(this.rightQ.length !== 1) {
                this.leftQ.push(this.rightQ.shift());
            }

            return this.rightQ.shift();
        } else {
            while(this.leftQ.length !== 1) {
                this.rightQ.push(this.leftQ.shift());
            }

            return this.leftQ.shift();
        }
    }

    top(): number {
        if(this.leftQ.length === 0) {
            while(this.rightQ.length !== 1) {
                this.leftQ.push(this.rightQ.shift());
            }

            const data = this.rightQ.shift();
            this.leftQ.push(data);

            return data;
        } else {
            while(this.leftQ.length !== 1) {
                this.rightQ.push(this.leftQ.shift());
            }

            const data = this.leftQ.shift();
            this.rightQ.push(data);

            return data;
        }
    }

    empty(): boolean {
        return Math.max(this.leftQ.length, this.rightQ.length) === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */