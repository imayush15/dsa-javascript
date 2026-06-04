/**
 * Given an array of integers nums, sort the array in ascending order and return it.
 * You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
 *
 * Example 1:
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 * Explanation: After sorting the array, the result is [1,2,3,5]
 */

/**
 * Merge Sort Algorithm:
 * Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
 *
 * Time Complexity: O(n log n) - The array is divided into two halves log n times, and each merge operation takes O(n) time.
 * Space Complexity: O(n) - The space used for the temporary arrays during the merge process.
 *
 */

/**
 * !MY MENTAL MODEL:
 * The idea is to recursively divide the array into halves until we reach arrays of size one (which are inherently sorted). Then, we merge these sorted halves back together in a sorted manner until we reconstruct the entire sorted array.
 *
 * The sorting process is happening while we are returning from bottom to top.
 */

var sortArray = function (nums) {
  let merge = (low, mid, high) => {
    // Temporary array to store sorted elements
    const temp = [];

    // Start pointers for both halves
    let left = low,
      right = mid + 1;

    // Compare and merge both halves
    while (left <= mid && right <= high) {
      if (nums[left] <= nums[right]) {
        temp.push(nums[left]);
        left++;
      } else {
        temp.push(nums[right]);
        right++;
      }
    }

    // Add remaining elements from left half
    while (left <= mid) {
      temp.push(nums[left]);
      left++;
    }

    // Add remaining elements from right half
    while (right <= high) {
      temp.push(nums[right]);
      right++;
    }

    // Copy sorted elements back to nums
    for (let i = 0; i < temp.length; i++) {
      nums[low + i] = temp[i];
    }
  };

  let mergeSort = (low, high) => {
    // Base case: single element or invalid range
    if (low >= high) return;

    // Find middle index
    const mid = Math.floor(low + (high - low) / 2);

    // Sort left half
    mergeSort(low, mid);

    // Sort right half
    mergeSort(mid + 1, high);

    // Merge sorted halves
    merge(low, mid, high);
  };

  // Start merge sort on full array
  mergeSort(0, nums.length - 1);

  // Return sorted array
  return nums;
};
