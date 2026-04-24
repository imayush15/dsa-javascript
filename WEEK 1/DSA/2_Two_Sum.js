/**
 You’re given an array of integers:

  nums = [11, 7, 2, 15]
  target = 9

  Return the indices of the two numbers such that they add up to target.
 */

// Answer - 1, 2

function twoSumActual(nums, target) {
  const sumMap = new Map();

  for (let i = 0; i < nums.lengt; i++) {
    const curr = nums[i];
    const difference = target - curr;

    if (sumMap.has(difference)) return [sumMap.get(difference), i];
    sumMap.set(curr, i);
  }
}

// Time Complexity - O(n)
// Space Complexity - O(n)

// ! NOTE: If the array is shorted, we use two pointer method. We keep one pointer at the left and one pointer at the right.
