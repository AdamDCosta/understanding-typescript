"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _02_solution_1 = require("./02-solution");
describe("How do you find the duplicate number on a given integer array?", () => {
    it("should return empty array if there are no duplicates", () => {
        //ARRANGE
        let result = [];
        //ACT
        const noDuplicatesArray = [1, 2, 3, 4, 5];
        result = (0, _02_solution_1.findDuplicates)(noDuplicatesArray);
        //ASSERT
        expect(result.length).toBe(0);
    });
    it("should find duplicates in an ordered array", () => {
        let result = [];
        const orderedDuplicateArray = [1, 2, 2, 3, 4, 5];
        result = (0, _02_solution_1.findDuplicates)(orderedDuplicateArray);
        expect(result[0]).toBe(2);
    });
    it("should find duplicates in an unordered array", () => {
        let result = [];
        const unorderedDuplicateArray = [2, 4, 3, 1, 4, 5];
        result = (0, _02_solution_1.findDuplicates)(unorderedDuplicateArray);
        expect(result[0]).toBe(4);
    });
    it("should find negative duplicates", () => {
        let result = [];
        const negativeDuplicateArray = [2, -4, 3, 1, -4, 5];
        result = (0, _02_solution_1.findDuplicates)(negativeDuplicateArray);
        expect(result[0]).toBe(-4);
    });
});
