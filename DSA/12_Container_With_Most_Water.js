//?? NOTE to Self: I was able to do it on my own, after taking a hint on approach from chatGPT.

/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 *
 * Example 1:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 */

/**
 * ! Mental Model:
 * * - We can use two pointers, one at the beginning and one at the end of the array.
 * * - We can calculate the area of water that can be contained between the two pointers, which is the minimum of the two heights multiplied by the distance between the pointers.
 * * - We can then move the pointer that has the smaller height towards the other pointer, in order to try to find a larger area.
 * * - We can repeat this process until the two pointers meet.
 *
 * ! Time Complexity: O(n) - We traverse the array at most once.
 * ! Space Complexity: O(1) - We use only a constant amount of extra space.
 */

var maxArea = function (height) {
  let maxArea = -1;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left); // Area = height * width, where height is the minimum of the two heights and width is the distance between the two pointers.
    if (area > maxArea) maxArea = area; // Update maxArea if the current area is greater than the maxArea.

    if (height[left] < height[right]) {
      // Move the pointer that has the smaller height towards the other pointer, in order to try to find a larger area.
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
