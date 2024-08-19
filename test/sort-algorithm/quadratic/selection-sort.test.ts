import { describe, test, expect } from '@jest/globals';
import { SelectionSort, SelectionSortGeneric } from '../../../src/sort-algorithm/quadratic/selection-sort';

describe('Selection Sort Algorithm', () => {
    describe('Simple Selection Sort Algorithm', () => {
        test('Selection sort where input is unsorted', () => {
            // Arrange
            const input = [2, 4, 5, 6, 1, 0, 7, 3];
            const expectedOutput = [0, 1, 2, 3, 4, 5, 6, 7];

            // Act
            const actualOutput = SelectionSort(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });

        test('Selection sort adoptibility test - already sorted', () => {
            // Arrange
            const input = [0, 1, 2, 3, 4, 5, 6, 7];
            const expectedOutput = [0, 1, 2, 3, 4, 5, 6, 7];

            // Act
            const actualOutput = SelectionSort(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });

        test('Selection sort stability test - duplicate processing with order', () => {
            // Arrange
            const input = [8, 8, 2, 4, 5, 6, 1, 0, 7, 3];
            const expectedOutput = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8];

            // Act
            const actualOutput = SelectionSort(input);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });
    });

    describe('Generic Selection Sort Algorithm', () => {
        test('Selection sort generic for numbers', () => {
            // Arrange
            const input = [2, 4, 5, 6, 1, 0, 7, 3];
            const expectedOutput = [0, 1, 2, 3, 4, 5, 6, 7];

            // Act
            const actualOutput = SelectionSortGeneric<number>(input, (curr, next) => next - curr);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });

        test('Selection sort generic for strings', () => {
            // Arrange
            const input = ['pear', 'apple', 'orange', 'banana'];
            const expectedOutput = ['apple', 'banana', 'orange', 'pear'];

            // Act
            const actualOutput = SelectionSortGeneric<string>(input, (curr, next) => next.localeCompare(curr));

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });

        test('Selection sort generic for object array', () => {
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
            const actualOutput = SelectionSortGeneric<Product>(input, (curr, next) => next.price - curr.price);

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
        });
    });
});
