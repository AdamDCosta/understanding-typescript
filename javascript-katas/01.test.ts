import { findMissingNumbers } from "./01-solution";

describe("How do you find the missing numbers in a given integer array?", () => {


  it("should return blank array when no missing numbers", () => {
    // ARRANGE
    let result;
    const noMissingNumbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10]
    // ACT
    result = findMissingNumbers(noMissingNumbers)
    //ASSERT
    expect(result.length).toBe(0)
  })

  it("should find a missing number from an ordered array", () => {
    let result: number[];
    const sequencedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 10]
    result = findMissingNumbers(sequencedNumbers)
    expect(result[0]).toBe(9)

    const sequencedNumbers2 = [1, 2, 3, 4, 5, 6, 7, 9, 10]
    result = findMissingNumbers(sequencedNumbers2)
    expect(result[0]).toBe(8)
  })

  it("should find a missing number from an unordered array", () => {
    let result: number[];
    const unsequencedNumbers = [2, 1, 4, 8, 5, 7, 6, 10, 9]
    result = findMissingNumbers(unsequencedNumbers)
    expect(result[0]).toBe(3)

    const unsequencedNumbers2 = [3, 1, 4, 8, 2, 7, 6, 10, 9]
    result = findMissingNumbers(unsequencedNumbers2)
    expect(result[0]).toBe(5)
  })

  it("should find multiple missing numbers", () => {
    let result: number[];
    const multipleMissingNumbers = [2, 1, 4, 8, 5, 7, 10, 9]
    result = findMissingNumbers(multipleMissingNumbers)
    expect(result[0]).toBe(3)
    expect(result[1]).toBe(6)
  })

  it("should find negative numbers", () => {
    let result: number[];
    const negativeNumbers = [-1, -2, -4, -6]
    result = findMissingNumbers(negativeNumbers)
    expect(result[0]).toBe(-5)
    expect(result[1]).toBe(-3)
  })
})