/**
 * You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.
 * We repeatedly make duplicate removals on s until we no longer can.
 * Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
 *
 * ? Example 1:
 * Input: s = "abbaca"
 * Output: "ca"
 * Explanation:
 * For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
 *
 * ? Example 2:
 * Input: s = "azxxzy"
 * Output: "ay"
 * Explanation:
 * For example, in "azxxzy" we could remove "zz" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "axxzy", of which only "xx" is possible, so the final string is "ay".
 * ? Constraints:
 * - 1 <= s.length <= 10^5
 * - s consists of lowercase English letters.
 */

/**
 * ! Mental Model:
 * We can use a stack to solve this problem. We iterate through the string and if the current character is the same as the top of the stack, we pop the top of the stack. Otherwise, we push the current character onto the stack. At the end of the iteration, we join the characters in the stack to get the final string.
 *
 * ? Time Complexity: O(n) where n is the length of the string.
 * ? Space Complexity: O(n) where n is the length of the string.
 */

var removeDuplicates = function (s) {
  // Stack stores characters that are not removed yet.
  const stack = [];

  // Iterate through each character of the string.
  for (let i = 0; i < s.length; i++) {
    // If current character is same as the top of the stack,
    // both form an adjacent duplicate pair.
    if (stack[stack.length - 1] === s[i]) {
      // Remove the previous matching character from stack.
      // Current character is also skipped because we do not push it.
      const pop = stack.pop();
    } else {
      // If no duplicate pair is formed, keep current character.
      stack.push(s[i]);
    }
  }

  // Join remaining characters to form the final string.
  return stack.join("");
};
