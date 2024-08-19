import { describe, test, expect } from '@jest/globals';
import { HeapSortGeneric } from '../../../src/sort-algorithm/logarithmic/heap-sort';

describe('Generic Heap Sort Algorithm', () => {
    test('Heap sort generic for numbers', () => {
        // Arrange
        const input = [2, 4, 5, 6, 1, 0, 7, 3];
        const expectedOutput = [0, 1, 2, 3, 4, 5, 6, 7];

        // Act
        const actualOutput = HeapSortGeneric<number>(input, (curr, next) => curr - next);

        // Assert
        expect(actualOutput).toEqual(expectedOutput);
    });

    test('Heap sort generic for strings', () => {
        // Arrange
        const input = ['pear', 'apple', 'orange', 'banana'];
        const expectedOutput = ['apple', 'banana', 'orange', 'pear'];

        // Act
        const actualOutput = HeapSortGeneric<string>(input, (curr, next) => curr.localeCompare(next));

        // Assert
        expect(actualOutput).toEqual(expectedOutput);
    });

    test('Heap sort generic for object array', () => {
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
        const actualOutput = HeapSortGeneric<Product>(input, (curr, next) => curr.price - next.price);

        // Assert
        expect(actualOutput).toEqual(expectedOutput);
    });
});
