//! SOLVED THIS ALL ON MY OWN WITHOUT ANY HELP, I AM PROUD OF MYSELF :D

/**
 * *Note:The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
 * You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
 * For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
 *
 * Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
 *
 * ? Example 1:
 * Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
 * Output: [-1,3,-1]
 * Explanation: The next greater element for each value of nums1 is as follows:
 * - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
 * - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
 * - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
 *
 * ? Example 2:
 * Input: nums1 = [2,4], nums2 = [1,2,3,4]
 * Output: [3,-1]
 * Explanation: The next greater element for each value of nums1 is as follows:
 * - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
 * - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
 *
 * ? Constraints:
 * - 1 <= nums1.length <= nums2.length <= 1000
 * - 0 <= nums1[i], nums2[i] <= 10^4
 * - All integers in nums1 and nums2 are unique.
 * - All the integers of nums1 also appear in nums2.
 */

/**
 * ! Mental Model:
 * We pick up one element from the `nums1` array. We find out at what index it is sitting in the `nums2` and we iterate from that index to the end of `nums2` and if we find any greater element then we replace the greater element at the index of the `result` array.
 * !! This is Brute Force approach and it is not optimal but it is a straightforward solution to the problem.
 *
 * ?Time Complexity: O(n*m) where n is the length of the `nums1` array and m is the length of the `nums2` array.
 * ?Space Complexity: O(n) where n is the length of the `nums1` array.
 */

var nextGreaterElement = function (nums1, nums2) {
  // Initialize result with -1.
  // If no next greater element is found, value remains -1.
  let result = new Array(nums1.length).fill(-1);

  // Iterate over each element of nums1.
  for (let i = 0; i < nums1.length; i++) {
    // Find the position of nums1[i] in nums2.
    // We only need to search on the right side of this position.
    const indexInNums2 = nums2.indexOf(nums1[i]);

    // Start checking elements after nums1[i] in nums2.
    for (let j = indexInNums2 + 1; j < nums2.length; j++) {
      // First greater element on the right is the answer.
      if (nums2[j] > nums1[i]) {
        result[i] = nums2[j];
        break;
      }
    }
  }

  return result;
};

/**
 * ! Optimal Solution:
 *
 * Approach:
 * Use a monotonic decreasing stack to process nums2 and build a map of each element to its next greater element.
 * Iterate through nums2:
 * - If the current element is greater than the element on top of the stack,
 *   it means the current element is the next greater element for the stack top.
 * - Keep popping from the stack while the current element is greater than the stack top.
 * - For every popped element, store:
 *     poppedElement -> currentElement
  in a map.
 * - Push the current element into the stack.
  
* After processing nums2, the map contains next greater elements for all values that have one.
* Then iterate through nums1 and fill the result array using the map.
* If an element is not present in the map, its next greater element does not exist, so use -1.

* ! Time Complexity: O(n + m)
* - n = nums2.length
* - m = nums1.length
* Each element is pushed and popped at most once.

* ! Space Complexity: O(n)
* - Stack and map can store elements from nums2.
 */

var nextGreaterElement = function (nums1, nums2) {
  // Stores the mapping of each element to its next greater element.
  // Example: 2 -> 4 means next greater element of 2 is 4.
  const nextGreaterMap = new Map();

  // Stack stores elements whose next greater element is not found yet.
  const stack = [];

  // Process nums2 to build the next greater map.
  for (let i = 0; i < nums2.length; i++) {
    const current = nums2[i];

    // If current is greater than the stack top,
    // current is the next greater element for stack top.
    //
    // Keep popping while current can resolve elements from the stack.
    while (stack.length > 0 && current > stack[stack.length - 1]) {
      const poppedElement = stack.pop();

      // Store the next greater element relation.
      nextGreaterMap.set(poppedElement, current);
    }

    // Current element is now waiting for its next greater element.
    stack.push(current);
  }

  // Initialize result with -1.
  // If an element has no next greater element, it remains -1.
  const result = new Array(nums1.length).fill(-1);

  // Build answer for nums1 using the precomputed map.
  for (let i = 0; i < nums1.length; i++) {
    const current = nums1[i];

    // If current exists in the map, update its answer.
    if (nextGreaterMap.has(current)) {
      result[i] = nextGreaterMap.get(current);
    }
  }

  return result;
};
