/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. 
 * Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.
 * The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.
 * 
 * Example 1:
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).

 * Example 2:
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 * Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).
 */

/**
 * ! Mental Model:
 * 1. Use two pointers to traverse the array: one for iterating through the array and another for tracking the position of unique elements.
 * 2. Compare the current element with the last unique element found. If they are different, it means we have found a new unique element.
 * 3. Move the unique pointer forward and update the value at that position with the new unique element.
 * 4. Continue this process until we have traversed the entire array.
 * 5. The unique pointer will indicate the number of unique elements in the array, which is returned at the end.
 *
 * ! Complexity Analysis:
 * - Time Complexity: O(n) where n is the length of the input array, since we traverse it once.
 * - Space Complexity: O(1) since we are modifying the array in place and using only a constant amount of extra space.
 */

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let write = 1;

  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[read - 1]) {
      nums[write] = nums[read];
      write++;
    }
  }
  return write;
};
