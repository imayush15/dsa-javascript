/**
 * Check if a string is a palindrome using recursion.
 *
 * ? Example 1:
 * Input: str = "racecar"
 * Output: true
 * Explanation: "racecar" reads the same backward and forward.
 */

/**
 * !Brute Force Approach:
 * Use recursion to compare the first and last characters of the string.
 * If they match, recursively check the substring that excludes these characters.
 * ? Time Complexity: O(n) because we check each character once.
 * ? Space Complexity: O(n) for recursion stack.
 */

const isPalindrome = (s, left, right) => {
  // Base case:
  // If left crosses right or both pointers meet,
  // it means all character pairs have matched so far.
  if (left >= right) {
    return true;
  }

  // If characters at left and right are different,
  // the string cannot be a palindrome.
  if (s[left] !== s[right]) return false;

  // Recursive step:
  // Since current left and right characters matched,
  // move both pointers inward and check the remaining substring.
  return isPalindrome(s, left + 1, right - 1);
};

// ! Usage
/**
 * const s = 'kayak';
 * console.log(isPalindrome(s, 0, s.length - 1));
 */
