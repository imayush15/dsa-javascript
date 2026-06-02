// ! IMPORTANT FOR INTERVIEW PREPARATION:

/**
 * Given a string s, find the length of the longest substring without duplicate characters.
 *
 * ? Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * ? Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 */

/**
 * ! Mental Model:
 * - We can use a sliding window approach to solve this problem efficiently.
 * - We will maintain a window of characters and use a Map to keep track of the unique characters in the current window.
 * - We will expand the window by moving the right pointer and adding characters to the Map until we encounter a duplicate character.
 * - When we encounter a duplicate character, we will shrink the window from the left until we remove the duplicate character from the Map.
 * - We will keep track of the maximum length of the substring without repeating characters during this process.
 *
 * ! Complexity Analysis:
 * * Time Complexity: O(n) - We traverse the string once to find the longest substring.
 * * Space Complexity: O(min(m, n)) - Where m is the size of the character set and n is the length of the string. In the worst case, we may have to store all characters in the Map.
 */

var lengthOfLongestSubstring = function (s) {
  // Map stores the last seen index of each character.
  // Example: for "abc", map will store:
  // a -> 0, b -> 1, c -> 2
  const map = new Map();

  // left marks the start of the current valid window.
  // right marks the end of the current window.
  // max stores the maximum valid window length found so far.
  let left = 0,
    right = 0,
    max = 0;

  // Move right pointer through the string one character at a time.
  while (right < s.length) {
    // If the current character was seen before,
    // and its last seen index is inside the current window,
    // then the current window has a duplicate.

    // We check map.get(s[right]) >= left because
    // duplicate characters before the left pointer do not matter anymore.
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      // Move left pointer just after the previous occurrence
      // of the current character.

      // This removes the duplicate from the current window.
      // We shrink the window to after the last occurrence of the duplicate character.
      left = map.get(s[right]) + 1;
    }

    // Current window is from left to right.
    // Window length = right - left + 1
    // Update max if current window is the longest valid one so far.
    max = Math.max(max, right - left + 1);

    // Store/update the latest index of the current character.
    map.set(s[right], right);

    // Expand the window by moving right forward.
    right++;
  }

  // Return the length of the longest substring without repeating characters.
  return max;
};
