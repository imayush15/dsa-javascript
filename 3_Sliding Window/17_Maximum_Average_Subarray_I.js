/**
 * You are given an integer array nums consisting of n elements, and an integer k.
 * Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
 * Any answer with a calculation error less than 10-5 will be accepted.
 */

/**
 * ! Intuition:
 * - We can use a sliding window approach to solve this problem efficiently.
 * - We will maintain a window of size k and calculate the sum of the elements in that window.
 * - We move the window and we calculate the sum for the new window again.
 * - We find out the average and return the maximum average found during this process.
 */

// Intuitive Code:
var findMaxAverage = function (nums, k) {
  let maxAverage = -Infinity;

  for (let i = 0; i < nums.length - k + 1; i++) {
    let left = i;
    let right = i + k - 1;
    let sum = 0;
    while (left <= right) {
      sum = sum + nums[left];
      left++;
    }
    const avg = sum / k;
    maxAverage = Math.max(maxAverage, avg);
  }

  return maxAverage;
};

/**
 * !Optimized Mental Model
 * * - We can use a sliding window of size k to calculate the sum of the first k elements.
 * * - Then, we can slide the window across the array, adding the next element and removing the first element of the previous window.
 * * - We keep track of the maximum sum encountered during this process.
 * * - Finally, we divide the maximum sum by k to get the maximum average.
 *
 * ! Complexity Analysis:
 * * Time Complexity: O(n) - We traverse the array once to calculate the sums.
 * * Space Complexity: O(1) - We use a constant amount of space for variables.
 */

// Optimized Code:
var findMaxAverage = function (nums, k) {
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  for (let right = k; right < nums.length; right++) {
    windowSum += nums[right];
    windowSum -= nums[right - k];

    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum / k;
};
