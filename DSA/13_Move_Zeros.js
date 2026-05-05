/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 */

/**
 * !Mental Model:
 * This question is not about moving zeros to the end, it is about preserving the order of non-zero elements while moving zeros to the end. We can use a two-pointer approach to achieve this in-place.
 *
 * !Algorithm:
 * 1. Initialize a write pointer at the beginning of the array.
 * 2. Iterate through the array with a read pointer.
 * 3. If the current element at the read pointer is non-zero, write it to the position of the write pointer and increment the write pointer.
 * 4. After the iteration, fill the remaining positions with zeros.
 *
 * !Time Complexity: O(n) - We need to iterate through the array once.
 * !Space Complexity: O(1) - We are doing this in-place without using any extra space.
 */

var moveZeroes = function (nums) {
  if (nums.length === 1) return nums;

  let write = 0;

  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      nums[write] = nums[read];
      write++;
    }
  }

  for (let i = write; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};
