/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 * Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.
 * The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.
 */

/**
 * Example 1:
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 */

var removeDuplicates = function (nums) {
  // `write` is the position where the next unique element should be placed.
  // Start at 1 because the first element is always unique in a non-empty sorted array.
  let write = 1;

  // `read` scans through the array from the second element onward.
  for (let read = 1; read < nums.length; read++) {
    // If the current element differs from the previous one, it is a new unique value.
    if (nums[read] !== nums[read - 1]) {
      // Copy the unique value to the `write` index.
      nums[write] = nums[read];
      // Move `write` forward so the next unique value goes to the next slot.
      write++;
    }
  }

  // `write` now equals the count of unique elements.
  return write;
};
