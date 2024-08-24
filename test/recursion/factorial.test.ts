import { expect } from '@jest/globals';
import { FactorialWithHeadRecursion, FactorialWithIteratiion, FactorialWithTailRecursion } from '../../src/recursion/factorial';

describe('Factorial of a number', () => {
    describe('Factorial with iteration', () => {
        test('Factorial of Negative Number should throw error', () => {
            // Arrange
            const input = -1;

            // Act
            const actualOutput = () => FactorialWithIteratiion(input);

            // Assert
            expect(actualOutput).toThrow("Can't determine factorial of negetive number!");
        });
        test('Factorial of Floating point number should throw error', () => {
            // Arrange
            const input = 3.14;

            // Act
            const actualOutput = () => FactorialWithIteratiion(input);

            // Assert
            expect(actualOutput).toThrow("Can't determine factorial of Non integer!");
        });
        test('Factorial of 0', () => {
            // Arrange
            const input = 0;
            const expectedOutput = 1;

            // Act
            const actualOutput = FactorialWithIteratiion(input);

            // Assert
            expect(expectedOutput).toEqual(actualOutput);
        });
        test('Factorial of 1', () => {
            // Arrange
            const input = 1;
            const expectedOutput = 1;

            // Act
            const actualOutput = FactorialWithIteratiion(input);

            // Assert
            expect(expectedOutput).toEqual(actualOutput);
        });
        test('Factorial of 6', () => {
            // Arrange
            const input = 6;
            const expectedOutput = 720;

            // Act
            const actualOutput = FactorialWithIteratiion(input);

            // Assert
            expect(expectedOutput).toEqual(actualOutput);
        });
        test('Factorial of Large number - 171', () => {
            // Arrange
            const input = 171;
            const expectedOutput = Infinity;

            // Act
            const actualOutput = FactorialWithIteratiion(input);

            // Assert
            expect(expectedOutput).toEqual(actualOutput);
        });
    });

    describe('Factorial with Head Recursion', () => {
        test('Factorial of Negative Number should throw error', () => {
            // Arrange
            const input = -1;

            // Act
            const actualOutput = () => FactorialWithHeadRecursion(input);

            // Assert
            expect(actualOutput).toThrow("Can't determine factorial of negetive number!");
        });
        test('Factorial of Floating point number should throw error', () => {
            // Arrange
            const input = 3.14;

            // Act
            const actualOutput = () => FactorialWithHeadRecursion(input);

            // Assert
            expect(actualOutput).toThrow("Can't determine factorial of Non integer!");
        });
        test('Factorial of 0', () => {
            // Arrange
            const input = 0;
            const expectedOutput = 1;

            // Act
            const actualOutput = FactorialWithHeadRecursion(input);

            // Assert
            expect(expectedOutput).toEqual(actualOutput);
        });
        test('Factorial of 1', () => {
            // Arrange
            const input = 1;
            const expectedOutput = 1;

            // Act
            const actualOutput = FactorialWithHeadRecursion(input);

            // Assert
            expect(expectedOutput).toEqual(actualOutput);
        });
        test('Factorial of 6', () => {
            // Arrange
            const input = 6;
            const expectedOutput = 720;

            // Act
            const actualOutput = FactorialWithHeadRecursion(input);

            // Assert
            expect(expectedOutput).toEqual(actualOutput);
        });
        test('Factorial of Large number - 171', () => {
            // Arrange
            const input = 171;
            const expectedOutput = Infinity;

            // Act
            const actualOutput = FactorialWithHeadRecursion(input);

            // Assert
            expect(expectedOutput).toEqual(actualOutput);
        });
    });

    describe('Factorial with Tail Recursion', () => {
        test('Factorial of Negative Number should throw error', () => {
            // Arrange
            const input = -1;

            // Act
            const actualOutput = () => FactorialWithTailRecursion(input);

            // Assert
            expect(actualOutput).toThrow("Can't determine factorial of negetive number!");
        });
        test('Factorial of Floating point number should throw error', () => {
            // Arrange
            const input = 3.14;

            // Act
            const actualOutput = () => FactorialWithTailRecursion(input);

            // Assert
            expect(actualOutput).toThrow("Can't determine factorial of Non integer!");
        });
        test('Factorial of 0', () => {
            // Arrange
            const input = 0;
            const expectedOutput = 1;

            // Act
            const actualOutput = FactorialWithTailRecursion(input);

            // Assert
            expect(expectedOutput).toEqual(actualOutput);
        });
        test('Factorial of 1', () => {
            // Arrange
            const input = 1;
            const expectedOutput = 1;

            // Act
            const actualOutput = FactorialWithTailRecursion(input);

            // Assert
            expect(expectedOutput).toEqual(actualOutput);
        });
        test('Factorial of 6', () => {
            // Arrange
            const input = 6;
            const expectedOutput = 720;

            // Act
            const actualOutput = FactorialWithTailRecursion(input);

            // Assert
            expect(expectedOutput).toEqual(actualOutput);
        });
        test('Factorial of Large number - 171', () => {
            // Arrange
            const input = 171;
            const expectedOutput = Infinity;

            // Act
            const actualOutput = FactorialWithTailRecursion(input);

            // Assert
            expect(expectedOutput).toEqual(actualOutput);
        });
    });
});
