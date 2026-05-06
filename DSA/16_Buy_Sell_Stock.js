/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * ?Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 *
 * ?Example 2:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 */

/**
 * !Mental Model:
 * We can solve this problem in a single pass by keeping track of the minimum price we have seen so far and calculating the potential profit at each step.
 * We will iterate through the array of prices, and for each price, we will update the minimum price if the current price is lower than the minimum price.
 * We will also calculate the potential profit by subtracting the minimum price from the current price and update the maximum profit if the potential profit is greater than the maximum profit.
 *
 * !Algorithm:
 * 1. Initialize two variables, `minCP` to a very large number (or the first element of the array) and `maxProfit` to 0.
 * 2. Iterate through each price in the array:
 *    - If the current price is less than `minCP`, update `minCP` to the current price.
 *    - Otherwise, calculate the potential profit by subtracting `minCP` from the current price. If this potential profit is greater than `maxProfit`, update `maxProfit`.
 * 3. After iterating through all prices, return `maxProfit`.
 *
 * !Time Complexity: O(n) - We need to iterate through the array once.
 * !Space Complexity: O(1) - We are using only a constant amount of extra space to store the minimum price and maximum profit.
 */

var maxProfit = function (prices) {
  let minCP = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minCP) {
      minCP = price;
    }

    if (price - minCP > maxProfit) {
      maxProfit = price - minCP;
    }
  }

  return maxProfit;
};
