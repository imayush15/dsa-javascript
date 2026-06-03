/**
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 * ? Example 1:
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * Explanation: The subsets of the array are listed.
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 */

/**
 * ! Mental Model:
 * ## Find All Subsets - Mental Model
 * A subset is formed by picking some elements from an array without changing their original order.
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
 * ? Time Complexity: O(2^n) where n is the length of the input array. This is because each element can either be included or excluded, leading to 2^n possible subsets.
 * ? Space Complexity: O(n) due to the recursive call stack and the space used to store the current subset.
 */

var subsets = function (nums) {
  const printSubset = (index, arr, result) => {
    // Base case:
    // When index reaches nums.length, it means we have made
    // pick / not-pick decisions for every element in nums.
    if (index === nums.length) {
      // Push a copy of arr into result.
      // We use [...arr] because arr is mutated later using push/pop.
      result.push([...arr]);
      return;
    }

    // Pick case:
    // Include the current element nums[index] in the current subset.
    arr.push(nums[index]);

    // Explore all subsets that include nums[index].
    printSubset(index + 1, arr, result);

    // Backtracking step:
    // Remove the last picked element so that the next branch
    // can explore subsets without nums[index].
    arr.pop();

    // Not-pick case:
    // Skip nums[index] and explore the remaining elements.
    printSubset(index + 1, arr, result);
  };

  // Stores all generated subsets.
  const result = [];

  // Stores the current subset being built.
  const arr = [];

  // Start recursion from index 0.
  printSubset(0, arr, result);

  // Return all generated subsets.
  return result;
};
