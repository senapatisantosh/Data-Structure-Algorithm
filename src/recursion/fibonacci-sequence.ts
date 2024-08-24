export const FibonacciSequenceWithIteration = (input: number): number => {
    if (!Number.isInteger(input)) {
        throw new Error('Input must be an integer.');
    }

    if (input <= 0) {
        throw new Error('Input must be a positive integer greater than zero.');
    }

    if (input === 1) {
        return 0;
    }

    if (input === 2) {
        return 1;
    }

    let [penultimate, previous] = [0, 1];
    let result = 0;

    for (let index = 3; index <= input; index++) {
        result = penultimate + previous;
        [penultimate, previous] = [previous, result];
    }

    return result;
};

export const FibonacciSequenceWithHeadRecursion = (input: number): number => {
    if (!Number.isInteger(input)) {
        throw new Error('Input must be an integer.');
    }

    if (input <= 0) {
        throw new Error('Input must be a positive integer greater than zero.');
    }

    if (input === 1) {
        return 0;
    }

    if (input === 2) {
        return 1;
    }

    const [penultimate, previous] = [FibonacciSequenceWithIteration(input - 2), FibonacciSequenceWithIteration(input - 1)];

    return penultimate + previous;
};

export const FibonacciSequenceWithTailRecursion = (input: number, penultimate: number = 0, previous: number = 1): number => {
    if (!Number.isInteger(input)) {
        throw new Error('Input must be an integer.');
    }

    if (input <= 0) {
        throw new Error('Input must be a positive integer greater than zero.');
    }

    if (input === 1) {
        return penultimate;
    }

    if (input === 2) {
        return previous;
    }

    return FibonacciSequenceWithTailRecursion(input - 1, previous, penultimate + previous);
};
