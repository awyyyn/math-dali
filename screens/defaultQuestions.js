export const beginnerLevel1 = [
	{
		id: "1",
		level: 1,
		question: "Evaluate the expression: 3 * (7 - 4) + 2",
		options: [
			{ option: "15" },
			{ option: "8" },
			{ option: "11" },
			{ option: "14" },
		],
		answer: "11",
		solution: `\n\nTo evaluate the expression: 3 * (7 - 4) + 2

You should follow the order of operations (PEMDAS/BODMAS), which stands for Parentheses/Brackets, Exponents/Orders (i.e., powers and square roots, etc.), Multiplication and Division (left-to-right), and Addition and Subtraction (left-to-right). In this case, start with the operations inside the parentheses:

Inside the parentheses, you have 7 - 4, which equals 3.

Now, the expression becomes: 3 * 3 + 2

Next, perform the multiplication: 3 * 3 = 9

Now, the expression becomes: 9 + 2

Finally, perform the addition: 9 + 2 = 11

So, the final result of the expression 
3 * (7 - 4) + 2 is 11.
        `,
	},
	{
		id: "2",
		level: 1,
		question: "What is the slope of the equation: y = 2x + 6",
		options: [
			{ option: "2x" },
			{ option: "2" },
			{ option: "6" },
			{ option: "-2" },
		],
		answer: "2",
		solution:
			"\n\nIn the equation y = mx + b, m is the slope of the line and b is the intercept. x and y represent the distance of the line from the x-axis and y-axis, respectively.",
	},
	{
		id: "3",
		level: 1,
		question:
			"If you receive a discount of 20% on an item that costs $80, how much money do you save?",
		options: [
			{ option: "$20.00" },
			{ option: "$16.00" },
			{ option: "$18.00" },
			{ option: "$32.00" },
		],
		answer: "$16.00",
		solution: `

To calculate the amount of money saved when receiving a 20% discount on an item that costs $80, you can follow these steps:

Step 1: Find 20% of $80, which represents the discount amount. To find a percentage of a number, multiply the number by the percentage as a decimal (20% is equivalent to 0.20 as a decimal):

Discount = 0.20 * $80 = $16

Step 2: The discount amount is $16. This is the money you save when you receive a 20% discount on the $80 item. So, you save $16.
        `,
	},
	{
		id: "4",
		level: 1,
		question: "Identify which of the following is an algebraic expression?",
		options: [
			{ option: "3x" },
			{ option: "3x+5" },
			{ option: "3x+5=11" },
			{ option: "all of the above" },
		],
		answer: "3x+5",
		solution:
			"\n\nIn basic algebra, an expression is a mathematical phrase that can contain numbers, variables, and operations (like addition, subtraction, multiplication, and division). For example, \"3x + 5\" is an expression because it combines the variable 'x' with numbers and operations.",
	},
	{
		id: "5",
		level: 1,
		question: "Identify which of the following is an algebraic equation?",
		options: [
			{ option: "3x" },
			{ option: "3x+5" },
			{ option: "3x+5=11" },
			{ option: "both b & c" },
		],
		answer: "3x+5=11",
		solution:
			'\n\nAn equation is a statement that shows that two expressions are equal. It uses an equal sign \'=\' to indicate this equality. For example, "3x + 5 = 11" is an equation because it states that the expression "3x + 5" is equal to the expression "11." Solving an equation typically involves finding the value of the variable (in this case, \'x\') that makes both sides of the equation equal.',
	},
	{
		id: "6",
		level: 1,
		question: "Evaluate the expression: 4 * (9 - 4) + 2",
		options: [
			{ option: "36" },
			{ option: "22" },
			{ option: "28" },
			{ option: "18" },
		],
		answer: "22",
		solution: `
To evaluate the expression 4 * (9 - 4) + 2, you should follow the order of operations, which is often remembered using the acronym PEMDAS:
1.Parentheses
2.Exponents
3.Multiplication and Division (from left to right)
4.Addition and Subtraction (from left to right)
In this expression, the first step is to evaluate what's inside the parentheses: 9 - 4 = 5
Now the expression becomes: 4 * 5 + 2
Next, perform the multiplication: 4 * 5 = 20
Now the expression becomes: 20 + 2
Finally, perform the addition: 20 + 2 = 22
So, the final answer is 22.
In summary, you first calculated the value inside the parentheses, which is 5, and then proceeded with the multiplication and addition to get the final result of 22.
		`,
	},
	{
		id: "7",
		level: 1,
		question: "Evaluate the expression: 5 * (2 - 4) – 3",
		options: [
			{ option: "13" },
			{ option: "7" },
			{ option: "-13" },
			{ option: "-7" },
		],
		answer: "-13",
		solution: `
To evaluate the expression 5 * (2 - 4) - 3, you should follow the order of operations (PEMDAS) as explained in the previous response:
1. Parentheses
2.Exponents
3.Multiplication and Division (from left to right)
4.Addition and Subtraction (from left to right)
Let's break it down step by step:
Inside the parentheses, evaluate 2 - 4: 
2 - 4 = -2
Now the expression becomes: 5 * (-2) - 3
Next, perform the multiplication: 5 * (-2) = -10
Now the expression becomes: -10 - 3
Finally, perform the subtraction: -10 - 3 = -13
So, the final answer is -13.
In summary, you first calculated the value inside the parentheses, which is -2, then proceeded with the multiplication and subtraction to get the final result of -13.
`,
	},
	{
		id: "8",
		level: 1,
		question: "Evaluate the expression: 9 * (5 - 3) – 19",
		options: [
			{ option: "-2" },
			{ option: "2" },
			{ option: "-4" },
			{ option: "-1" },
		],
		answer: "-1",
		solution: `
To evaluate the expression 9 * (5 - 3) - 19, you should follow the order of operations (PEMDAS) as explained in the previous responses:
1.Parentheses
2.Exponents
3.Multiplication and Division (from left to right)
4.Addition and Subtraction (from left to right)
Let's break it down step by step:
Inside the parentheses, evaluate 5 - 3:
5 - 3 = 2
Now the expression becomes: 9 * 2 – 19
Next, perform the multiplication: 9 * 2 = 18
Now the expression becomes: 18 - 19
Finally, perform the subtraction: 18 - 19 = -1
So, the final answer is -1.
In summary, you first calculated the value inside the parentheses, which is 2, then proceeded with the multiplication and subtraction to get the final result of -1.
`,
	},
	{
		id: "9",
		level: 1,
		question: "Evaluate the expression: 3 * (5 - 7) – 7",
		options: [
			{ option: "13" },
			{ option: "-27" },
			{ option: "27" },
			{ option: "-13" },
		],
		answer: "-13",
		solution: `
To evaluate the expression 3 * (5 - 7) - 7, you should follow the order of operations (PEMDAS) as explained in previous responses:
1.Parentheses
2.Exponents
3.Multiplication and Division (from left to right)
4.Addition and Subtraction (from left to right)
5.Let's break it down step by step:
Inside the parentheses, evaluate 5 - 7:
5 - 7 = -2
Now the expression becomes: 3 * (-2) - 7
Next, perform the multiplication: 3 * (-2) = -6
Now the expression becomes: -6 - 7
Finally, perform the subtraction: -6 - 7 = -13
So, the final answer is -13.
In summary, you first calculated the value inside the parentheses, which is -2, then proceeded with the multiplication and subtraction to get the final result of -13.
`,
	},
	{
		id: "10",
		level: 1,
		question: "Evaluate the expression: -2 * (2 + 4) + 4",
		options: [
			{ option: "8" },
			{ option: "-8" },
			{ option: "20" },
			{ option: "-20" },
		],
		answer: "-8",
		solution: `
To evaluate the expression -2 * (2 + 4) + 4, you should follow the order of operations (PEMDAS) as explained in previous responses:
1.Parentheses
2.Exponents
3.Multiplication and Division (from left to right)
4.Addition and Subtraction (from left to right)
Let's break it down step by step:
Inside the parentheses, evaluate 2 + 4:
2 + 4 = 6
Now the expression becomes: -2 * 6 + 4
Next, perform the multiplication: -2 * 6 = -12
Now the expression becomes: -12 + 4
Finally, perform the addition: -12 + 4 = -8
So, the final answer is -8.
In summary, you first calculated the value inside the parentheses, which is 6, then proceeded with the multiplication and addition to get the final result of -8.
`,
	},
	{
		id: "11",
		level: 1,
		question: "Evaluate the expression: 0 * (2 + 4) – 6",
		options: [
			{ option: "0" },
			{ option: "1" },
			{ option: "-6" },
			{ option: "6" },
		],
		answer: "-8",
		solution: `
To evaluate the expression 0 * (2 + 4) - 6, you should follow the order of operations (PEMDAS) as explained in previous responses:
1.Parentheses
2.Exponents
3.Multiplication and Division (from left to right)
4.Addition and Subtraction (from left to right)
Let's break it down step by step:
Inside the parentheses, evaluate 2 + 4:
2 + 4 = 6
Now the expression becomes: 0 * 6 - 6
Next, perform the multiplication: 0 * 6 = 0
Now the expression becomes: 0 - 6
Finally, perform the subtraction: 0 - 6 = -6
So, the final answer is -6.
In summary, you first calculated the value inside the parentheses, which is 6, and then proceeded with the multiplication and subtraction to get the final result of -6.
`,
	},
	{
		id: "12",
		level: 1,
		question: "Evaluate the expression: 1 * (2 + 9) – 9",
		options: [
			{ option: "-2" },
			{ option: "2" },
			{ option: "20" },
			{ option: "-20" },
		],
		answer: "2",
		solution: `
To evaluate the expression 1 * (2 + 9) - 9, you should follow the order of operations (PEMDAS) as explained in previous responses:
1.Parentheses
2.Exponents
3.Multiplication and Division (from left to right)
4.Addition and Subtraction (from left to right)
Let's break it down step by step:
Inside the parentheses, evaluate 2 + 9:
2 + 9 = 11
Now the expression becomes: 1 * 11 - 9
Next, perform the multiplication: 1 * 11 = 11
Now the expression becomes: 11 - 9
Finally, perform the subtraction: 11 - 9 = 2
So, the final answer is 2.
In summary, you first calculated the value inside the parentheses, which is 11, then proceeded with the multiplication and subtraction to get the final result of 2.
`,
	},
	{
		id: "13",
		level: 1,
		question: "Evaluate the expression: 2 * (5 + 9)/2 – 9",
		options: [
			{ option: "-4" },
			{ option: "4" },
			{ option: "-5" },
			{ option: "5" },
		],
		answer: "5",
		solution: `
To evaluate the expression 2 * (5 + 9)/2 - 9, you should follow the order of operations (PEMDAS) as explained in previous responses:
1.Parentheses
2.Exponents
3.Multiplication and Division (from left to right)
4.Addition and Subtraction (from left to right)
Let's break it down step by step:
Inside the first set of parentheses, evaluate 5 + 9:
5 + 9 = 14
Now the expression becomes: 2 * (14)/2 - 9
Next, perform the multiplication: 2 * (14) = 28
Now the expression becomes: 28/2 - 9
Now, perform the division: 28/2 = 14
Now the expression becomes: 14 - 9
Finally, perform the subtraction: 14 - 9 = 5
So, the final answer is 5.
In summary, you first calculated the value inside the parentheses, then proceeded with the multiplication, division, and finally the subtraction to get the final result of 5.
`,
	},
	{
		id: "14",
		level: 1,
		question: "Evaluate the expression: 2 - (5 + 11) / 2",
		options: [
			{ option: "-6" },
			{ option: "6" },
			{ option: "-7" },
			{ option: "7" },
		],
		answer: "-6",
		solution: `
To evaluate the expression 2 - (5 + 11) / 2, you should follow the order of operations (PEMDAS) as explained in previous responses:
1.Parentheses
2.Exponents
3.Multiplication and Division (from left to right)
4.Addition and Subtraction (from left to right)
Let's break it down step by step:
Inside the parentheses, evaluate 5 + 11:
5 + 11 = 16
Now the expression becomes: 2 - 16 / 2
Next, perform the division: 16 / 2 = 8
Now the expression becomes: 2 - 8
Finally, perform the subtraction: 2 - 8 = -6
So, the final answer is -6.
In summary, you first calculated the value inside the parentheses, then proceeded with the division and finally the subtraction to get the final result of -6.
`,
	},
	{
		id: "15",
		level: 1,
		question: "Evaluate the expression: 4 - (8 + 8) / 4",
		options: [
			{ option: "3" },
			{ option: "-3" },
			{ option: "0" },
			{ option: "none of the above" },
		],
		answer: "0",
		solution: `
To evaluate the expression 4 - (8 + 8) / 4, you should follow the order of operations (PEMDAS) as explained in previous responses:
1.Parentheses
2.Exponents
3.Multiplication and Division (from left to right)
4.Addition and Subtraction (from left to right)
Let's break it down step by step:
Inside the parentheses, evaluate 8 + 8:
8 + 8 = 16
Now the expression becomes: 4 - 16 / 4
Next, perform the division: 16 / 4 = 4
Now the expression becomes: 4 – 4
Finally, perform the subtraction: 4 - 4 = 0
So, the final answer is 0.
In summary, you first calculated the value inside the parentheses, then proceeded with the division and finally the subtraction to get the final result of 0.
`,
	},
	{
		id: "16",
		level: 1,
		question: "Evaluate the expression: 4 - (11 + 17) / 4",
		options: [
			{ option: "3" },
			{ option: "-3" },
			{ option: "6" },
			{ option: "-6" },
		],
		answer: "-3",
		solution: `
To evaluate the expression 4 - (11 + 17) / 4, you should follow the order of operations (PEMDAS) as explained in previous responses:
1.Parentheses
2.Exponents
3.Multiplication and Division (from left to right)
4.Addition and Subtraction (from left to right)
Let's break it down step by step:
Inside the parentheses, evaluate 11 + 17:
11 + 17 = 28
Now the expression becomes: 4 - 28 / 4
Next, perform the division: 28 / 4 = 7
Now the expression becomes: 4 - 7
Finally, perform the subtraction: 4 - 7 = -3
So, the final answer is -3.
In summary, you first calculated the value inside the parentheses, then proceeded with the division, and finally the subtraction to get the final result of -3.
`,
	},
	{
		id: "17",
		level: 1,
		question: "Evaluate the expression: 14 - (11 + 10) / 1",
		options: [
			{ option: "7" },
			{ option: "8" },
			{ option: "1" },
			{ option: "none of the above" },
		],
		answer: "none of the above",
		solution: `
To evaluate the expression 14 - (11 + 10) / 1, you can follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the parentheses, evaluate 11 + 10:
11 + 10 = 21
Now the expression becomes: 14 - 21 / 1
Next, perform the division: 21 / 1 = 21
Now the expression becomes: 14 - 21
Finally, perform the subtraction: 14 - 21 = -7
So, the final answer is -7.
In summary, you first calculated the value inside the parentheses, which is 21, and then proceeded with the division and subtraction to get the final result of -7.
`,
	},
	{
		id: "18",
		level: 1,
		question: "Evaluate the expression: 13 - (11 + 16) / 3",
		options: [
			{ option: "14/3" },
			{ option: "-14/3" },
			{ option: "4" },
			{ option: "-4" },
		],
		answer: "4",
		solution: `
To evaluate the expression 13 - (11 + 16) / 3, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the parentheses, evaluate 11 + 16:
11 + 16 = 27
Now the expression becomes: 13 - 27 / 3
Next, perform the division: 27 / 3 = 9
Now the expression becomes: 13 - 9
Finally, perform the subtraction: 13 - 9 = 4
So, the final answer is 4.
In summary, you first calculated the value inside the parentheses, which is 27, and then proceeded with the division and subtraction to get the final result of 4.
`,
	},
	{
		id: "19",
		level: 1,
		question: "Evaluate the expression: 11 - (10 + 2) / 3",
		options: [
			{ option: "-7" },
			{ option: "7" },
			{ option: "1/3" },
			{ option: "-1/3" },
		],
		answer: "7",
		solution: `
To evaluate the expression 11 - (10 + 2) / 3, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the parentheses, evaluate 10 + 2:
10 + 2 = 12
Now the expression becomes: 11 - 12 / 3
Next, perform the division: 12 / 3 = 4
Now the expression becomes: 11 - 4
Finally, perform the subtraction: 11 - 4 = 7
So, the final answer is 7.
In summary, you first calculated the value inside the parentheses, which is 12, and then proceeded with the division and subtraction to get the final result of 7.
`,
	},
	{
		id: "20",
		level: 1,
		question: "Evaluate the expression: 17 - (16 + 8) / 4",
		options: [
			{ option: "7/4" },
			{ option: "-7/4" },
			{ option: "11" },
			{ option: "-11" },
		],
		answer: "11",
		solution: `
To evaluate the expression 17 - (16 + 8) / 4, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the parentheses, evaluate 16 + 8:
16 + 8 = 24
Now the expression becomes: 17 - 24 / 4
Next, perform the division: 24 / 4 = 6
Now the expression becomes: 17 - 6
Finally, perform the subtraction: 17 - 6 = 11
So, the final answer is 11.
In summary, you first calculated the value inside the parentheses, which is 24, and then proceeded with the division and subtraction to get the final result of 11.
`,
	},
	{
		id: "21",
		level: 1,
		question: "Evaluate the expression: -7 + (16 + 19) / 5",
		options: [
			{ option: "7/5" },
			{ option: "-14" },
			{ option: "14" },
			{ option: "0" },
		],
		answer: "0",
		solution: `
To evaluate the expression -7 + (16 + 19) / 5, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the parentheses, evaluate 16 + 19:
16 + 19 = 35
Now the expression becomes: -7 + 35 / 5
Next, perform the division: 35 / 5 = 7
Now the expression becomes: -7 + 7
Finally, perform the addition: -7 + 7 = 0
So, the final answer is 0.
In summary, you first calculated the value inside the parentheses, which is 35, and then proceeded with the division and addition to get the final result of 0.
`,
	},
	{
		id: "22",
		level: 1,
		question: "Evaluate the expression: -2 - (17 + 19) / -6",
		options: [
			{ option: "-8" },
			{ option: "8" },
			{ option: "4" },
			{ option: "-4" },
		],
		answer: "4",
		solution: `
To evaluate the expression -2 - (17 + 19) / -6, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the parentheses, evaluate 17 + 19:
17 + 19 = 36
Now the expression becomes: -2 - 36 / -6
Next, perform the division: 36 / -6 = -6
Now the expression becomes: -2 - (-6)
Finally, perform the subtraction: -2 - (-6) = -2 + 6 = 4
So, the final answer is 4.
In summary, you first calculated the value inside the parentheses, which is 36, then proceeded with the division and finally the subtraction to get the final result of 4.
`,
	},
	{
		id: "23",
		level: 1,
		question: "Evaluate the expression: 8 - (4 * 7) / -2",
		options: [
			{ option: "22" },
			{ option: "6" },
			{ option: "-6" },
			{ option: "-22" },
		],
		answer: "22",
		solution: `
To evaluate the expression 8 - (4 * 7) / -2, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the parentheses, evaluate 4 * 7:
4 * 7 = 28
Now the expression becomes: 8 - 28 / -2
Next, perform the division: 28 / -2 = -14
Now the expression becomes: 8 - (-14)
Finally, perform the subtraction: 8 - (-14) = 8 + 14 = 22
So, the final answer is 22.
In summary, you first calculated the value inside the parentheses, which is 28, then proceeded with the division and finally the subtraction to get the final result of 22.
`,
	},
	{
		id: "24",
		level: 1,
		question: "Evaluate the expression: 4 - (4 * 9) / 3",
		options: [
			{ option: "8" },
			{ option: "-8" },
			{ option: "16" },
			{ option: "-16" },
		],
		answer: "-8",
		solution: `
To evaluate the expression 4 - (4 * 9) / 3, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the parentheses, evaluate 4 * 9:
4 * 9 = 36
Now the expression becomes: 4 - 36 / 3
Next, perform the division: 36 / 3 = 12
Now the expression becomes: 4 - 12
Finally, perform the subtraction: 4 - 12 = -8
So, the final answer is -8.
In summary, you first calculated the value inside the parentheses, which is 36, then proceeded with the division and finally the subtraction to get the final result of -8.
`,
	},
	{
		id: "25",
		level: 1,
		question: "Evaluate the expression: (11 + 14) / 5 + 2",
		options: [
			{ option: "25/7" },
			{ option: "7/25" },
			{ option: "7" },
			{ option: "none of the above" },
		],
		answer: "7",
		solution: `
To evaluate the expression (11 + 14) / 5 + 2, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 11 + 14:
11 + 14 = 25
Now the expression becomes: 25 / 5 + 2
Next, perform the division: 25 / 5 = 5
Now the expression becomes: 5 + 2
Finally, perform the addition: 5 + 2 = 7
So, the final answer is 7.
In summary, you first calculated the value inside the parentheses, which is 25, then proceeded with the division and finally the addition to get the final result of 7
`,
	},
	{
		id: "26",
		level: 1,
		question: "Evaluate the expression: (21 - 3) / 6 – 2",
		options: [
			{ option: "18/4" },
			{ option: "9/2" },
			{ option: "1" },
			{ option: "both b and c" },
		],
		answer: "1",
		solution: `
To evaluate the expression (21 - 3) / 6 - 2, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 21 - 3:
21 - 3 = 18
Now the expression becomes: 18 / 6 - 2
Next, perform the division: 18 / 6 = 3
Now the expression becomes: 3 - 2
Finally, perform the subtraction: 3 - 2 = 1
So, the final answer is 1.
In summary, you first calculated the value inside the parentheses, which is 18, then proceeded with the division and finally the subtraction to get the final result of 1.
		`,
	},
	{
		id: "27",
		level: 1,
		question: "Evaluate the expression: (21 - 7) + 6 / 2",
		options: [
			{ option: "9/2" },
			{ option: "6" },
			{ option: "10" },
			{ option: "17" },
		],
		answer: "17",
		solution: `
To evaluate the expression (21 - 7) + 6 / 2, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 21 - 7:
21 - 7 = 14
Now the expression becomes: 14 + 6 / 2
Next, perform the division: 6 / 2 = 3
Now the expression becomes: 14 + 3
Finally, perform the addition: 14 + 3 = 17
So, the final answer is 17.
In summary, you first calculated the value inside the parentheses, which is 14, then proceeded with the division and finally the addition to get the final result of 17.
`,
	},
	{
		id: "28",
		level: 1,
		question: "Evaluate the expression: (17 - 4) + 9 / -3",
		options: [
			{ option: "22/3" },
			{ option: "16" },
			{ option: "10" },
			{ option: "-16" },
		],
		answer: "10",
		solution: `
To evaluate the expression (17 - 4) + 9 / -3, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 17 - 4:
17 - 4 = 13
Now the expression becomes: 13 + 9 / -3
Next, perform the division: 9 / -3 = -3
Now the expression becomes: 13 + (-3)
Finally, perform the addition: 13 + (-3) = 10
So, the final answer is 10.
In summary, you first calculated the value inside the parentheses, which is 13, then proceeded with the division and finally the addition to get the final result of 10.
`,
	},
	{
		id: "29",
		level: 1,
		question: "Evaluate the expression: (11 - 4) + 17 / 17",
		options: [
			{ option: "7" },
			{ option: "-7" },
			{ option: "24/17" },
			{ option: "8" },
		],
		answer: "8",
		solution: `
To evaluate the expression (11 - 4) + 17 / 17, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 11 - 4:
11 - 4 = 7
Now the expression becomes: 7 + 17 / 17
Next, perform the division: 17 / 17 = 1
Now the expression becomes: 7 + 1
Finally, perform the addition: 7 + 1 = 8
So, the final answer is 8.
In summary, you first calculated the value inside the parentheses, which is 7, then proceeded with the division and finally the addition to get the final result of 8.
`,
	},
	{
		id: "30",
		level: 1,
		question: "Evaluate the expression: (11 - 2) * 3 – 7",
		options: [
			{ option: "36" },
			{ option: "-36" },
			{ option: "20" },
			{ option: "none of the above" },
		],
		answer: "20",
		solution: `
To evaluate the expression (11 - 2) * 3 - 7, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 11 - 2:
11 - 2 = 9
Now the expression becomes: 9 * 3 - 7
Next, perform the multiplication: 9 * 3 = 27
Now the expression becomes: 27 - 7
Finally, perform the subtraction: 27 - 7 = 20
So, the final answer is 20.
In summary, you first calculated the value inside the parentheses, which is 9, then proceeded with the multiplication and finally the subtraction to get the final result of 20.
`,
	},
	{
		id: "31",
		level: 1,
		question: "What is the slope of the equation: y = -3x – 6",
		options: [
			{ option: "3" },
			{ option: "-3" },
			{ option: "3x" },
			{ option: "-6" },
		],
		answer: "20",
		solution: `
The slope of a linear equation in the form y = mx + b is represented by the coefficient "m" in the equation. In the equation, y = -3x - 6, the coefficient of x is -3, which is the slope.
So, the slope of the equation y = -3x - 6 is -3. This means that for every one-unit increase in the x-coordinate, the y-coordinate decreases by 3 units. Conversely, for every one-unit decrease in the x-coordinate, the y-coordinate increases by 3 units. The negative sign indicates that the line has a negative slope, meaning it is a decreasing line that slants downward from left to right on a graph.
`,
	},
	{
		id: "32",
		level: 1,
		question: "What is the y intercept of the equation: y = 2x + 6",
		options: [
			{ option: "2x" },
			{ option: "6" },
			{ option: "3" },
			{ option: "2x + 6" },
		],
		answer: "6",
		solution: `
In the equation y = 2x + 6, the term "6" is the y-intercept. The y-intercept is the point where the graph of the equation crosses or intersects the y-axis. In this case, when x is 0 (as we're at the y-axis), you can see that y is 6. So, the y-intercept is 6.

To put it another way, the y-intercept is the value of y when x is 0. In the equation y = 2x + 6, if you substitute x = 0, you get y = 2(0) + 6, which simplifies to y = 6. This confirms that the y-intercept is indeed 6.
`,
	},
	{
		id: "33",
		level: 1,
		question: "What is the slope of the equation: -3x - 6 = y",
		options: [
			{ option: "3x" },
			{ option: "-3x" },
			{ option: "-2" },
			{ option: "-3" },
		],
		answer: "-3",
		solution: `
The equation -3x - 6 = y can be rewritten in slope-intercept form (y = mx + b) to determine the slope. To do this, we need to solve for y:
-3x - 6 = y
Now, add 3x to both sides to isolate y:
y = -3x - 6
Now, the equation is in slope-intercept form, where the coefficient of x (-3 in this case) is the slope.
So, the slope of the equation -3x - 6 = y is -3. This means that for every one-unit increase in the x-coordinate, the y-coordinate decreases by 3 units, and for every one-unit decrease in the x-coordinate, the y-coordinate increases by 3 units.
`,
	},
	{
		id: "34",
		level: 1,
		question: "What is the slope of the equation: 6 = y - 2x",
		options: [
			{ option: "-2x" },
			{ option: "2x" },
			{ option: "2" },
			{ option: "-2" },
		],
		answer: "-2",
		solution: `
To find the slope of the equation 6 = y - 2x, you need to rearrange it into slope-intercept form (y = mx + b), where "m" represents the slope. First, add 2x to both sides of the equation to isolate y:
6 = y - 2x
Now, add 2x to both sides:
y = 2x + 6
Now, the equation is in slope-intercept form, where the coefficient of x (2 in this case) is the slope.
So, the slope of the equation 6 = y - 2x is 2. This means that for every one-unit increase in the x-coordinate, the y-coordinate increases by 2 units, and for every one-unit decrease in the x-coordinate, the y-coordinate decreases by 2 units.
		
`,
	},
	{
		id: "35",
		level: 1,
		question: "What is the slope of the equation: 6 + 2 = y + 3x",
		options: [
			{ option: "3x" },
			{ option: "8" },
			{ option: "-3x" },
			{ option: "-3" },
		],
		answer: "-3",
		solution: `
To find the slope of the equation 6 + 2 = y + 3x, you need to rearrange it into slope-intercept form (y = mx + b), where "m" represents the slope. First, simplify the equation by adding 6 and 2 on the left side:
6 + 2 = y + 3x
8 = y + 3x
Now, isolate y by subtracting 3x from both sides:
y = 8 - 3x
Now, the equation is in slope-intercept form, where the coefficient of x (-3 in this case) is the slope.
So, the slope of the equation 6 + 2 = y + 3x is -3. This means that for every one-unit increase in the x-coordinate, the y-coordinate decreases by 3 units, and for every one-unit decrease in the x-coordinate, the y-coordinate increases by 3 units.	
`,
	},
	{
		id: "36",
		level: 1,
		question: "What is the slope of the equation: -y = 2x – 3",
		options: [
			{ option: "-2x" },
			{ option: "-2" },
			{ option: "2" },
			{ option: "3" },
		],
		answer: "-2",
		solution: `
To find the slope of the equation -y = 2x - 3, you need to rearrange it into slope-intercept form (y = mx + b), where "m" represents the slope. First, isolate y by multiplying both sides of the equation by -1 to get rid of the negative sign in front of y:
-y = 2x - 3
Multiplying both sides by -1:
y = -2x + 3
Now, the equation is in slope-intercept form, where the coefficient of x (-2 in this case) is the slope.
So, the slope of the equation -y = 2x - 3 is -2. This means that for every one-unit increase in the x-coordinate, the y-coordinate decreases by 2 units, and for every one-unit decrease in the x-coordinate, the y-coordinate increases by 2 units.
`,
	},
	{
		id: "37",
		level: 1,
		question: "What is the slope of the equation: -y = -5x + 9",
		options: [
			{ option: "5" },
			{ option: "-5" },
			{ option: "-5x" },
			{ option: "-5/9" },
		],
		answer: "5",
		solution: `
To find the slope of the equation -y = 2x - 3, you need to rearrange it into slope-intercept form (y = mx + b), where "m" represents the slope. First, isolate y by multiplying both sides of the equation by -1 to get rid of the negative sign in front of y:
-y = 2x - 3
Multiplying both sides by -1:
y = -2x + 3
Now, the equation is in slope-intercept form, where the coefficient of x (-2 in this case) is the slope.
So, the slope of the equation -y = 2x - 3 is -2. This means that for every one-unit increase in the x-coordinate, the y-coordinate decreases by 2 units, and for every one-unit decrease in the x-coordinate, the y-coordinate increases by 2 units.
`,
	},
	{
		id: "38",
		level: 1,
		question: "What is the y intercept of the equation: -y = 2x + 7",
		options: [
			{ option: "7" },
			{ option: "-2" },
			{ option: "-7" },
			{ option: "2" },
		],
		answer: "-7",
		solution: `
To find the y-intercept of the equation -y = 2x + 7, you first need to solve for y. Start by isolating y:
-y = 2x + 7
To isolate y, you can multiply both sides of the equation by -1. When you multiply both sides of an equation by -1, it reverses the signs:
-y * (-1) = (2x + 7) * (-1)
This simplifies to:
y = -2x - 7
Now, the equation is in the form y = mx + b, where "b" is the y-intercept. In this case, the y-intercept is -7. This means that the point where the graph of this equation intersects the y-axis is at y = -7, which is 7 units below the origin.
		`,
	},
	{
		id: "39",
		level: 1,
		question: "What is the y intercept of the equation: y = 2x + 7 – 2",
		options: [
			{ option: "7" },
			{ option: "-2" },
			{ option: "9" },
			{ option: "5" },
		],
		answer: "5",
		solution: `
To find the y-intercept of the equation y = 2x + 7 - 2, you need to isolate the y-intercept term. The y-intercept is the value of y when x is equal to 0.
In this equation, you have:
y = 2x + 7 - 2
Now, simplify the right-hand side of the equation:
y = 2x + 5
This equation is in slope-intercept form (y = mx + b), where "b" represents the y-intercept. In this case, the y-intercept is 5.
So, the y-intercept of the equation y = 2x + 7 - 2 is 5. This means that the graph of this equation intersects the y-axis at the point (0, 5).
		`,
	},
	{
		id: "40",
		level: 1,
		question: "What is the y intercept of the equation: y = 7x - 5 – 3",
		options: [
			{ option: "-5" },
			{ option: "-3" },
			{ option: "-8" },
			{ option: "8" },
		],
		answer: "-8",
		solution: `
To find the y-intercept of the equation y = 7x - 5 - 3, you need to isolate the y-intercept term. The y-intercept is the value of y when x is equal to 0.
In this equation, you have:
y = 7x - 5 - 3
Now, simplify the right-hand side of the equation:
y = 7x - 8
This equation is in slope-intercept form (y = mx + b), where "b" represents the y-intercept. In this case, the y-intercept is -8.
So, the y-intercept of the equation y = 7x - 5 - 3 is -8. This means that the graph of this equation intersects the y-axis at the point (0, -8).		
`,
	},
	{
		id: "41",
		level: 1,
		question: "What is the y intercept of the equation: y = -7x + 3",
		options: [
			{ option: "-7" },
			{ option: "-3" },
			{ option: "7" },
			{ option: "3" },
		],
		answer: "3",
		solution: `
The y-intercept of the equation y = -7x + 3 is the value of y when x is equal to 0. In this equation, you have:
y = -7x + 3
To find the y-intercept, substitute x = 0 into the equation:
y = -7(0) + 3
y = 0 + 3
y = 3
So, the y-intercept of the equation y = -7x + 3 is 3. This means that the graph of this equation intersects the y-axis at the point (0, 3).
`,
	},
	{
		id: "42",
		level: 1,
		question: "What is the y intercept of the equation: y = -7x - 3 + 5",
		options: [
			{ option: "-2" },
			{ option: "-3" },
			{ option: "5" },
			{ option: "2" },
		],
		answer: "2",
		solution: `
To find the y-intercept of the equation y = -7x - 3 + 5, you need to isolate the y-intercept term. The y-intercept is the value of y when x is equal to 0.
In this equation, you have:
y = -7x - 3 + 5
Now, simplify the right-hand side of the equation:
y = -7x + 2
This equation is in slope-intercept form (y = mx + b), where "b" represents the y-intercept. In this case, the y-intercept is 2.
So, the y-intercept of the equation y = -7x - 3 + 5 is 2. This means that the graph of this equation intersects the y-axis at the point (0, 2).
`,
	},
	{
		id: "43",
		level: 1,
		question: "What is the y intercept of the equation: y = 2x - 1 + 5",
		options: [
			{ option: "-1" },
			{ option: "5" },
			{ option: "6" },
			{ option: "4" },
		],
		answer: "2",
		solution: `
To find the y-intercept of the equation y = 2x - 1 + 5, you need to isolate the y-intercept term. The y-intercept is the value of y when x is equal to 0.
In this equation, you have:
y = 2x - 1 + 5
Now, simplify the right-hand side of the equation:
y = 2x + 4
This equation is in slope-intercept form (y = mx + b), where "b" represents the y-intercept. In this case, the y-intercept is 4.
So, the y-intercept of the equation y = 2x - 1 + 5 is 4. This means that the graph of this equation intersects the y-axis at the point (0, 4).
`,
	},
	{
		id: "44",
		level: 1,
		question: "What is the y intercept of the equation: y = -x - 1 – 4",
		options: [
			{ option: "-1" },
			{ option: "-4" },
			{ option: "-5" },
			{ option: "5" },
		],
		answer: "-5",
		solution: `
The y-intercept of the equation y = -x - 1 - 4 is the value of y when x is equal to 0. In this equation, you have:
y = -x - 1 - 4
Now, simplify the right-hand side of the equation:
y = -x - 5
This equation is in slope-intercept form (y = mx + b), where "b" represents the y-intercept. In this case, the y-intercept is -5.
So, the y-intercept of the equation y = -x - 1 - 4 is -5. This means that the graph of this equation intersects the y-axis at the point (0, -5).
`,
	},
	{
		id: "45",
		level: 1,
		question: "What is the slope of the equation: y = -x - 1",
		options: [
			{ option: "1" },
			{ option: "-1" },
			{ option: "-x" },
			{ option: "0" },
		],
		answer: "-1",
		solution: `
The slope of a linear equation in the form y = mx + b is represented by the coefficient "m" in the equation. In your equation, y = -x - 1, the coefficient of x is -1, which is the slope.
So, the slope of the equation y = -x - 1 is -1. This means that for every one-unit increase in the x-coordinate, the y-coordinate decreases by 1 unit, and for every one-unit decrease in the x-coordinate, the y-coordinate increases by 1 unit. The negative sign indicates that the line has a negative slope, meaning it slants downward from left to right on a graph.
`,
	},
	{
		id: "46",
		level: 1,
		question: "What is the slope of the equation: y = x – 1",
		options: [
			{ option: "1" },
			{ option: "-1" },
			{ option: "-x" },
			{ option: "0" },
		],
		answer: "1",
		solution: `
The slope of a linear equation in the form y = mx + b is represented by the coefficient "m" in the equation. In your equation, y = x - 1, the coefficient of x is 1, which is the slope.
So, the slope of the equation y = x - 1 is 1. This means that for every one-unit increase in the x-coordinate, the y-coordinate increases by 1 unit, and for every one-unit decrease in the x-coordinate, the y-coordinate decreases by 1 unit. The positive sign indicates that the line has a positive slope, meaning it slants upward from left to right on a graph.
`,
	},
	{
		id: "47",
		level: 1,
		question:
			"You receive a 10% raise in your annual salary. If your current salary is $50,000, how much will your new salary be?",
		options: [
			{ option: "$60,000" },
			{ option: "$75,000" },
			{ option: "$55,000" },
			{ option: "$65,000" },
		],
		answer: "$55,000",
		solution: `
To calculate your new salary after a 10% raise, you can follow these steps:
Step 1: Calculate the raise amount.
Raise amount = Current salary * Raise percentage
Raise amount = $50,000 * 10% = $5,000
Step 2: Add the raise amount to your current salary to find the new salary.
New salary = Current salary + Raise amount
New salary = $50,000 + $5,000 = $55,000
So, with a 10% raise, your new salary will be $55,000.
`,
	},
	{
		id: "48",
		level: 1,
		question:
			"If a store offers a 25% discount on all electronics, and you purchase a $400 laptop, how much money will you save?",
		options: [
			{ option: "$50" },
			{ option: "$75" },
			{ option: "$80" },
			{ option: "$100" },
		],
		answer: "$100",
		solution: `
To calculate the money you will save when a store offers a 25% discount on a $400 laptop, you can follow these steps:
Step 1: Calculate the discount amount.
Discount amount = Original price * Discount percentage
Discount amount = $400 * 25% = $400 * 0.25 = $100
So, you will save $100 on the $400 laptop due to the 25% discount.
`,
	},
	{
		id: "49",
		level: 1,
		question:
			"You invested $1,000 in a savings account with an annual interest rate of 4%. How much interest will you earn after one year?",
		options: [
			{ option: "$400" },
			{ option: "$40.40" },
			{ option: "$40" },
			{ option: "none of the above" },
		],
		answer: "$40",
		solution: `
To calculate the interest earned on a $1,000 investment with an annual interest rate of 4%, you can use the following formula:
Interest = Principal (initial amount) x Rate
Interest = $1,000 x 4% (or 0.04 as a decimal)
Interest = $1,000 x 0.04 = $40
You will earn $40 in interest after one year on your $1,000 investment at a 4% annual interest rate.

`,
	},
	{
		id: "50",
		level: 1,
		question:
			"In a class of 30 students, 20% are fluent in a second language. How many students are fluent in the second language?",
		options: [
			{ option: "3" },
			{ option: "4" },
			{ option: "6" },
			{ option: "8" },
		],
		answer: "6",
		solution: `
To find out how many students in a class of 30 are fluent in a second language, you can use the following formula:
Number of students fluent in the second language = Total number of students × Percentage who are fluent
Number of students fluent in the second language = 30 students × 20% (or 0.20 as a decimal)
Number of students fluent in the second language = 30 students × 0.20 = 6 students
So, there are 6 students in the class who are fluent in a second language.
`,
	},
];

