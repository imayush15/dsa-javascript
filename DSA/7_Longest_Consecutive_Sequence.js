/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 * 
 * Example 1:

    Input: nums = [100,4,200,1,3,2]
    Output: 4
    Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 */

/**
 * ! Mental Model:
 * We can use a Set to store the unique elements of the array. This allows us to check for the presence of an element in O(1) time.
 * We can then iterate through the set and for each element, we can check if it is the start of a sequence (i.e., if the previous element is not in the set).
 * If it is the start of a sequence, we can keep checking for the next elements in the sequence until we find an element that is not in the set.
 * We can keep track of the length of the longest sequence found so far and return it at the end.
 */

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let maxLength = 0;

  for (let num of set) {
    if (!set.has(nums - 1)) {
      let currentMax = 1;
      let currentNum = num;

      while (set.has(currentNum + 1)) {
        currentMax += 1;
        currentNum += 1;
      }

      maxLength = Math.max(currentMax, maxLength);
    }
  }

  return maxLength;
};
