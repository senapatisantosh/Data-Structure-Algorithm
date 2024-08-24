import { SumOfNaturalNumberIterative, SumOfNaturalNumberHeadRecursion, SumOfNaturalNumberTailRecursion } from '../../src/recursion/sum-natural-number';

describe('Sum of Natural numbers', () => {
    describe('Sum of Natural numbers Iteration', () => {
        test('Should throw error when input sequence is not an integer', () => {
            // Arrange
            const input = 2.3;

            // Act
            const actualOutput = () => SumOfNaturalNumberIterative(input);

            // Assert
            expect(actualOutput).toThrow('Input must be an integer.');
        });
        test('Should throw error when Input sequence is a netgetive integer', () => {
            // Arrange
            const input = -1;

            // Act
            const actualOutput = () => SumOfNaturalNumberIterative(input);

            // Assert
            expect(actualOutput).toThrow('Input must be a positive integer greater than equal to zero.');
        });
    });
    describe('Sum of Natural numbers Head recursion', () => {
        test('Should throw error when input sequence is not an integer', () => {
            // Arrange
            const input = 2.3;

            // Act
            const actualOutput = () => SumOfNaturalNumberHeadRecursion(input);

            // Assert
            expect(actualOutput).toThrow('Input must be an integer.');
        });
        test('Should throw error when Input sequence is a netgetive integer', () => {
            // Arrange
            const input = -1;

            // Act
            const actualOutput = () => SumOfNaturalNumberHeadRecursion(input);

            // Assert
            expect(actualOutput).toThrow('Input must be a positive integer greater than equal to zero.');
        });
    });
    describe('Sum of Natural numbers Tail recursion', () => {
        test('Should throw error when input sequence is not an integer', () => {
            // Arrange
            const input = 2.3;

            // Act
            const actualOutput = () => SumOfNaturalNumberTailRecursion(input);

            // Assert
            expect(actualOutput).toThrow('Input must be an integer.');
        });
        test('Should throw error when Input sequence is a netgetive integer', () => {
            // Arrange
            const input = -1;

            // Act
            const actualOutput = () => SumOfNaturalNumberTailRecursion(input);

            // Assert
            expect(actualOutput).toThrow('Input must be a positive integer greater than equal to zero.');
        });
    });
});
