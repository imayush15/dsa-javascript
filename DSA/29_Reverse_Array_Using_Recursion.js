/**
 * Reverse an array using recursion.
 *
 * ? Example 1:
 * Input: arr = [1, 2, 3, 4, 5]
 * Output: [5, 4, 3, 2, 1]
 *
 * ? Example 2:
 * Input: arr = [10, 20, 30]
 * Output: [30, 20, 10]
 */

/**
 * !Brute Force Approach:
 * Use recursion to reach the end of the array, then build the answer while returning back.
 * At each return step, add the current element to the end of the new array.
 * ? Time Complexity: O(n^2) because spread creates a new array in each call.
 * ? Space Complexity: O(n) for recursion stack (excluding output array creation cost).
 */

/**
 * !Function Explanation:
 * key is a 1-based index for the current element.
 * Base case: when key equals nums.length, return the last element in a new array.
 * Recursive case: reverse the remaining part first, then append nums[key - 1].
 */
function reverse(nums, key) {
  // Base case:
  // When key reaches nums.length, we are at the last element.
  // Return the last element as a new array.
  if (key === nums.length) {
    return [nums[key - 1]];
  }

  // Recursive case:
  // First reverse the remaining part of the array.
  // Then add the current element at the end.
  return [...reverse(nums, key + 1), nums[key - 1]];
}

// Main call: reverse([1, 2, 3, 4], 1)

/**
 * !Optimized Approach:
 * Use two pointers to swap elements in place.
 * ? Time Complexity: O(n) because we visit each element once.
 * ? Space Complexity: O(n) for recursion stack.
 */

function reverse(nums, left = 0, right = nums.length - 1) {
  // Base case:
  // When left crosses or meets right, the array is already reversed.
  if (left >= right) {
    return nums;
  }

  // Swap the left and right elements.
  const temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;

  // Move both pointers inward.
  return reverse(nums, left + 1, right - 1);
}
