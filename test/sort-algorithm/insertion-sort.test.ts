import { describe, test, expect } from '@jest/globals';
import { InsertionSort, InsertionSortGeneric } from '../../src/sort-algorithm/insertion-sort';

describe('Insert Sort Algorithm', () => {
    describe('Simple Insert Sort Algorithm', () => {
        test('Insert sort where input is unsorted', () => {
            // Arrange
            const input = [2, 4, 5, 6, 1, 0, 7, 3];
            const expectedOutput = [0, 1, 2, 3, 4, 5, 6, 7];

            // Act
            const actualOutput = InsertionSort(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });

        test('Insert sort adoptibility test - already sorted', () => {
            // Arrange
            const input = [0, 1, 2, 3, 4, 5, 6, 7];
            const expectedOutput = [0, 1, 2, 3, 4, 5, 6, 7];

            // Act
            const actualOutput = InsertionSort(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });

        test('Insert sort stability test - duplicate processing with order', () => {
            // Arrange
            const input = [8, 8, 2, 4, 5, 6, 1, 0, 7, 3];
            const expectedOutput = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8];

            // Act
            const actualOutput = InsertionSort(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });
    });

    describe('Generic Insert Sort Algorithm', () => {
        test('Insert sort generic for numbers', () => {
            // Arrange
            const input = [2, 4, 5, 6, 1, 0, 7, 3];
            const expectedOutput = [0, 1, 2, 3, 4, 5, 6, 7];

            // Act
            const actualOutput = InsertionSortGeneric<number>(input, (curr, next) => curr > next);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });

        test('Insert sort generic for strings', () => {
            // Arrange
            const input = ['pear', 'apple', 'orange', 'banana'];
            const expectedOutput = ['apple', 'banana', 'orange', 'pear'];

            // Act
            const actualOutput = InsertionSortGeneric<string>(input, (curr, next) => curr > next);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });

        test('Insert sort generic for object array', () => {
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
            const actualOutput = InsertionSortGeneric<Product>(input, (curr, next) => curr.price > next.price);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });
    });
});
