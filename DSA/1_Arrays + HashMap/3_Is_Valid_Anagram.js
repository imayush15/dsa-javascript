/**
 * Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 */

/**
 * Thought Process:
 * 1. If the lengths of the strings are different, they cannot be anagrams. Return false.
 * 2. Create a frequency map to count the occurrences of each character in the first string.
 * 3. Iterate through the second string and decrement the counts in the frequency map.
 * 4. If any character in the second string is not found in the frequency map or if any count becomes negative, return false.
 * 5. If we successfully process both strings without issues, return true.
 */

// Code:
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map = new Map();

  for (let i = 0; i < str1.length; i++) {
    map.set(str1[i], (map.get(str1[i]) || 0) + 1);
  }

  for (let i = 0; i < str2.length; i++) {
    const count = map.get(str2[i]);

    if (!count) return false; // handles undefined and 0

    map.set(str2[i], count - 1);
  }

  return true;
}
