import { describe, test, expect } from '@jest/globals';
import { Heap, MaxHeap, MinHeap } from '../../src/non-linear/heap';

describe('Heap data structure: non premitive & non linear', () => {
    describe('Heap data structure: Generic', () => {
        test('Heap insert Numbers', () => {
            // Arrange
            const genericHeap = new Heap<number>((current, next) => current - next);
            const input = [2, 9, 19, 11, 12, 3, 4, 23, 49, 12];
            const expectedOutput = [49, 23, 9, 19, 12, 3, 4, 2, 12, 11];

            // Act
            input.forEach(element => genericHeap.Insert(element));
            const actualOutput = genericHeap.GetHeap();

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
            expect(actualOutput.length).toEqual(genericHeap.GetHeapSize());
        });

        test('Heap insert strings', () => {
            // Arrange
            const genericHeap = new Heap<string>((current, next) => current.localeCompare(next));
            const input = ['apple', 'mango', 'pears', 'banana', 'coconut', 'orange', 'date', 'fig'];
            const expectedOutput = ['pears', 'fig', 'orange', 'coconut', 'banana', 'mango', 'date', 'apple'];

            // Act
            input.forEach(element => genericHeap.Insert(element));
            const actualOutput = genericHeap.GetHeap();

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
            expect(actualOutput.length).toEqual(genericHeap.GetHeapSize());
        });

        test('Heap insert object based on a specific property', () => {
            type Student = {
                name: string;
                score: number;
            };
            // Arrange
            const genericHeap = new Heap<Student>((current, next) => current.score - next.score);
            const input = [
                {
                    name: 'Alex',
                    score: 2,
                },
                {
                    name: 'Ron',
                    score: 9,
                },
                {
                    name: 'Harry',
                    score: 19,
                },
                {
                    name: 'Bob',
                    score: 11,
                },
                {
                    name: 'Marley',
                    score: 12,
                },
                {
                    name: 'Emilie',
                    score: 3,
                },
                {
                    name: 'Emma',
                    score: 4,
                },
                {
                    name: 'Zac',
                    score: 23,
                },
                {
                    name: 'Rose',
                    score: 49,
                },
                {
                    name: 'Juliya',
                    score: 12,
                },
            ];
            const expectedOutput = [
                {
                    name: 'Rose',
                    score: 49,
                },
                {
                    name: 'Zac',
                    score: 23,
                },
                {
                    name: 'Ron',
                    score: 9,
                },
                {
                    name: 'Harry',
                    score: 19,
                },
                {
                    name: 'Juliya',
                    score: 12,
                },
                {
                    name: 'Emilie',
                    score: 3,
                },
                {
                    name: 'Emma',
                    score: 4,
                },
                {
                    name: 'Alex',
                    score: 2,
                },
                {
                    name: 'Marley',
                    score: 12,
                },
                {
                    name: 'Bob',
                    score: 11,
                },
            ];

            // Act
            input.forEach(element => genericHeap.Insert(element));
            const actualOutput = genericHeap.GetHeap();

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
            expect(actualOutput.length).toEqual(genericHeap.GetHeapSize());
        });

        test('Throws error if delete an element from empty array', () => {
            // Arrange
            const genericHeap = new Heap<number>((current, next) => current - next);

            // Act
            const deleteOperation = () => genericHeap.Delete();

            // Assert
            expect(genericHeap.GetHeap()).toHaveLength(0);
            expect(deleteOperation).toThrow("Can't perform delete operation on an empty heap");
        });

        test('Heap delete an element when only 1 element is present', () => {
            // Arrange
            const genericHeap = new Heap<number>((current, next) => current - next);
            const input = [2];
            const expectedOutput = 2;

            // Act
            input.forEach(element => genericHeap.Insert(element));
            const actualOutput = genericHeap.Delete();

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
            expect(genericHeap.heap).toHaveLength(0);
        });

        test('Assert max heap elements after 2 delete operation', () => {
            // Arrange
            const genericHeap = new Heap<number>((current, next) => current - next);
            const input = [2, 9, 19, 11, 12, 3, 4, 23, 49, 12];
            const expectedOutput = [19, 12, 9, 11, 12, 3, 4, 2];

            // Act
            input.forEach(element => genericHeap.Insert(element));
            const firstElementDeleted = genericHeap.Delete();
            const secondElementDeleted = genericHeap.Delete();
            const actualOutput = genericHeap.GetHeap();

            // Assert
            expect(firstElementDeleted).toEqual(49);
            expect(secondElementDeleted).toEqual(23);
            expect(actualOutput).toHaveLength(8);
            expect(actualOutput).toEqual(expectedOutput);
        });
    });
    describe('Heap data structure: Max Heap', () => {
        test('Max heap insert Numbers', () => {
            // Arrange
            const genericHeap = new MaxHeap<number>((current, next) => current - next);
            const input = [2, 9, 19, 11, 12, 3, 4, 23, 49, 12];
            const expectedOutput = [49, 23, 9, 19, 12, 3, 4, 2, 12, 11];

            // Act
            input.forEach(element => genericHeap.Insert(element));
            const actualOutput = genericHeap.GetHeap();

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
            expect(actualOutput.length).toEqual(genericHeap.GetHeapSize());
        });

        test('Max heap insert strings', () => {
            // Arrange
            const genericHeap = new MaxHeap<string>((current, next) => current.localeCompare(next));
            const input = ['apple', 'mango', 'pears', 'banana', 'coconut', 'orange', 'date', 'fig'];
            const expectedOutput = ['pears', 'fig', 'orange', 'coconut', 'banana', 'mango', 'date', 'apple'];

            // Act
            input.forEach(element => genericHeap.Insert(element));
            const actualOutput = genericHeap.GetHeap();

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
            expect(actualOutput.length).toEqual(genericHeap.GetHeapSize());
        });

        test('Max heap insert object based on a specific property', () => {
            type Student = {
                name: string;
                score: number;
            };
            // Arrange
            const genericHeap = new MaxHeap<Student>((current, next) => current.score - next.score);
            const input = [
                {
                    name: 'Alex',
                    score: 2,
                },
                {
                    name: 'Ron',
                    score: 9,
                },
                {
                    name: 'Harry',
                    score: 19,
                },
                {
                    name: 'Bob',
                    score: 11,
                },
                {
                    name: 'Marley',
                    score: 12,
                },
                {
                    name: 'Emilie',
                    score: 3,
                },
                {
                    name: 'Emma',
                    score: 4,
                },
                {
                    name: 'Zac',
                    score: 23,
                },
                {
                    name: 'Rose',
                    score: 49,
                },
                {
                    name: 'Juliya',
                    score: 12,
                },
            ];
            const expectedOutput = [
                {
                    name: 'Rose',
                    score: 49,
                },
                {
                    name: 'Zac',
                    score: 23,
                },
                {
                    name: 'Ron',
                    score: 9,
                },
                {
                    name: 'Harry',
                    score: 19,
                },
                {
                    name: 'Juliya',
                    score: 12,
                },
                {
                    name: 'Emilie',
                    score: 3,
                },
                {
                    name: 'Emma',
                    score: 4,
                },
                {
                    name: 'Alex',
                    score: 2,
                },
                {
                    name: 'Marley',
                    score: 12,
                },
                {
                    name: 'Bob',
                    score: 11,
                },
            ];

            // Act
            input.forEach(element => genericHeap.Insert(element));
            const actualOutput = genericHeap.GetHeap();

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
            expect(actualOutput.length).toEqual(genericHeap.GetHeapSize());
        });
    });
    describe('Heap data structure: Min Heap', () => {
        test('Min heap insert Numbers', () => {
            // Arrange
            const genericHeap = new MinHeap<number>((current, next) => current - next);
            const input = [2, 9, 19, 11, 12, 3, 4, 23, 49, 12];
            const expectedOutput = [2, 9, 3, 11, 12, 19, 4, 23, 49, 12];

            // Act
            input.forEach(element => genericHeap.Insert(element));
            const actualOutput = genericHeap.GetHeap();

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
            expect(actualOutput.length).toEqual(genericHeap.GetHeapSize());
        });

        test('Min heap insert strings', () => {
            // Arrange
            const genericHeap = new MinHeap<string>((current, next) => current.localeCompare(next));
            const input = ['apple', 'mango', 'pears', 'banana', 'coconut', 'orange', 'date', 'fig'];
            const expectedOutput = ['apple', 'banana', 'date', 'fig', 'coconut', 'pears', 'orange', 'mango'];

            // Act
            input.forEach(element => genericHeap.Insert(element));
            const actualOutput = genericHeap.GetHeap();

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
            expect(actualOutput.length).toEqual(genericHeap.GetHeapSize());
        });

        test('Min heap insert object based on a specific property', () => {
            type Student = {
                name: string;
                score: number;
            };
            // Arrange
            const genericHeap = new MinHeap<Student>((current, next) => current.score - next.score);
            const input = [
                {
                    name: 'Alex',
                    score: 2,
                },
                {
                    name: 'Ron',
                    score: 9,
                },
                {
                    name: 'Harry',
                    score: 19,
                },
                {
                    name: 'Bob',
                    score: 11,
                },
                {
                    name: 'Marley',
                    score: 12,
                },
                {
                    name: 'Emilie',
                    score: 3,
                },
                {
                    name: 'Emma',
                    score: 4,
                },
                {
                    name: 'Zac',
                    score: 23,
                },
                {
                    name: 'Rose',
                    score: 49,
                },
                {
                    name: 'Juliya',
                    score: 12,
                },
            ];
            const expectedOutput = [
                {
                    name: 'Alex',
                    score: 2,
                },
                {
                    name: 'Ron',
                    score: 9,
                },
                {
                    name: 'Emilie',
                    score: 3,
                },
                {
                    name: 'Bob',
                    score: 11,
                },
                {
                    name: 'Marley',
                    score: 12,
                },
                {
                    name: 'Harry',
                    score: 19,
                },
                {
                    name: 'Emma',
                    score: 4,
                },
                {
                    name: 'Zac',
                    score: 23,
                },
                {
                    name: 'Rose',
                    score: 49,
                },
                {
                    name: 'Juliya',
                    score: 12,
                },
            ];

            // Act
            input.forEach(element => genericHeap.Insert(element));
            const actualOutput = genericHeap.GetHeap();

            // Assert
            expect(actualOutput).toEqual(expectedOutput);
            expect(actualOutput.length).toEqual(genericHeap.GetHeapSize());
        });
    });
});
