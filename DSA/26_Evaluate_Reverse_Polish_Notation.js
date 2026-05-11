// ! I WAS ABLE TO SOLVE THIS PROBLEM ON MY OWN WITHOUT ANY HELP, I AM PROUD OF MYSELF :D
/**
 * You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
 * Evaluate the expression. Return an integer that represents the value of the expression.
 *
 * ? Example 1:
 * Input: tokens = ["2","1","+","3","*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 *
 * ? Example 2:
 * Input: tokens = ["4","13","5","/","+"]
 * Output: 4
 * Explanation: (4 + (13 / 5)) = 4 + 2 = 6
 */

/**
 * ! Mental Model:
 * We can use a stack to evaluate the expression. We iterate through the tokens and if we encounter a number, we push it onto the stack. If we encounter an operator, we pop the top two elements from the stack, perform the operation and push the result back onto the stack. At the end of the iteration, the stack will contain only one element which is the result of the expression.
 *
 * ? Time Complexity: O(n) where n is the length of the tokens array.
 * ? Space Complexity: O(n) where n is the length of the tokens array.
 */

/**
 * Helper function to calculate result of two operands
 * based on the given operator.
 *
 * left and right are converted to numbers because tokens
 * are received as strings.
 */
const calculate = (left, right, operator) => {
  left = +left;
  right = +right;

  switch (operator) {
    case "+":
      return left + right;

    case "-":
      return left - right;

    case "/":
      // RPN division should truncate toward zero.
      // Example: Math.trunc(5 / 2) = 2
      // Example: Math.trunc(-5 / 2) = -2
      return Math.trunc(left / right);

    case "*":
      return left * right;

    default:
      // Invalid operator should not silently return a random value.
      throw new Error("Invalid operator");
  }
};

var evalRPN = function (tokens) {
  // If there is only one token, it is already the answer.
  if (tokens.length === 1) return +tokens[0];

  const stack = [];

  // List of valid operators.
  const operators = ["+", "-", "*", "/"];

  for (let i = 0; i < tokens.length; i++) {
    const currentToken = tokens[i];

    // Check whether current token is an operator.
    const isOperator = operators.includes(currentToken);

    if (isOperator) {
      // Order matters:
      // First popped value is the right operand.
      // Second popped value is the left operand.
      const right = stack.pop();
      const left = stack.pop();

      // Calculate result using left, right, and operator.
      const result = calculate(left, right, currentToken);

      // Push result back to stack because it may be used
      // by upcoming operators.
      stack.push(result);
    } else {
      // Current token is a number.
      // Push it to stack for later calculation.
      stack.push(currentToken);
    }
  }

  // Final result will be the only remaining value in the stack.
  return stack[0];
};
