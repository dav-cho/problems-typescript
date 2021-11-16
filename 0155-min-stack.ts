/**********
** 155. Min Stack (easy)
****************************************/

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


/**
* 
**/
class MinStack {
    stack: number[];
    mins: number[];

    constructor() {
        this.stack = [];
        this.mins = [];
    }

    push(val: number): void {
        if (!this.mins.length || val <= this.mins[this.mins.length - 1]) {
            this.mins.push(val);
        }
        
        this.stack.push(val);
    }

    pop(): void {
        const val = this.stack.pop();

        if (val == this.mins[this.mins.length - 1]) {
            this.mins.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.mins[this.mins.length - 1];
    }
}


