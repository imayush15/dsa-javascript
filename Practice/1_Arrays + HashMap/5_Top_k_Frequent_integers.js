/**
 * Given an array of integers, return the k most frequent elements in the array.

 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 */

var topKFrequent = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    let count = map.get(curr) || 0;
    map.set(curr, (count += 1));
  }

  const topTwo = [...map.entries()] // convert map to array of [key, value] pairs
    .sort((a, b) => b[1] - a[1]) // sort by frequency in descending order
    .slice(0, k) // take the top k elements
    .map((a) => a[0]); // extract the keys (the numbers) from the top k elements

  return topTwo;
};
