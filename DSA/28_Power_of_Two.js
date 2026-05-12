/**
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 * An integer n is a power of two, if there exists an integer x such that n == 2^x.
 *
 * ? Example 1:
 * Input: n = 1
 * Output: true
 * Explanation: 2^0 = 1
 *
 * ? Example 2:
 * Input: n = 16
 * Output: true
 * Explanation: 2^4 = 16
 */

/**
 * ! Mental Model:
 * We can use recursion to check this. If n is 1, then it is a power of two. If n is less than 1, then it is not a power of two. If n is even, then we can divide it by 2 and check if the result is a power of two. If n is odd and greater than 1, then it cannot be a power of two.
 *
 * ? Time Complexity: O(log n) where n is the input number.
 * ? Space Complexity: O(log n) due to recursive call stack.
 */

var isPowerOfTwo = function (n) {
  // Base case:
  // If n becomes exactly 1, it means the original number
  // was divisible by 2 repeatedly and is a power of two.
  if (n === 1) {
    return true;
  }

  // Invalid case:
  // n <= 0 cannot be a power of two.
  // If n is odd before reaching 1, it cannot be divided cleanly by 2,
  // so it is not a power of two.
  if (n <= 0 || n % 2 !== 0) {
    return false;
  }

  // Recursive step:
  // Keep dividing n by 2 and check the smaller version of the same problem.
  return isPowerOfTwo(n / 2);
};
