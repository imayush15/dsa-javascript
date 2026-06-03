/**
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 *
 * ? Example 1:
 * Input: target = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 *
 * ? Example 2:
 * Input: target = 4, nums = [1,4,4]
 * Output: 1
 */

/**
 * ! Brute Force Approach:
 * We can use two nested loops to check all possible subarrays and calculate their sums. If the sum of a subarray is greater than or equal to the target, we can update the minimum length.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

// Brute Force Code
var minSubArrayLen = function (target, nums) {
  let minLength = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum >= target) {
        minLength = Math.min(minLength, j - i + 1);
        break;
      }
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

/**
 * ! Sliding Window Approach:
 * We can use a sliding window technique to find the minimal length of a subarray. We will maintain a window that expands to the right until the sum of the elements in the window is greater than or equal to the target. Once we have a valid window, we will try to shrink it from the left to find the minimal length.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var minSubArrayLen = function (target, nums) {
  // Left pointer of the current sliding window
  let i = 0;

  // Stores the minimum valid window length found so far.
  // nums.length + 1 is used as a placeholder meaning "not found yet".
  let minLength = nums.length + 1;

  // Stores the sum of the current window from i to j
  let sum = 0;

  // j is the right pointer.
  // We expand the window by moving j forward.
  for (let j = 0; j < nums.length; j++) {
    // Add the current right-side element into the window
    sum += nums[j];

    // If current window sum is >= target, the window is valid.
    // Now try to shrink it from the left to find the smallest valid window.
    while (sum >= target) {
      // Current valid window is from i to j.
      // Its length is j - i + 1.
      minLength = Math.min(minLength, j - i + 1);

      // Remove the leftmost element from the window
      // and move left pointer forward.
      sum -= nums[i];
      i++;
    }
  }

  // If minLength was never updated, no valid subarray exists.
  return minLength === nums.length + 1 ? 0 : minLength;
};
