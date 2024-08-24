import { FibonacciSequenceWithIteration, FibonacciSequenceWithHeadRecursion, FibonacciSequenceWithTailRecursion } from '../../src/recursion/fibonacci-sequence';

describe('Fibonacci Sequence', () => {
    describe('Fibonacci Sequence with Iteration', () => {
        test('Should throw error when input sequence is not an integer', () => {
            // Arrange
            const input = 2.3;

            // Act
            const actualOutput = () => FibonacciSequenceWithIteration(input);

            // Assert
            expect(actualOutput).toThrow('Input must be an integer.');
        });
        test('Should throw error when Input sequence is a netgetive integer', () => {
            // Arrange
            const input = -1;

            // Act
            const actualOutput = () => FibonacciSequenceWithIteration(input);

            // Assert
            expect(actualOutput).toThrow('Input must be a positive integer greater than zero.');
        });
        test('Should throw error when Input sequence is 0', () => {
            // Arrange
            const input = 0;

            // Act
            const actualOutput = () => FibonacciSequenceWithIteration(input);

            // Assert
            expect(actualOutput).toThrow('Input must be a positive integer greater than zero.');
        });
        test('Should return the 1st sequence as 0', () => {
            // Arrange
            const input = 1;
            const expectedOutput = 0;

            // Act
            const actualOutput = FibonacciSequenceWithIteration(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });
        test('Should treturn the 2nd sequence as 1', () => {
            // Arrange
            const input = 2;
            const expectedOutput = 1;

            // Act
            const actualOutput = FibonacciSequenceWithIteration(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });
        test('Should treturn the 7th sequence as 8', () => {
            // Arrange
            const input = 7;
            const expectedOutput = 8;

            // Act
            const actualOutput = FibonacciSequenceWithIteration(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });
    });
    describe('Fibonacci Sequence with Head Recursion', () => {
        test('Should throw error when input sequence is not an integer', () => {
            // Arrange
            const input = 2.3;

            // Act
            const actualOutput = () => FibonacciSequenceWithHeadRecursion(input);

            // Assert
            expect(actualOutput).toThrow('Input must be an integer.');
        });
        test('Should throw error when Input sequence is a netgetive integer', () => {
            // Arrange
            const input = -1;

            // Act
            const actualOutput = () => FibonacciSequenceWithHeadRecursion(input);

            // Assert
            expect(actualOutput).toThrow('Input must be a positive integer greater than zero.');
        });
        test('Should throw error when Input sequence is 0', () => {
            // Arrange
            const input = 0;

            // Act
            const actualOutput = () => FibonacciSequenceWithHeadRecursion(input);

            // Assert
            expect(actualOutput).toThrow('Input must be a positive integer greater than zero.');
        });
        test('Should return the 1st sequence as 0', () => {
            // Arrange
            const input = 1;
            const expectedOutput = 0;

            // Act
            const actualOutput = FibonacciSequenceWithHeadRecursion(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });
        test('Should treturn the 2nd sequence as 1', () => {
            // Arrange
            const input = 2;
            const expectedOutput = 1;

            // Act
            const actualOutput = FibonacciSequenceWithHeadRecursion(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });
        test('Should treturn the 7th sequence as 8', () => {
            // Arrange
            const input = 7;
            const expectedOutput = 8;

            // Act
            const actualOutput = FibonacciSequenceWithHeadRecursion(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });
    });
    describe('Fibonacci Sequence with Tail Recursion', () => {
        test('Should throw error when input sequence is not an integer', () => {
            // Arrange
            const input = 2.3;

            // Act
            const actualOutput = () => FibonacciSequenceWithTailRecursion(input);

            // Assert
            expect(actualOutput).toThrow('Input must be an integer.');
        });
        test('Should throw error when Input sequence is a netgetive integer', () => {
            // Arrange
            const input = -1;

            // Act
            const actualOutput = () => FibonacciSequenceWithTailRecursion(input);

            // Assert
            expect(actualOutput).toThrow('Input must be a positive integer greater than zero.');
        });
        test('Should throw error when Input sequence is 0', () => {
            // Arrange
            const input = 0;

            // Act
            const actualOutput = () => FibonacciSequenceWithTailRecursion(input);

            // Assert
            expect(actualOutput).toThrow('Input must be a positive integer greater than zero.');
        });
        test('Should return the 1st sequence as 0', () => {
            // Arrange
            const input = 1;
            const expectedOutput = 0;

            // Act
            const actualOutput = FibonacciSequenceWithTailRecursion(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });
        test('Should treturn the 2nd sequence as 1', () => {
            // Arrange
            const input = 2;
            const expectedOutput = 1;

            // Act
            const actualOutput = FibonacciSequenceWithTailRecursion(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });
        test('Should treturn the 7th sequence as 8', () => {
            // Arrange
            const input = 7;
            const expectedOutput = 8;

            // Act
            const actualOutput = FibonacciSequenceWithTailRecursion(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });
    });
});
