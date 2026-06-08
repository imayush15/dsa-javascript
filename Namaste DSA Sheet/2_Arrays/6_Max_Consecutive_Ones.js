// !DID IT ON MY OWN

/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 *
 * Example 1:
 * Input: nums = [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
 */

var findMaxConsecutiveOnes = function (nums) {
  // max stores the length of the longest consecutive 1s run found so far
  let max = 0;
  // currentMax tracks the length of the current consecutive 1s streak
  let currentMax = 0;

  for (let num of nums) {
    if (num !== 1) {
      // a non-1 value breaks the streak, so reset the current count
      currentMax = 0;
    } else {
      // extend the current streak of 1s
      currentMax += 1;
      // update the recorded maximum streak if needed
      max = Math.max(currentMax, max);
    }
  }

  // return the longest consecutive 1s streak
  return max;
};
