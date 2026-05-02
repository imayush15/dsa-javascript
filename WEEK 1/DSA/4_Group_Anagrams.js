/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

var groupAnagrams = function (strs) {
  const map = new Map([]);
  const result = [];
  const anaGroup = strs.map((a) => a.split("").sort().join(""));

  for (let i = 0; i < strs.length; i++) {
    const currGroup = anaGroup[i];
    const curr = strs[i];
    if (map.has(currGroup)) {
      map.get(currGroup).push(curr);
    } else {
      map.set(currGroup, [curr]);
    }
  }

  map.forEach((v, k) => {
    result.push(v);
  });

  return result;
};
