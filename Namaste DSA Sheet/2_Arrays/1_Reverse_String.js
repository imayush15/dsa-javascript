/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // Helper function to swap two characters in the array by index
  const swap = (i, j) => {
    const a = s[i];
    s[i] = s[j];
    s[j] = a;
  };

  // Initialize two pointers: left starts at beginning, right at end
  let left = 0;
  let right = s.length - 1;

  // Move pointers towards each other, swapping characters until they meet
  // Use <= so that for odd-length arrays the middle element is technically
  // swapped with itself (harmless). Using < would also work.
  while (left <= right) {
    swap(left, right);
    left++;
    right--;
  }
};
