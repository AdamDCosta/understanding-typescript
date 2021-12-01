import { findDuplicates } from "./02-solution";

describe("How do you find the duplicate number on a given integer array?", () => {

  it("should return empty array if there are no duplicates", () => {
    //ARRANGE
    let result: number[] = [];
    //ACT
    const noDuplicatesArray = [1, 2, 3, 4, 5];
    result = findDuplicates(noDuplicatesArray);
    //ASSERT
    expect(result.length).toBe(0)
  })

  it("should find duplicates in an ordered array", () => {
    let result: number[] = [];
    const orderedDuplicateArray = [1, 2, 2, 3, 4, 5];
    result = findDuplicates(orderedDuplicateArray);
    expect(result[0]).toBe(2)
  })

  it("should find duplicates in an unordered array", () => {
    let result: number[] = [];
    const unorderedDuplicateArray = [2, 4, 3, 1, 4, 5];
    result = findDuplicates(unorderedDuplicateArray);
    expect(result[0]).toBe(4)
  })

  it("should find negative duplicates", () => {
    let result: number[] = [];
    const negativeDuplicateArray = [2, -4, 3, 1, -4, 5];
    result = findDuplicates(negativeDuplicateArray);
    expect(result[0]).toBe(-4)
  })
})