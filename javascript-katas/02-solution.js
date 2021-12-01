"use strict";
// 02. How do you find the duplicate number on a given integer array?
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDuplicates = void 0;
const noDuplicates = [1, 2, 3, 4, 5];
const duplicated = [1, 2, 2, 2, 3, 4, 4, 5];
const findDuplicates = (numArr) => {
    const duplicatedNums = [];
    const sortedArr = numArr.sort((a, b) => a - b);
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === sortedArr[i - 1]) {
            duplicatedNums.push(sortedArr[i]);
        }
    }
    // if (duplicatedNums.length > 0) {
    return duplicatedNums;
    // } else return "no duplicates";
};
exports.findDuplicates = findDuplicates;
