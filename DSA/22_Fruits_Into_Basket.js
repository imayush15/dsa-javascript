/**
 * You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

- You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.

- Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.

- Once you reach a tree with fruit that cannot fit in your baskets, you must stop.

Given the integer array fruits, return the maximum number of fruits you can pick.

 
Example 1:

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.
Example 2:

Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2]. If we had started at the first tree, we would only pick from trees [0,1].
Example 3:

Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2]. If we had started at the first tree, we would only pick from trees [1,2].
 */

/**
 * Brute Force Approach:
 * - We can use two nested loops to check every possible starting point and count the number of fruits we can pick until we encounter a fruit that cannot fit in our baskets.
 * - Time Complexity: O(n^2) where n is the number of trees.
 * - Space Complexity: O(1) since we are using a constant amount of space.
 */

/**
 * ! Optimized Approach (Sliding Window):
 * - We can use a sliding window technique to keep track of the types of fruits in our baskets and the count of each type.
 * - We will expand the window to the right until we encounter a fruit that cannot fit in our baskets, at which point we will shrink the window from the left until we can fit the new fruit.
 *
 * !- Time Complexity: O(n) where n is the number of trees, since each tree is visited at most twice (once when expanding and once when shrinking).
 * !- Space Complexity: O(1) since we are using a constant amount of space to store the types of fruits and their counts.
 */

var totalFruit = function (f) {
  // Map stores fruit type -> count inside the current window.
  // The current window represents the trees from index i to index j.
  const map = new Map();

  // i is the left pointer of the sliding window.
  let i = 0;

  // Stores the maximum valid window length found so far.
  let maxLen = 0;

  // j is the right pointer.
  // We expand the window by moving j from left to right.
  for (let j = 0; j < f.length; j++) {
    // Add the current fruit into the window.
    map.set(f[j], (map.get(f[j]) || 0) + 1);

    // The window is invalid if it contains more than 2 fruit types.
    // Since we only have 2 baskets, we can keep at most 2 unique fruits.
    while (map.size > 2) {
      // Remove one occurrence of the leftmost fruit from the window.
      const updatedCount = map.get(f[i]) - 1;

      // If this fruit type no longer exists in the window,
      // remove it completely from the map.
      if (updatedCount === 0) {
        map.delete(f[i]);
      } else {
        // Otherwise, just update its reduced count.
        map.set(f[i], updatedCount);
      }

      // Shrink the window from the left.
      i++;
    }

    // At this point, the window is valid:
    // it contains at most 2 unique fruit types.
    //
    // Window length = j - i + 1
    maxLen = Math.max(maxLen, j - i + 1);
  }

  // Maximum number of fruits that can be collected.
  return maxLen;
};
