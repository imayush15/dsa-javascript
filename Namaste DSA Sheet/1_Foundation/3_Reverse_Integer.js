/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 *
 * Example 1:
 * Input: x = 123
 * Output: 321
 *
 * Example 2:
 * Input: x = -123
 * Output: -321
 * Explanation: The signed integer -123 is reversed to -321.
 */

// Note: I did not even understand the problem at first, had to look for solutions on chatGPT.

/**
 * Mental Model: We need to reverse the digits of a signed 32-bit integer. We can do this by converting the integer to a string, reversing the string, and then converting it back to an integer. We also need to handle the sign and check for overflow.
 */
var reverse = function (x) {
  // Define 32-bit integer range
  const min = -(2 ** 31);
  const max = 2 ** 31;

  // Store the sign of the number
  const sign = x < 0 ? -1 : 1;

  // Reverse the absolute value
  const reversed = Number((Math.abs(x) + "").split("").reverse().join(""));

  // Apply original sign
  const actual = reversed * sign;

  // Return 0 if reversed number is out of range
  if (actual < min || actual > max) return 0;

  // Return reversed number
  return actual;
};
