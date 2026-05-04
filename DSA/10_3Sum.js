// !! IMPORTANT QUESTION

/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not matter.
 */

/**
 * ! Mental Model:
 * 1. Sort the input array to facilitate the two-pointer technique.
 * 2. Iterate through the sorted array, fixing one element and using two pointers to find pairs that sum to the negative of the fixed element.
 * 3. Skip duplicate elements to avoid repeating triplets in the result.
 * 4. Move the pointers inward based on whether the current sum is less than, greater than, or equal to zero.
 * 5. Collect valid triplets in a result array and return it at the end.
 *
 * ! Complexity Analysis:
 * - Time Complexity: O(n^2) due to the nested loop and two-pointer traversal.
 * - Space Complexity: O(1) for the two-pointer approach, excluding the space used for the output array.
 */

var threeSum = function (nums) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  const result = [];

  if (nums.length < 3) return result; // If there are fewer than 3 elements, return an empty array

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1; // Initialize the left pointer to the element right after the fixed element
    let right = nums.length - 1; // Initialize the right pointer to the last element of the array

    if (i > 0 && nums[i] === nums[i - 1]) continue; // If the current element is the same as the previous one, skip it as we have already processed it

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++; // If the next element is the same as the current left element, skip the current left pointer and process the next element, to avoid duplicate triplets.

        while (left < right && nums[right - 1] === nums[right]) right--; // If the previous element is the same as the current right element, skip the current right pointer and process the previous element, to avoid duplicate triplets.

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};
