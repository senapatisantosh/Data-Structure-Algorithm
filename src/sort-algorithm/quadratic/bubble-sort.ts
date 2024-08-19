export const BubbleSort = (array: number[]) => {
    const lengthOfArray: number = array.length;
    let flag: boolean;
    for (let i = 0; i < lengthOfArray; i++) {
        flag = true;
        for (let j = 0; j < lengthOfArray - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                flag = false;
            }
        }
        if (flag) {
            break;
        }
    }
    return array;
};

export const BubbleSortGeneric = <T>(array: T[], compareFn: (a: T, b: T) => number): T[] => {
    const lengthOfArray: number = array.length;
    let flag: boolean;
    for (let i = 0; i < lengthOfArray; i++) {
        flag = true;
        for (let j = 0; j < lengthOfArray - i - 1; j++) {
            if (compareFn(array[j], array[j + 1]) > 0) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                flag = false;
            }
        }
        if (flag) {
            break;
        }
    }
    return array;
};