/* ========================================================= INTERMEDIATE ============================================================ */
export const intermediateLevel1 = [
	{
		id: "1",
		level: 1,
		question: "Solve for x in the equation: 2x + 5 = 11",
		options: [{ option: "8" }, { option: "1/3" }, { option: "3" }],
		answer: "3",
		solution: `

To solve for x, follow these steps:

1. Subtract 5 from both sides of the equation to isolate the term with x:

2x + 5 - 5 = 11 - 5

2x = 6

2. Now, divide both sides by 2 to solve for x:

(2x) / 2 = 6 / 2

x = 3

So, the solution to the equation is x = 3.
        `,
	},
	{
		id: "2",
		level: 1,
		question:
			"Simplify the expression involving rational numbers: (3/4) + (5/6)?",
		options: [{ option: "8/12" }, { option: "¾" }, { option: "19/12" }],
		answer: "19/12",
		solution: `

To simplify the expression (3/4) + (5/6), you need to find a common denominator and then add the fractions together.

Step 1: Find a common denominator for 4 and 6. The least common multiple (LCM) of 4 and 6 is 12.

Step 2: Rewrite both fractions with the common denominator of 12:

(3/4) becomes (3/4) * (3/3) = (9/12)

(5/6) becomes (5/6) * (2/2) = (10/12)

Step 3: Now that both fractions have the same denominator, you can add them together:

(9/12) + (10/12) = (9 + 10)/12 = 19/12

So, the simplified result of (3/4) + (5/6) is 19/12.

        `,
	},
	{
		id: "3",
		level: 1,
		question: "Solve for x: 3(2x - 1) = 21",
		options: [{ option: "3" }, { option: "4" }, { option: "7" }],
		answer: "4",
		solution: `

To solve for x in the equation 3(2x - 1) = 21, follow these steps:

Step 1: Distribute the 3 on the left side of the equation to remove the parentheses.

3 * 2x - 3 * 1 = 21

This simplifies to: 6x - 3 = 21

Step 2: Add 3 to both sides of the equation to isolate the variable term (6x) on the left side.

6x - 3 + 3 = 21 + 3

Simplifying: 6x = 24

Step 3: Now, you can isolate x by dividing both sides of the equation by 6 to solve for x.

(6x) / 6 = 24 / 6

Simplifying: x = 4

So, the solution to the equation 3(2x - 1) = 21 is x = 4.

        `,
	},
	{
		id: "4",
		level: 1,
		question: "If 2(y - 3) = 10, what is the value of y?",
		options: [{ option: "8" }, { option: "2" }, { option: "4" }],
		answer: "8",
		solution: `

To solve for y in the equation 2(y - 3) = 10, follow these steps:

Step 1: Distribute the 2 on the left side of the equation to remove the parentheses.

2 * (y - 3) = 10

This simplifies to: 2y - 6 = 10

Step 2: Add 6 to both sides of the equation to isolate the variable term (2y) on the left side.

2y - 6 + 6 = 10 + 6

Simplifying: 2y = 16

Step 3: Now, you can isolate y by dividing both sides of the equation by 2 to solve for y.

(2y) / 2 = 16 / 2

Simplifying: y = 8

So, the solution to the equation 2(y - 3) = 10 is y = 8.

        `,
	},
	{
		id: "5",
		level: 1,
		question:
			"In a recipe, you need to mix 2/3 cup of sugar for every 1/4 cup of flour. How many cups of sugar do you need if you use 2 cups of flour?",
		options: [
			{ option: "4 1/3 cups" },
			{ option: "5 2/3 cups" },
			{ option: "5 1/3 cups" },
		],
		answer: "5 1/3 cups",
		solution: `

To determine how much sugar you need when using 2 cups of flour in the recipe, you can use the given ratio of sugar to flour:

The given ratio is 2/3 cup of sugar for every 1/4 cup of flour. This means for each 1/4 cup of flour, you need 2/3 cup of sugar.

If you're using 2 cups of flour, you can think of it as 8 portions of 1/4 cup each (2 cups divided by 1/4 cup equals 8 portions).

To find out how much sugar you need for 8 portions of flour, simply multiply the amount of sugar needed for one portion (2/3 cup) by the number of portions (8):

Sugar needed = (2/3 cup) * 8 = (2/3) * 8/1 = (2 * 8) / (3 * 1) = 16/3 cups.

So, when you use 2 cups of flour in the recipe, you will need 16/3 cups of sugar. To express this as a mixed number:

16/3 = 5 1/3

So, you will need 5 1/3 cups of sugar when using 2 cups of flour in the recipe.

        `,
	},
];

