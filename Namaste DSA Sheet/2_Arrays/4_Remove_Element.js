/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed.
 * Then return the number of elements in nums which are not equal to val.
 * Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
 *
 * Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
 * Return k.
 *
 * Example 1:
 * Input: nums = [3,2,2,3], val = 3
 * Output: 2, nums = [2,2,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 2.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 */

/**
 * ! Mental Model:
 * It is same as the previous question, here instead of checking for duplicates, we are checking for the value `val` and only copying the elements that are not equal to `val`.
 */

var removeElement = function (nums, val) {
  // `write` is the position where the next non-val element will be placed.
  // It starts at 0 because the first valid element, if any, should go at the beginning.
  let write = 0;

  // `read` walks through every index in the array to inspect each value.
  for (let read = 0; read < nums.length; read++) {
    // If the current element is not equal to `val`, keep it.
    if (nums[read] !== val) {
      // Copy this valid element into the `write` position.
      // If `read` and `write` are the same, this is a no-op.
      nums[write] = nums[read];
      // Move `write` forward so the next kept element is placed after this one.
      write++;
    }
    // If nums[read] === val, we skip it and do not increment `write`.
    // This effectively removes the element by overwriting it later.
  }

  // `write` now holds the count of elements that are not equal to `val`.
  // The first `write` elements of `nums` are the kept values.
  return write;
};
