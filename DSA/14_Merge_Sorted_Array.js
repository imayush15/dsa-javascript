/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 *
 * ?Example 1:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6]. The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 * ?Example 2:
 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 * Explanation: The arrays we are merging are [1] and []. The result of the merge is [1].
 * ?Example 3:
 * Input: nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: [1]
 * Explanation: The arrays we are merging are [] and [1]. The result of the merge is [1]. Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 */

/**
 * !Mental Model:
 * We keep three pointers:
 * - One for the last valid number in nums1 (m - 1) -> p1
 * - One for the last valid number in nums2 (n - 1) -> p2
 * - One for the last position in nums1 (m + n - 1) -> write
 *
 * We compare the elements at the first two pointers (p1 and p2) and place the larger one at the position of the third pointer (write). We then move the corresponding pointer (p1 or p2) and the write pointer backwards. We repeat this process until we have merged all elements from nums2 into nums1.
 *
 * !Algorithm:
 * 1. Initialize three pointers: p1, p2, and write.
 * 2. While p2 >= 0; because we need to iterate the second array completely.
 *    a. If p1 >= 0 and nums1[p1] > nums2[p2], place nums1[p1] at nums1[write] and decrement p1.
 *    b. Else, place nums2[p2] at nums1[write] and decrement p2.
 *    c. Decrement the write pointer.
 *
 * !Time Complexity: O(m + n) - We need to iterate through both arrays once.
 * !Space Complexity: O(1) - We are doing this in-place without using any extra space.
 */

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1; // last real element in nums1
  let p2 = n - 1; // last element in nums2
  let write = m + n - 1; // last position in nums1

  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[write] = nums1[p1];
      p1--;
    } else {
      nums1[write] = nums2[p2];
      p2--;
    }

    write--;
  }
};
