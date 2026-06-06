/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 * ?Example 1:
 * Input: nums = [2,2,1]
 * Output: 1
 *
 * ?Example 2:
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 *
 * ?Example 3:
 * Input: nums = [1]
 * Output: 1
 */

// My Solution
/**
 * I'll use a map to store the count and then I'll filter the map for the number which has count one.
 * !Time Complexity: O(n) - We need to iterate through the array once to count the occurrences and then filter the map.
 * !Space Complexity: O(n) - In the worst case, all elements are unique and we need to store them in the map.
 */

const singleNumber = function (nums) {
  // If the array has only one element, return it immediately.
  if (nums.length === 1) return nums[0];

  // Use a Map to count the occurrences of each number.
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // Increment the count for the current number, or initialize it to 1.
    let count = map.get(nums[i]) + 1 || 1;
    map.set(nums[i], count);
  }

  // Convert the map entries to an array, filter for the entry with count 1,
  // and return the corresponding number.
  return [...map.entries()].filter((e) => e[1] === 1)[0][0];
};
