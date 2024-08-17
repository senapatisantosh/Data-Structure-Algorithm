import { describe, test, expect } from '@jest/globals';
import { BubbleSort, BubbleSortGeneric } from '../../src/sort-algorithm/bubble-sort';

describe('Bubble Sort Algorithm', () => {
    describe('Simple Bubble Sort Algorithm', () => {
        test('Bubble sort where input is unsorted', () => {
            // Arrange
            const input = [2, 4, 5, 6, 1, 0, 7, 3];
            const expectedOutput = [0, 1, 2, 3, 4, 5, 6, 7];

            // Act
            const actualOutput = BubbleSort(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });

        test('Bubble sort adoptibility test - already sorted', () => {
            // Arrange
            const input = [0, 1, 2, 3, 4, 5, 6, 7];
            const expectedOutput = [0, 1, 2, 3, 4, 5, 6, 7];

            // Act
            const actualOutput = BubbleSort(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });

        test('Bubble sort stability test - duplicate processing with order', () => {
            // Arrange
            const input = [8, 8, 2, 4, 5, 6, 1, 0, 7, 3];
            const expectedOutput = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8];

            // Act
            const actualOutput = BubbleSort(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });
    });

    describe('Generic Bubble Sort Algorithm', () => {
        test('Bubble sort generic for numbers', () => {
            // Arrange
            const input = [2, 4, 5, 6, 1, 0, 7, 3];
            const expectedOutput = [0, 1, 2, 3, 4, 5, 6, 7];

            // Act
            const actualOutput = BubbleSortGeneric<number>(input, (curr, next) => curr > next);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });

        test('Bubble sort generic for strings', () => {
            // Arrange
            const input = ['pear', 'apple', 'orange', 'banana'];
            const expectedOutput = ['apple', 'banana', 'orange', 'pear'];

            // Act
            const actualOutput = BubbleSortGeneric<string>(input, (curr, next) => curr > next);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });

        test('Bubble sort generic for object array', () => {
            // Arrange
            type Product = {
                name: string;
                price: number;
            };
            const input: Product[] = [
                { name: 'Laptop', price: 1200 },
                { name: 'Phone', price: 800 },
                { name: 'Tablet', price: 600 },
            ];
            const expectedOutput = [
                { name: 'Tablet', price: 600 },
                { name: 'Phone', price: 800 },
                { name: 'Laptop', price: 1200 },
            ];

            // Act
            const actualOutput = BubbleSortGeneric<Product>(input, (curr, next) => curr.price > next.price);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });
    });
});
