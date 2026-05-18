// IMPORTANT QUESTION FOR INTERVIEW PREPARATION

/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * * Note: You must write an algorithm that runs in O(n) time and without using the division operation.
 * ? Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]

 * ? Example 2:
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 */

/**
 * ! Mental Model:
 * We can traverse this array twice once from left to right and other time from right to left.
 * In the first traversal, we can keep track of the product of all the elements to the left of the current index and store it in the answer array.
 * In the second traversal, we can keep track of the product of all the elements to the right of the current index and multiply it with the value already stored in the answer array.
 * This way we can get the product of all the elements except the current index without using division.
 */

var productExceptSelf = function (nums) {
  let result = [];

  let leftProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProduct; // Store the product of all the elements to the left of the current index
    leftProduct *= nums[i]; // Update the leftProduct for the next index by multiplying it with the current element
  }

  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
};
