/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 *
 *
 *  Example 1:
 *  Input: nums = [-1,0,3,5,9,12], target = 9
 *  Output: 4
 *  Explanation: 9 exists in nums and its index is 4
 */

/**
 * Binary Search Algorithm
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums - A sorted array of integers
 * @param {number} target - The integer to search for
 * @return {number} The index of the target if found, otherwise -1
 */

var search = function (nums, target) {
  // Define search boundaries
  let low = 0;
  let high = nums.length - 1;

  // Keep searching while range is valid
  while (low <= high) {
    // Find middle index
    let mid = Math.floor(low + (high - low) / 2);

    // Target found
    if (nums[mid] === target) return mid;
    // Search right half
    else if (nums[mid] < target) low = mid + 1;
    // Search left half
    else high = mid - 1;
  }

  // Target not found
  return -1;
};
