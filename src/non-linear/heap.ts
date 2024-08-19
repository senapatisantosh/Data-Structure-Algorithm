export class Heap<T> {
    public heap: T[];
    private compare: (current: T, next: T) => number;

    constructor(compareFn: (current: T, next: T) => number) {
        this.heap = [];
        this.compare = compareFn;
    }

    public GetHeapSize = (): number => this.heap.length;

    public GetHeap = (): T[] => this.heap;

    public Insert = (element: T) => {
        this.heap.push(element);
        this.heapifyUp(this.heap.length - 1);
    };

    public Delete = (): T => {
        if (this.heap.length === 0) {
            throw new Error("Can't perform delete operation on an empty heap");
        }

        const rootElement = this.heap[0];

        if (this.heap.length === 1) {
            this.heap.pop();
            return rootElement;
        }

        this.heap[0] = this.heap.pop()!;
        this.heapifyDown(0);

        return rootElement;
    };

    private heapifyUp = (currentIndex: number) => {
        let parentIndex = Math.floor((currentIndex - 1) / 2);
        while (currentIndex > 0 && this.compare(this.heap[currentIndex], this.heap[parentIndex]) > 0) {
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex - 1) / 2);
        }
    };

    private heapifyDown = (currentIndex: number) => {
        let largestIndex = currentIndex;
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;

        if (leftChildIndex < this.heap.length && this.compare(this.heap[leftChildIndex], this.heap[largestIndex]) > 0) {
            largestIndex = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.compare(this.heap[rightChildIndex], this.heap[largestIndex]) > 0) {
            largestIndex = rightChildIndex;
        }

        if (largestIndex != currentIndex) {
            [this.heap[currentIndex], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[currentIndex]];
            this.heapifyDown(largestIndex);
        }
    };
}

export class MaxHeap<T> extends Heap<T> {
    constructor(compareFn: (a: T, b: T) => number) {
        super((a, b) => compareFn(a, b));
    }
}

export class MinHeap<T> extends Heap<T> {
    constructor(compareFn: (a: T, b: T) => number) {
        super((a, b) => compareFn(b, a));
    }
}
