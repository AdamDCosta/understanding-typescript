// ---- 01 How do you find the missing numbers in a given integer array? ----

const numbersArr = [1, 2, 3, 4, 5];
const newNumbers = [1, 2, 4, 5, 7, 8, 9, 10];
const nextArr = [2, 4, 5, 6, 7, 9];
const unSorted = [2, 1, 4, 3, 5, 9, 8, 7, 6, 10];

export const findMissingNumbers = (array: number[]) => {
  const missingNums: number[] = [];
  const sortedNums = array.sort((a, b) => a - b);
  const firstNum = sortedNums[0];
  const lastNum = sortedNums[sortedNums.length - 1];

  for (let i: number = firstNum; i < lastNum; i++) {
    if (sortedNums.indexOf(i) === -1) {
      missingNums.push(i);
    }
  }
  return missingNums;
};
