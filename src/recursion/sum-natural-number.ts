export const SumOfNaturalNumberIterative = (input: number): number => {
    if (!Number.isInteger(input)) {
        throw new Error('Input must be an integer.');
    }

    if (input < 0) {
        throw new Error('Input must be a positive integer greater than equal to zero.');
    }

    let sum = 0;
    for (let index = 1; index <= input; index++) {
        sum += index;
    }
    return sum;
};

export const SumOfNaturalNumberHeadRecursion = (input: number): number => {
    if (!Number.isInteger(input)) {
        throw new Error('Input must be an integer.');
    }

    if (input < 0) {
        throw new Error('Input must be a positive integer greater than equal to zero.');
    }

    if (input === 1) {
        return input;
    }

    const subResult = SumOfNaturalNumberHeadRecursion(input - 1);

    return input + subResult;
};

export const SumOfNaturalNumberTailRecursion = (input: number, accumulator: number = 0): number => {
    if (!Number.isInteger(input)) {
        throw new Error('Input must be an integer.');
    }

    if (input < 0) {
        throw new Error('Input must be a positive integer greater than equal to zero.');
    }

    if (input === 0) {
        return accumulator;
    }

    return SumOfNaturalNumberTailRecursion(input - 1, accumulator + input);
};
