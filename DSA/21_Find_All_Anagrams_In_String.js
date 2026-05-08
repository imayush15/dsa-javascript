/**
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
 *
 * ? Example 1:
 * Input: s = "cbaebabacd", p = "abc"
 * Output: [0,6]
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of "abc".
 *
 * ? Example 2:
 * Input: s = "abab", p = "ab"
 * Output: [0,1,2]
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 */

/**
 * ! Brute Force Approach:
 * We can generate all substrings of s that have the same length as p and check if they are anagrams of p. This approach is inefficient, especially for longer strings, as the number of substrings grows quadratically.
 *
 * Time Complexity: O(n^2 * m) where n is the length of s and m is the length of p.
 * Space Complexity: O(m) for storing frequency maps.
 */

/**
 * ! Sliding Window Approach:
 * We can use a sliding window technique to check for anagrams of p in s. We will maintain a frequency count of characters in p and compare it with the frequency count of the current window in s. If they match, it means we have found an anagram.
 *
 * Time Complexity: O(n + m) where n is the length of s and m is the length of p.
 * Space Complexity: O(1) since we are only using fixed-size arrays for character counts.
 */

const areMapsEqual = (map1, map2) => {
  // If both maps do not have the same number of unique characters,
  // they cannot represent the same frequency distribution.
  if (map1.size !== map2.size) return false;

  // Compare every character count from map1 with map2.
  // If any character has a different count, maps are not equal.
  for (let [k, v] of map1) {
    if (map2.get(k) !== v) return false;
  }

  // All characters and counts matched.
  return true;
};

var findAnagrams = function (s, p) {
  // map1 stores frequency of characters in the current window of s.
  const map1 = new Map();

  // map2 stores frequency of characters in p.
  // This is the target frequency map we want to match.
  const map2 = new Map();

  // Stores starting indices of all anagrams found in s.
  const result = [];

  // i is the left pointer of the sliding window.
  let i = 0;

  // Build frequency map for p.
  // Example: p = "abb" => a: 1, b: 2
  for (let k = 0; k < p.length; k++) {
    map2.set(p[k], (map2.get(p[k]) || 0) + 1);
  }

  // j is the right pointer of the sliding window.
  // We expand the window by moving j across s.
  for (let j = 0; j < s.length; j++) {
    // Add current character s[j] into the window map.
    map1.set(s[j], (map1.get(s[j]) || 0) + 1);

    // Required window size is p.length.
    // If the window becomes larger, remove the leftmost character.
    if (j - i + 1 > p.length) {
      const updatedCount = map1.get(s[i]) - 1;

      // If count becomes 0, delete the character from the map.
      // This keeps map.size accurate for comparison.
      if (!updatedCount) {
        map1.delete(s[i]);
      } else {
        // Otherwise, update the reduced count.
        map1.set(s[i], updatedCount);
      }

      // Shrink the window from the left.
      i++;
    }

    // If the current window frequency matches p's frequency,
    // then current window is an anagram of p.
    //
    // Since the window starts at i, push i into result.
    if (areMapsEqual(map1, map2)) {
      result.push(i);
    }
  }

  // Return all starting indices where anagrams of p were found in s.
  return result;
};
