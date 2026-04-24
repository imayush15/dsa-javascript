/**
 Get Frequency of Elements in an Array
 
 Given an array of integers, count the frequency of each element in the array and return an object where the keys are the unique elements and the values are their corresponding frequencies.
 */

function getFrequency(nums, key) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const freq = map.get(nums[i]) || 0;
    map.set(nums[i], freq + 1);
  }

  return map.get(key);
}
