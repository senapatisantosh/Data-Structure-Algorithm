export const SelectionSort = (array: number[]) => {
    const lengthOfArray = array.length;
    for (let i = 0; i < lengthOfArray - 1; i++) {
        let k = i;
        for (let j = i; j < lengthOfArray; j++) {
            if (array[j] < array[k]) {
                k = j;
            }
        }
        [array[i], array[k]] = [array[k], array[i]];
    }
    return array;
};

export const SelectionSortGeneric = <T>(array: T[], compareFn: (a: T, b: T) => boolean): T[] => {
    const lengthOfArray = array.length;
    for (let i = 0; i < lengthOfArray - 1; i++) {
        let k = i;
        for (let j = i; j < lengthOfArray; j++) {
            if (compareFn(array[j], array[k])) {
                k = j;
            }
        }
        [array[i], array[k]] = [array[k], array[i]];
    }
    return array;
};
