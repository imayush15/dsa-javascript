/**
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
 *
 * ? Example 1:
 * Input: temperatures = [73,74,75,71,69,72,76,73]
 * Output: [1,1,4,2,1,1,0,0]
 *
 * ? Example 2:
 * Input: temperatures = [30,40,50,60]
 * Output: [1,1,1,0]
 *
 * ? Example 3:
 * Input: temperatures = [30,60,90]
 * Output: [1,1,0]
 */

/**
 * ! Brute Force Approach:
 * 1. For each day, look ahead to find the next warmer temperature.
 * 2. If a warmer temperature is found, calculate the number of days until that warmer temperature and store it in the answer array.
 * 3. If no warmer temperature is found, store 0 in the answer array.
 */

/**
 * ! Optimal Approach (Using a Stack):
 * 1. Iterate through the temperatures and store the index of the particular temperature in a stack. If while moving forward, you find the temperature which is greater than the array of top, you pop out the top from the array, calculate the difference between the indexes, and store it in a result.
 * 2. If the current temperature is less than or equal to the temperature at the top of the stack, push the current index onto the stack.
 * ? 3. NOTE: One important thing to note here is the result array should be initialized with zeros and should be of the same length as of the temperatures array.
 *
 * 3. Continue this process until you have processed all temperatures. For any indices left in the stack, it means there are no warmer temperatures in the future, so their corresponding values in the answer array will remain 0.
 *
 * ! Complexity Analysis:
 * - Time Complexity: O(n) where n is the length of the input array, since each element is processed at most twice (once when it's added to the stack and once when it's removed).
 * - Space Complexity: O(n) in the worst case when all temperatures are in decreasing order and we push all indices onto the stack.
 */

var dailyTemperatures = function (nums) {
  // Result array initialized with 0.
  // If no warmer day is found for an index, its answer remains 0.
  const result = new Array(nums.length).fill(0);

  // Stack stores indices, not temperatures.
  // These indices are waiting for a future warmer temperature.
  const stack = [];

  for (let i = 0; i < nums.length; i++) {
    // While current temperature is warmer than the temperature
    // at the index stored on top of the stack,
    // we have found the answer for that previous index.
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      // Remove the index whose warmer day is now found.
      const poppedIndex = stack.pop();

      // Difference between current index and popped index
      // gives number of days waited.
      result[poppedIndex] = i - poppedIndex;
    }

    // Current index is now waiting for a future warmer day.
    stack.push(i);
  }

  return result;
};
