/**
 * Given an array nums, print all possible subsequences of the array.
 * A subsequence is a sequence that can be formed by picking some elements from the array without changing their original order.
 *
 * ? Example 1:
 * Input: nums = [1, 2]
 * Output: [[], [1], [2], [1, 2]]
 * Explanation: The subsequences of the array are [], [1], [2], and [1, 2].
 */

/**
 * ! Mental Model:
 * ## Print All Subsequences - Mental Model
 * A subsequence is formed by picking some elements from an array without changing their original order.
 * For every element, we have only two choices:
 *
 * 1. Pick the current element
 * 2. Do not pick the current element
 *
 * So recursion builds a decision tree.
 * Example:
 * * nums = [3, 1, 2]
 *
 * index 0: 3
 *├── pick 3
 *│   └── index 1: 1
 *│       ├── pick 1
 *│       │   └── index 2: 2
 *│       │       ├── pick 2     => [3, 1, 2]
 *│       │       └── not pick 2 => [3, 1]
 *│       └── not pick 1
 *│           └── index 2: 2
 *│               ├── pick 2     => [3, 2]
 *│               └── not pick 2 => [3]
 *└── not pick 3
 *    └── index 1: 1
 *        ├── pick 1
 *        │   └── index 2: 2
 *        │       ├── pick 2     => [1, 2]
 *        │       └── not pick 2 => [1]
 *        └── not pick 1
 *            └── index 2: 2
 *                ├── pick 2     => [2]
 *                └── not pick 2 => []
 *
 *
 * ? Time Complexity: O(2^n) where n is the length of the input array. This is because each element can either be included or excluded, leading to 2^n possible subsequences.
 * ? Space Complexity: O(n) due to the recursive call stack and the space used to store the current subsequence.
 */

const subseq = (nums, index, arr) => {
  // Base case:
  // When index reaches nums.length, it means we have made
  // pick / not-pick decisions for every element.
  if (index === nums.length) {
    // Print the current subsequence.
    console.log(arr);
    return;
  }

  // Pick case:
  // Include the current element in the subsequence.
  arr.push(nums[index]);

  // Explore all subsequences that include the current element.
  subseq(nums, index + 1, arr);

  // Backtracking step:
  // Remove the picked element so the not-pick branch starts clean.
  arr.pop();

  // Not-pick case:
  // Skip the current element and explore the remaining elements.
  subseq(nums, index + 1, arr);
};
