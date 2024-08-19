export const HeapSortGeneric = <T>(array: T[], compareFn: (a: T, b: T) => number): T[] => {
    buildHeap(array, compareFn);

    for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
        [array[0], array[currentIndex]] = [array[currentIndex], array[0]];
        heapifyDown(array, currentIndex, 0, compareFn);
    }

    return array;
};

const buildHeap = <T>(array: T[], compareFn: (a: T, b: T) => number) => {
    const n = array.length;

    for (let currentIndex = Math.floor(n / 2) - 1; currentIndex >= 0; currentIndex--) {
        heapifyDown(array, n, currentIndex, compareFn);
    }
};

const heapifyDown = <T>(array: T[], n: number, currentIndex: number, compareFn: (a: T, b: T) => number) => {
    let largestIndex = currentIndex;
    const leftChildIndex = 2 * currentIndex + 1;
    const rightChildIndex = 2 * currentIndex + 2;

    if (leftChildIndex < n && compareFn(array[leftChildIndex], array[largestIndex]) > 0) {
        largestIndex = leftChildIndex;
    }

    if (rightChildIndex < n && compareFn(array[rightChildIndex], array[largestIndex]) > 0) {
        largestIndex = rightChildIndex;
    }

    if (largestIndex !== currentIndex) {
        [array[currentIndex], array[largestIndex]] = [array[largestIndex], array[currentIndex]];
        heapifyDown(array, n, largestIndex, compareFn);
    }
};
