/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * 
 * Example 1:

    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.
 */

/**
 * ! Mental Model:
 * We can use two pointers to check if the string is a palindrome. We can initialize one pointer at the beginning of the string and another pointer at the end of the string. We can then move the pointers towards each other while checking if the characters at the pointers are the same. If they are not the same, we can return false. If they are the same, we can continue moving the pointers until they meet or cross each other. If we reach this point, we can return true.
 */

function normalize(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, ""); // While solving for the first time, I could not get the logic to normalize the string. I had to look up the regex to remove non-alphanumeric characters. The regex /[^a-z0-9]/g matches any character that is not a lowercase letter or a digit and replaces it with an empty string.
}

var isPalindrome = function (s) {
  if (s.length === 0) return true;

  const ns = normalize(s);

  let left = 0;
  let right = ns.length - 1;

  while (left < right) {
    if (ns[left] !== ns[right]) return false;
    else {
      left++;
      right--;
    }
  }

  return true;
};
