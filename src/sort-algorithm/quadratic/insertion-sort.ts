export const InsertionSort = (array: number[]) => {
    const lengthOfArray: number = array.length;
    for (let i = 1; i < lengthOfArray; i++) {
        let j = i - 1;
        const element = array[i];
        while (j >= 0 && array[j] > element) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = element;
    }
    return array;
};

export const InsertionSortGeneric = <T>(array: T[], compareFn: (a: T, b: T) => number): T[] => {
    const lengthOfArray: number = array.length;
    for (let i = 1; i < lengthOfArray; i++) {
        let j = i - 1;
        const element = array[i];
        while (j >= 0 && compareFn(array[j], element) > 0) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = element;
    }
    return array;
};
