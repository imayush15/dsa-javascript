/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 * In other words, return true if one of s1's permutations is the substring of s2.
 *
 * ? Example 1:
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true
 * Explanation: s2 contains one permutation of s1 ("ba").
 *
 * ? Example 2:
 * Input: s1 = "ab", s2 = "eidboaoo"
 * Output: false
 */

/**
 * ! Brute Force Approach:
 * We can generate all permutations of s1 and check if any of them is a substring of s2. This approach is inefficient, especially for longer strings, as the number of permutations grows factorially.
 *
 * Time Complexity: O(n! * m) where n is the length of s1 and m is the length of s2.
 * Space Complexity: O(n) for storing permutations.
 */

/**
 * ! Sliding Window Approach:
 * We can use a sliding window technique to check for permutations of s1 in s2. We will maintain a frequency count of characters in s1 and compare it with the frequency count of the current window in s2. If they match, it means we have found a permutation.
 *
 * Time Complexity: O(n + m) where n is the length of s1 and m is the length of s2.
 * Space Complexity: O(1) since we are only using fixed-size arrays for character counts.
 */

const areMapsEqual = (map1, map2) => {
  // If both maps do not have the same number of unique characters,
  // they cannot represent the same frequency distribution.
  if (map1.size !== map2.size) return false;

  // Compare every character frequency in map2 with map1.
  // If any character has a different count, maps are not equal.
  for (let [key, value] of map2) {
    if (map1.get(key) !== value) return false;
  }

  // If all characters and their counts match, maps are equal.
  return true;
};

var checkInclusion = function (s1, s2) {
  // i is the left pointer of the sliding window in s2.
  let i = 0;

  // s1Map stores character frequencies of s1.
  // windowMap stores character frequencies of the current window in s2.
  const s1Map = new Map();
  const windowMap = new Map();

  // Build frequency map for s1.
  // Example: s1 = "aab" => a: 2, b: 1
  for (let k = 0; k < s1.length; k++) {
    let count = s1Map.get(s1[k]) || 0;
    s1Map.set(s1[k], count + 1);
  }

  // j is the right pointer of the sliding window.
  // We expand the window by moving j forward.
  for (let j = 0; j < s2.length; j++) {
    // Add the current character into the window frequency map.
    windowMap.set(s2[j], (windowMap.get(s2[j]) || 0) + 1);

    // The required window size is s1.length.
    // If current window becomes bigger than that,
    // remove the leftmost character and move i forward.
    if (j - i + 1 > s1.length) {
      const updatedLeftCount = windowMap.get(s2[i]) - 1;

      // If the character still exists in the window, update its count.
      if (updatedLeftCount > 0) {
        windowMap.set(s2[i], updatedLeftCount);
      }
      // If count becomes 0, remove it from the map completely.
      // This keeps map.size accurate for comparison.
      else {
        windowMap.delete(s2[i]);
      }

      // Shrink the window from the left.
      i++;
    }

    // Once the window size is exactly equal to s1.length,
    // compare both frequency maps.
    // If both maps match, current window is a permutation of s1.
    if (j - i + 1 === s1.length && areMapsEqual(s1Map, windowMap)) {
      return true;
    }
  }

  // No window in s2 matched the frequency map of s1.
  return false;
};
