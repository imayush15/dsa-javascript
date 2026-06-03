// ? DUTCH NATIONAL FLAG ALGORITHM

/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 * You must solve this problem without using the library's sort function.
 *
 * ?Example 1:
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 *
 * ?Example 2:
 * Input: nums = [2,0,1]
 * Output: [0,1,2]
 */

/**
 * !Mental Model:
 * We can use the **Dutch National Flag Algorithm**, which is a three-pointer approach to sort the array in a single pass.
 * It divides the array into four parts wherein
 * - The first part contains all 0's (0.... low - 1)
 * - The second part contains all 1's (low.... mid - 1)
 * - The third part contains all unsorted elements (mid.... high)
 * - The fourth part contains all the 2's (high + 1.... n - 1)
 *
 * ! Algorithm:
 * We initialize three pointers low, mid and high. According to the above mental model that we have put up.
 * Since the value can either be zero, we need to only cater these three cases.
 * If mid value is 0 -> swap with low and increment both `low` and `mid`.
 * If mid value is 1 -> just increment `mid`.
 * If mid value is 2 -> swap with high and decrement `high`.
 * We repeat this process until `mid` is less than or equal to `high`.
 *
 * !Time Complexity: O(n) - We need to iterate through the array once.
 * !Space Complexity: O(1) - We are doing this in-place without using any extra space.
 */

var sortColors = function (nums) {
  const swap = (index1, index2) => {
    const a = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = a;
  };

  let low = 0;
  let mid = 0; // mid is the current index we are checking, it will move forward until it crosses high
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      swap(low, mid);
      mid++;
      low++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      swap(mid, high);
      high--;
    }
  }
};
