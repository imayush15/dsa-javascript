/**
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 * Return the indices of the two numbers index1 and index2, each incremented by one, as an integer array [index1, index2] of length 2.
 */

/**
 * ! Mental Model:
 * We can use two pointers to find the two numbers that add up to the target. We can initialize one pointer at the beginning of the array and another pointer at the end of the array. We can then move the pointers towards each other while checking if the sum of the numbers at the pointers is equal to the target. If it is equal, we can return the indices of the two numbers. If it is less than the target, we can move the left pointer to the right to increase the sum. If it is greater than the target, we can move the right pointer to the left to decrease the sum. We can continue this process until we find the two numbers that add up to the target.
 */

var twoSum = function (num, target) {
  let left = 0;
  let right = num.length - 1;

  while (left < right) {
    const sum = num[left] + num[right];

    if (sum === target) return [left + 1, right + 1];

    if (sum < target) left++;
    else right--;
  }
};
