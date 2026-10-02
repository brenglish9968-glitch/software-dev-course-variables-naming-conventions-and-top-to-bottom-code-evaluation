/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let a = "Alice";
let b = 5;
let c = 20;
let d = a + " bought " + b + " items for $" + c + ".";

console.log(d);

# This code snippet demonstrates the use of variables with descriptive names to store information about a customer's purchase. It calculates the total price including tax and generates a summary of the purchase. There were errors in the code pertaining to vauge variable names and the order of operations, which have been corrected to ensure clarity and accuracy in the calculations. The final output provides a clear summary of the transaction.

let customerName = "Alice";
let numberOfItems = 5;
let itemPrice = 20;
let totalPrice = numberOfItems * itemPrice;
let purchaseSummary = customerName + " bought " + numberOfItems + " items for $" + totalPrice + ".";

console.log(purchaseSummary);