/* ========================================================= EXPERT ============================================================ */

export const expertLevel1 = [
	{
		id: "1",
		level: 1,
		question:
			"If 'y' is 6 less than twice 'x,' what is the right equation to represent this relationship?",
		options: [
			{ option: "y=x^2 - 6" },
			{ option: "y=2x + 6" },
			{ option: "y=2x – 6" },
		],
		answer: "y=2x – 6",
		solution: `

Here's an explanation of the equation:

"2x" represents twice the value of "x." You multiply "x" by 2 to get twice its value.

"-6" indicates that you are subtracting 6 from the result of "2x," which means that "y" is 6 less than "2x."

So, in this equation, "y" is expressed as a function of "x," and it is equal to twice the value of "x" minus 6. This equation describes the relationship where "y" is 6 less than double the value of "x."
        `,
	},
	{
		id: "2",
		level: 1,
		question: "Solve for x in the equation 2x + 3 + 7x + 33 = y",
		options: [
			{ option: "x = 4" },
			{ option: "x = y + 36 / 9" },
			{ option: "x = y - 36 / 9" },
		],
		answer: "x = y - 36 / 9",
		solution: `

To solve for x in the equation 2x + 3 + 7x + 33 = y, you can first combine like terms on the left side and then isolate x. Here's how you can do it:

Combine like terms on the left side:

2x + 7x + 3 + 33 = y

9x + 36 = y

Now, isolate x by subtracting 36 from both sides:

9x = y – 36

Finally, divide both sides by 9 to solve for x:

x = y - 36 / 9

So, the solution for x in terms of y is:

x = y - 36 / 9

 `,
	},
	{
		id: "3",
		level: 1,
		question:
			"Write an equation of the line with slope -3 and y-intercept (0 , -5).",
		options: [
			{ option: "y = 3x + 5" },
			{ option: "y = -3x + 5" },
			{ option: "y = -3x – 5" },
		],
		answer: "y = -3x – 5",
		solution: `

To write the equation of a line with a given slope (-3) and y-intercept (0, -5), you can use the point-slope form of a linear equation, which is:

y - y₁ = m(x - x₁)

In this equation, (x₁, y₁) represents the coordinates of a point on the line, and "m" represents the slope.

Step 1: Identify the given slope and y-intercept.

Slope (m) = -3

Y-intercept (0, -5)

Step 2: Plug the values into the point-slope form.

y - (-5) = -3(x - 0)

Step 3: Simplify the equation.

y + 5 = -3x

Step 4: To put it in slope-intercept form (y = mx + b), subtract 5 from both sides to isolate y:

y = -3x - 5
    
So, the equation of the line with a slope of -3 and a y-intercept of (0, -5) is y = -3x - 5. This equation represents a line that has a slope of -3 (meaning it slopes downward) and crosses the y-axis at the point (0, -5).    
        `,
	},
	{
		id: "4",
		level: 1,
		question: "Expand and simplify the expression: (2x - 3)(4x + 5)",
		options: [
			{ option: "8x^2 + 2x - 15" },
			{ option: "8x^2 + 2x + 15" },
			{ option: "8x^2 - 2x - 15" },
		],
		answer: "8x^2 - 2x - 15",
		solution: `

let's expand and simplify the expression (2x - 3)(4x + 5) step by step:

Step 1: Use the distributive property (FOIL method) to multiply the terms in the first parentheses by the terms in the second parentheses.
(2x - 3)(4x + 5) = 2x * 4x + 2x * 5 - 3 * 4x - 3 * 5

Step 2: Multiply the terms inside each pair of parentheses.

8x^2 + 10x - 12x - 15

Step 3: Combine like terms. In this case, combine the terms with 'x.'

8x^2 - 2x - 15

So, the expanded and simplified expression is 8x^2 - 2x - 15.
        `,
	},
	{
		id: "5",
		level: 1,
		question:
			"Find the slope of the line perpendicular to the line y = (1/3)x – 7",
		options: [{ option: "1/3" }, { option: "3" }, { option: "-3" }],
		answer: "-3",
		solution: `

To find the slope of a line perpendicular to the line y = (1/3)x - 7, you can follow these steps:

Step 1: Recognize that the given equation is in slope-intercept form, y = mx + b, where "m" is the slope. In this case, the slope of the given line is (1/3).

Step 2: To find the slope of a line perpendicular to this, you can use the fact that the product of the slopes of two perpendicular lines is -1. So, you need to find the negative reciprocal of (1/3).

Step 3: The negative reciprocal of (1/3) is -3. This means that the slope of a line perpendicular to y = (1/3)x - 7 is -3.

So, the slope of the line perpendicular to y = (1/3)x - 7 is -3.
`,
	},
];
