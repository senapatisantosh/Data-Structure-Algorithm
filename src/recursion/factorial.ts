export const FactorialWithIteratiion = (input: number): number => {
    if (!Number.isInteger(input)) {
        throw new Error("Can't determine factorial of Non integer!");
    }

    if (input < 0) {
        throw new Error("Can't determine factorial of negetive number!");
    }

    let factorial = 1;

    for (let index = 2; index <= input; index++) {
        factorial *= index;
    }

    return factorial;
};

export const FactorialWithHeadRecursion = (input: number): number => {
    if (!Number.isInteger(input)) {
        throw new Error("Can't determine factorial of Non integer!");
    }

    if (input < 0) {
        throw new Error("Can't determine factorial of negetive number!");
    }

    if (input == 0) {
        return 1;
    }

    const subResult = FactorialWithHeadRecursion(input - 1);

    return input * subResult;
};

export const FactorialWithTailRecursion = (input: number, accumulator: number = 1): number => {
    if (!Number.isInteger(input)) {
        throw new Error("Can't determine factorial of Non integer!");
    }

    if (input < 0) {
        throw new Error("Can't determine factorial of negetive number!");
    }

    if (input == 0) {
        return accumulator;
    }

    return FactorialWithTailRecursion(input - 1, input * accumulator);
};
