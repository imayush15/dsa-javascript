/**
 * Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.
 *
 * An alphanumeric string is a string consisting of lowercase English letters and digits.
 *
 * Example 1:
 * Input: s = "dfa12321afd"
 * Output: 2
 * Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
 *
 * Example 2:
 * Input: s = "abc1111"
 * Output: -1
 * Explanation: The digits that appear in s are [1]. There is no second largest digit.
 *
 * Constraints:
 * 1 <= s.length <= 500
 * s consists of only lowercase English letters and/or digits.
 */

// First thought solution
var secondHighest = function (s) {
  const reg = /[a-z]/;
  const nums = [];
  const uniqueNums = [];
  for (let i = 0; i < s.length; i++) {
    if (!reg.test(s[i])) {
      nums.push(s[i]);
    }
  }

  const set = new Set(nums);

  for (let num of set) {
    uniqueNums.push(num);
  }

  uniqueNums.sort((a, b) => a - b);

  return set.size === 1 || uniqueNums.length === 0
    ? -1
    : +uniqueNums[uniqueNums.length - 2];
};

/**
 * Mental Model: We need to find the second largest numerical digit in a string. We can do this in one pass by keeping track of the largest and second largest digits seen so far.
 */

// Optimized solution
var secondHighest = function (s) {
  // Track largest digit
  let largest = -1;

  // Track second largest digit
  let secondLargest = -1;

  for (let i = 0; i < s.length; i++) {
    // Current character
    const curr = s[i];

    // Check if character is a number
    if (!isNaN(curr)) {
      // Convert to number
      const num = +curr;

      // Found new largest
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      }

      // Found new second largest
      else if (num < largest && num > secondLargest) {
        secondLargest = num;
      }
    }
  }

  // Return answer
  return secondLargest;
};
