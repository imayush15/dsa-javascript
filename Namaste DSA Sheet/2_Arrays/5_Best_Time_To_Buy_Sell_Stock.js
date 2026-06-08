/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */

var maxProfit = function (prices) {
  // maxProfit stores the best profit found so far.
  // If no profitable transaction exists, it stays 0.
  let maxProfit = 0;

  // left is the index of the lowest price seen so far.
  // This is the day we would buy the stock.
  let left = 0;

  // Iterate through each day with right as the selling day.
  for (let right = 0; right < prices.length; right++) {
    // If the current price is lower than the price at left,
    // move left to this day because this is a better buy day.
    if (prices[right] < prices[left]) {
      left = right;
      continue;
    } else {
      // Otherwise, calculate the profit if we buy at left and sell at right.
      // Update maxProfit if this profit is higher than any previous profit.
      maxProfit = Math.max(prices[right] - prices[left], maxProfit);
    }
  }

  // Return the maximum profit found after checking all days.
  return maxProfit;
};
