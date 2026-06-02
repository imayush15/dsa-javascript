/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 * - Every close bracket has a corresponding open bracket of the same type
 */

/**
 * ! Mental Model:
 * 1. Use a stack to keep track of opening brackets.
 * 2. Iterate through each character in the string:
 *    - If it's an opening bracket, push it onto the stack.
 *    - If it's a closing bracket, check if the stack is empty (which means there's no corresponding opening bracket) or if the top of the stack does not match the corresponding opening bracket. If either condition is true, return false.
 *    - If it matches, pop the top of the stack.
 * 3. After processing all characters, if the stack is empty, return true (all brackets are matched); otherwise, return false (there are unmatched opening brackets).
 *
 * ! Complexity Analysis:
 * - Time Complexity: O(n) where n is the length of the input string, since we traverse it once.
 * - Space Complexity: O(n) in the worst case when all characters are opening brackets and we push them onto the stack.
 */

var isValid = function (s) {
  const stack = [];

  const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];

    // If current character is an opening bracket, push it
    if (map.has(currentChar)) {
      stack.push(currentChar);
    } else {
      // Current character is a closing bracket

      // Get the last opened bracket
      const lastOpeningBracket = stack.pop();

      // Check if the current closing bracket matches it
      if (map.get(lastOpeningBracket) !== currentChar) {
        return false;
      }
    }
  }

  // If stack is empty, all brackets were matched correctly
  return stack.length === 0;
};
