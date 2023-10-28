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
	{
		id: "51",
		level: 1,
		question:
			"A restaurant bill is $110, and you want to leave a 10% tip. How much should you leave as a tip?",
		options: [
			{ option: "$10" },
			{ option: "$11" },
			{ option: "$10.10" },
			{ option: "$10.5" },
		],
		answer: "$11",
		solution: `
To calculate a 10% tip on a $110 restaurant bill, you can use the following formula:
Tip amount = Bill amount × Tip percentage
Tip amount = $110 × 10% (or 0.10 as a decimal)
Tip amount = $110 × 0.10 = $11
You should leave a tip of $11 on a $110 restaurant bill if you want to leave a 10% tip.
`,
	},
	{
		id: "52",
		level: 1,
		question:
			"You bought a car for $30,000, and its value has depreciated by 10%. What is the current value of the car?",
		options: [
			{ option: "$3,000" },
			{ option: "$6,000" },
			{ option: "$27,000" },
			{ option: "none of the above" },
		],
		answer: "$27,000",
		solution: `
To find the current value of a car that has depreciated by 10%, you can use the following formula:
Current Value = Original Value - Depreciation
Depreciation = Original Value × Depreciation Rate
In this case, the original value is $30,000, and the depreciation rate is 10% (0.10 as a decimal).
Depreciation = $30,000 × 0.10 = $3,000
Now, subtract the depreciation amount from the original value to find the current value:
Current Value = $30,000 - $3,000 = $27,000
So, the current value of the car is $27,000 after depreciating by 10%
`,
	},
	{
		id: "53",
		level: 1,
		question:
			"You scored 90% on your math test, which had 50 questions. How many questions did you answer correctly?",
		options: [
			{ option: "44" },
			{ option: "45" },
			{ option: "46" },
			{ option: "40" },
		],
		answer: "45",
		solution: `
To find out how many questions you answered correctly on a math test where you scored 90%, you can use the following formula:
Number of correct answers = (Percentage score / 100) x Total number of questions
Number of correct answers = (90% / 100) x 50 questions
First, convert the percentage to a decimal by dividing by 100:
90% = 0.90 (as a decimal)
Now, calculate the number of correct answers:
Number of correct answers = 0.90 x 50 questions = 45
So, you answered 45 questions correctly on your math test.
`,
	},
	{
		id: "54",
		level: 1,
		question:
			"A store initially priced a shirt at $100 but later reduced the price by 25%. What is the new sale price of the shirt?",
		options: [
			{ option: "$25" },
			{ option: "$30" },
			{ option: "$85" },
			{ option: "$75" },
		],
		answer: "$75",
		solution: `
To find the new sale price of the shirt after a 25% reduction, you can use the following formula:
Sale Price = Original Price - (Original Price × Discount Percentage)
In this case, the original price of the shirt is $100, and the discount percentage is 25%, or 0.25 as a decimal.
Sale Price = $100 - ($100 × 0.25)
Sale Price = $100 - ($25)
Sale Price = $75
The new sale price of the shirt is $75 after a 25% reduction.
`,
	},
	{
		id: "55",
		level: 1,
		question:
			"Your monthly mobile phone bill is $80. If you use a 10% discount code, how much will you save on your bill?",
		options: [
			{ option: "$8" },
			{ option: "$6" },
			{ option: "$18" },
			{ option: "$72" },
		],
		answer: "$8",
		solution: `
To calculate how much you will save on your monthly mobile phone bill with a 10% discount, you can use the following formula:
Savings = Monthly bill amount × Discount percentage
Savings = $80 × 10% (or 0.10 as a decimal)
Savings = $80 × 0.10 = $8
You will save $8 on your monthly mobile phone bill with a 10% discount.
`,
	},
	{
		id: "56",
		level: 1,
		question:
			"You save 10% of your monthly income. If your monthly income is $2,000, how much do you save each month?",
		options: [
			{ option: "$100" },
			{ option: "$150" },
			{ option: "$200" },
			{ option: "$175" },
		],
		answer: "$200",
		solution: `
To calculate how much you save each month, given that you save 10% of your monthly income, you can use the following formula:
Savings = Monthly income × Savings percentage
Savings = $2,000 × 10% (or 0.10 as a decimal)
Savings = $2,000 × 0.10 = $200
You save $200 each month from your $2,000 monthly income, as 10% of $2,000 is $200.
`,
	},
	{
		id: "57",
		level: 1,
		question:
			"In a classroom, 30% of the students are girls. If there are 40 students in the class, how many are girls?",
		options: [
			{ option: "9" },
			{ option: "12" },
			{ option: "14" },
			{ option: "10" },
		],
		answer: "12",
		solution: `
To find out how many students in the classroom are girls, given that 30% are girls and there are 40 students in total, you can use the following formula:
Number of girls = Total number of students × Percentage of girls
Number of girls = 40 students × 30% (or 0.30 as a decimal)
Number of girls = 40 students × 0.30 = 12 students
So, there are 12 girls in the classroom out of the 40 students.
`,
	},
	{
		id: "58",
		level: 1,
		question:
			"You have a 20% off coupon for a $50 restaurant bill. How much money will you save with the coupon?",
		options: [
			{ option: "$40" },
			{ option: "$45" },
			{ option: "$10" },
			{ option: "none of the above" },
		],
		answer: "$10",
		solution: `
To calculate how much money you will save with a 20% off coupon on a $50 restaurant bill, you can use the following formula:
Savings = Bill amount × Discount percentage
Savings = $50 × 20% (or 0.20 as a decimal)
Savings = $50 × 0.20 = $10
You will save $10 on your $50 restaurant bill with the 20% off coupon.
`,
	},
	{
		id: "59",
		level: 1,
		question:
			"Sarah scored 85% on her math test, while John scored 92%. What was the difference in their scores?",
		options: [
			{ option: "7%" },
			{ option: "12%" },
			{ option: "0.7" },
			{ option: "none of the above" },
		],
		answer: "7%",
		solution: `
To find the difference in Sarah and John's scores, you can subtract Sarah's score from John's score:
Difference = John's score - Sarah's score
Difference = 92% - 85%
First, convert both percentages to decimals by dividing by 100:
92% = 0.92
85% = 0.85
Now, subtract Sarah's score from John's score:
Difference = 0.92 - 0.85
Difference = 0.07
So, the difference in their scores is 0.07, or 7 percentage points. John scored 7 percentage points higher than Sarah on the math test.
`,
	},
	{
		id: "60",
		level: 1,
		question:
			"During a sale, a $200 jacket is discounted by 25%. What is the sale price of the jacket?",
		options: [
			{ option: "$50" },
			{ option: "$25" },
			{ option: "$150" },
			{ option: "none of the above" },
		],
		answer: "$150",
		solution: `
To calculate the sale price of the jacket after a 25% discount, you can use the following formula:
Sale Price = Original Price - (Original Price × Discount Percentage)
In this case, the original price of the jacket is $200, and the discount percentage is 25%, or 0.25 as a decimal.
Sale Price = $200 - ($200 × 0.25)
Sale Price = $200 - ($50)
Sale Price = $150
The sale price of the jacket is $150 after a 25% discount.
`,
	},
	{
		id: "61",
		level: 1,
		question:
			"If a smartphone's price increases from $400 to $480, what is the percentage increase in price?",
		options: [
			{ option: "10%" },
			{ option: "15%" },
			{ option: "20%" },
			{ option: "25%" },
		],
		answer: "20%",
		solution: `
To calculate the percentage increase in price, you can use the following formula:
Percentage Increase = ((New Price - Old Price) / Old Price) × 100%
In this case, the old price of the smartphone is $400, and the new price is $480.
Percentage Increase = (($480 - $400) / $400) × 100%
Percentage Increase = ($80 / $400) × 100%
Percentage Increase = (0.2) × 100%
Percentage Increase = 20%
The price of the smartphone increased by 20%.
`,
	},
	{
		id: "62",
		level: 1,
		question:
			"You scored 85% on your math test. If the test was out of 100 points, how many points did you earn?",
		options: [
			{ option: "42" },
			{ option: "43" },
			{ option: "85" },
			{ option: "86" },
		],
		answer: "85",
		solution: `
To find out how many points you earned on the math test, given that you scored 85%, you can use the following formula:
Points earned = (Percentage score / 100) * Total points
Points earned = (85% / 100) * 100 points
First, convert the percentage to a decimal by dividing by 100:
85% = 0.85 (as a decimal)
Now, calculate the points earned:
Points earned = 0.85 * 100 points = 85 points
So, you earned 85 points on your math test out of a possible 100 points.
`,
	},
	{
		id: "63",
		level: 1,
		question:
			"Sarah spent 30% of her monthly income on rent, 15% on groceries, and 10% on transportation. What percentage of her income is left?",
		options: [
			{ option: "55%" },
			{ option: "45%" },
			{ option: "50%" },
			{ option: "none of the above" },
		],
		answer: "45%",
		solution: `
To find the percentage of Sarah's monthly income that is left after spending 30% on rent, 15% on groceries, and 10% on transportation, you can subtract the combined percentage spent from 100%. 
Percentage left = 100% - (Percentage spent on rent + Percentage spent on groceries + Percentage spent on transportation)
Percentage left = 100% - (30% + 15% + 10%)
Now, calculate the percentage left:
Percentage left = 100% - 55%
Percentage left = 45%
So, Sarah has 45% of her monthly income left after paying for rent, groceries, and transportation.
`,
	},
	{
		id: "64",
		level: 1,
		question:
			"In a class of 40 students, 75% passed the final exam. How many students passed the exam?",
		options: [
			{ option: "25" },
			{ option: "30" },
			{ option: "35" },
			{ option: "28" },
		],
		answer: "30",
		solution: `
To find out how many students passed the final exam in a class of 40 students with a pass rate of 75%, you can use the following formula:
Number of students who passed = Total number of students × Pass percentage
Number of students who passed = 40 students × 75% (or 0.75 as a decimal)
Number of students who passed = 40 students × 0.75 = 30 students
So, 30 students passed the final exam.
`,
	},
	{
		id: "65",
		level: 1,
		question:
			"If a shirt originally costs $60 but is on sale for 20% off, how much do you save if you buy it during the sale?",
		options: [
			{ option: "$48" },
			{ option: "$46" },
			{ option: "$50" },
			{ option: "none of the above" },
		],
		answer: "none of the above",
		solution: `
To calculate how much you save when a shirt is on sale for 20% off, you can use the following formula:
Savings = Original Price × Discount Percentage
Savings = $60 × 20% (or 0.20 as a decimal)
Savings = $60 × 0.20 = $12
So, you save $12 if you buy the shirt during the sale where it's 20% off.
`,
	},
	{
		id: "66",
		level: 1,
		question:
			"Maria bought a pair of shoes for $80, and after wearing them for a year, she sold them for $40. What percentage of the original price did she get for the used shoes?",
		options: [
			{ option: "45%" },
			{ option: "50%" },
			{ option: "55%" },
			{ option: "60%" },
		],
		answer: "50%",
		solution: `
To calculate the percentage of the original price that Maria received for the used shoes, you can use the following formula:
Percentage = (Selling Price / Original Price) * 100
In this case, the original price of the shoes is $80, and she sold them for $40.
Percentage = ($40 / $80) * 100
Percentage = (0.5) * 100
Percentage = 50%
Maria received 50% of the original price when she sold the used shoes.
`,
	},
	{
		id: "67",
		level: 1,
		question: "Add 1/2 and 1/3",
		options: [
			{ option: "2/5" },
			{ option: "2/6" },
			{ option: "3/5" },
			{ option: "5/6" },
		],
		answer: "5/6",
		solution: `
To add 1/2 and 1/3, you need to find a common denominator and then add the fractions together. Here's how to do it step by step:
Step 1: Find a Common Denominator
The common denominator is the least common multiple of the two denominators, which in this case is 6. 
Step 2: Convert the Fractions
You need to express both fractions with a common denominator of 6:
1/2 = 3/6 (You multiply both the numerator and denominator of 1/2 by 3 to get the same denominator of 6).
1/3 = 2/6 (You multiply both the numerator and denominator of 1/3 by 2 to get the same denominator of 6).
Step 3: Add the Fractions
Now that both fractions have the same denominator, you can add them:
(3/6) + (2/6) = 5/6
So, 1/2 + 1/3 = 5/6.
The answer is 5/6.
`,
	},
	{
		id: "68",
		level: 1,
		question: "Add 2/3 and 1/3",
		options: [
			{ option: "½" },
			{ option: "2/6" },
			{ option: "3/6" },
			{ option: "1" },
		],
		answer: "1",
		solution: `
To add 2/3 and 1/3, you can do so directly since they already have the same denominator. Here's the addition with an explanation:
Step 1: Recognize that the two fractions have the same denominator, which is 3.
Step 2: Add the numerators together while keeping the common denominator:
(2/3) + (1/3) = (2 + 1)/3
Step 3: Perform the addition in the numerator:
(2 + 1) = 3
So, (2/3) + (1/3) = 3/3Step 4: Simplify if needed. 3/3 is equivalent to 1 because any number divided by itself is 1.
Therefore, 2/3 + 1/3 = 1.
`,
	},
	{
		id: "69",
		level: 1,
		question: "Add 1/5 and 3/2",
		options: [
			{ option: "4/10" },
			{ option: "2/5" },
			{ option: "9/10" },
			{ option: "7/10" },
		],
		answer: "7/10",
		solution: `
To add 1/5 and 3/2, you need to first find a common denominator. In this case, the common denominator is 10, which is the least common multiple of 5 and 2. Here's the step-by-step explanation:
Step 1: Find a Common Denominator
The common denominator for 1/5 and 3/2 is 10.
Step 2: Convert the Fractions
You need to express both fractions with a common denominator of 10:
1/5 can be converted to (2/10) because you multiply both the numerator and denominator of 1/5 by 2.
3/2 can be converted to (5/10) because you multiply both the numerator and denominator of 3/2 by 5.
Step 3: Add the Fractions
Now that both fractions have the same denominator (10), you can add them:
(2/10) + (5/10) = (2 + 5)/10
Step 4: Perform the addition in the numerator:
2 + 5 = 7
So, (1/5) + (3/2) = (7/10).
The answer is 7/10.
`,
	},
	{
		id: "70",
		level: 1,
		question: "Add 2/4 and 1/8",
		options: [
			{ option: "3/8" },
			{ option: "2/8" },
			{ option: "¾" },
			{ option: "5/8" },
		],
		answer: "5/8",
		solution: `
To add 2/4 and 1/8, you first need to find a common denominator. In this case, the least common denominator for 4 and 8 is 8. Here's the step-by-step explanation:
Step 1: Find a Common Denominator
The common denominator for 2/4 and 1/8 is 8.
Step 2: Convert the Fractions
You need to express both fractions with a common denominator of 8:
2/4 can be converted to (4/8) because you multiply both the numerator and denominator of 2/4 by 2.
1/8 remains as it is.
Step 3: Add the Fractions
Now that both fractions have the same denominator (8), you can add them:
(4/8) + (1/8) = (4 + 1)/8
Step 4: Perform the addition in the numerator:
4 + 1 = 5
So, (2/4) + (1/8) = (5/8).
The answer is 5/8.
`,
	},
	{
		id: "71",
		level: 1,
		question: "Add 4/8 and 3/8",
		options: [
			{ option: "¾" },
			{ option: "7/8" },
			{ option: "7/16" },
			{ option: "15/16" },
		],
		answer: "7/8",
		solution: `
To add 4/8 and 3/8, you can do so directly since they already have the same denominator. Here's the addition with an explanation:
Step 1: Recognize that the two fractions have the same denominator, which is 8.
Step 2: Add the numerators together while keeping the common denominator:
(4/8) + (3/8) = (4 + 3)/8
Step 3: Perform the addition in the numerator:
4 + 3 = 7
So, (4/8) + (3/8) = 7/8.
The answer is 7/8.
`,
	},
	{
		id: "72",
		level: 1,
		question: "Subtract 1/4 from 2/4",
		options: [
			{ option: "-1/4" },
			{ option: "¼" },
			{ option: "3/4" },
			{ option: "none of the above" },
		],
		answer: "¼",
		solution: `
To subtract 1/4 from 2/4, you can follow these steps:
Step 1: Recognize that the two fractions have the same denominator, which is 4.
Step 2: Subtract the second fraction from the first while keeping the common denominator:
(2/4) - (1/4) = (2 - 1)/4
Step 3: Perform the subtraction in the numerator:
2 - 1 = 1
So, (2/4) - (1/4) = (1/4).
The answer is 1/4.
`,
	},
	{
		id: "73",
		level: 1,
		question: "Subtract 2/5 from 3/5",
		options: [
			{ option: "1" },
			{ option: "2/5" },
			{ option: "1/3" },
			{ option: "1/5" },
		],
		answer: "1/5",
		solution: `
To subtract 2/5 from 3/5, you can follow these steps:
Step 1: Recognize that the two fractions have the same denominator, which is 5.
Step 2: Subtract the second fraction from the first while keeping the common denominator:
(3/5) - (2/5) = (3 - 2)/5
Step 3: Perform the subtraction in the numerator:
3 - 2 = 1
So, (3/5) - (2/5) = (1/5).
The answer is 1/5.
`,
	},
	{
		id: "74",
		level: 1,
		question: "Subtract 5/7 from 3/7",
		options: [
			{ option: "2/7" },
			{ option: "3/5" },
			{ option: "1/7" },
			{ option: "-2/7" },
		],
		answer: "-2/7",
		solution: `
To subtract 5/7 from 3/7, you can follow these steps:
Step 1: Recognize that the two fractions have the same denominator, which is 7.
Step 2: Subtract the second fraction from the first while keeping the common denominator:
(3/7) - (5/7) = (3 - 5)/7
Step 3: Perform the subtraction in the numerator:
3 - 5 = -2
So, (3/7) - (5/7) = (-2/7).
The answer is -2/7.
`,
	},
	{
		id: "75",
		level: 1,
		question: "Subtract 8/9 from 5/9",
		options: [
			{ option: "3/9" },
			{ option: "4/9" },
			{ option: "1/3" },
			{ option: "-1/3" },
		],
		answer: "-1/3",
		solution: `
To subtract 8/9 from 5/9, you can follow these steps:
Step 1: Recognize that the two fractions have the same denominator, which is 9.
Step 2: Subtract the second fraction from the first while keeping the common denominator:
(5/9) - (8/9) = (5 - 8)/9
Step 3: Perform the subtraction in the numerator:
5 - 8 = -3
So, (5/9) - (8/9) = (-3/9).
Step 4: Simplify the result by dividing both the numerator and denominator by their greatest common divisor, which is 3:
(-3/9) ÷ 3 = (-1/3).
The answer is -1/3.
`,
	},
	{
		id: "76",
		level: 1,
		question: "Subtract 2/5 from 2/2",
		options: [
			{ option: "-2/10" },
			{ option: "-1/5" },
			{ option: "3/5" },
			{ option: "-3/5" },
		],
		answer: "3/5",
		solution: `
To subtract 2/5 from 2/2, follow these steps:
Step 1: Recognize that 2/2 can be simplified to 1/1 because both the numerator and denominator have a common factor of 2.
Step 2: Subtract 2/5 from 1/1:
(1/1) - (2/5) = (5/5) - (2/5)
Step 3: Perform the subtraction with the common denominator:
(5/5) - (2/5) = (5 - 2)/5
Step 4: Perform the subtraction in the numerator:
5 - 2 = 3
So, (2/2) - (2/5) = (3/5).
The answer is 3/5.
`,
	},
	{
		id: "77",
		level: 1,
		question: "Multiply 3/5 and 1/7",
		options: [
			{ option: "3/45" },
			{ option: "3/35" },
			{ option: "1/17" },
			{ option: "1/18" },
		],
		answer: "3/35",
		solution: `
To multiply 3/5 and 1/7, simply multiply the numerators together and the denominators together.
Here's how you do it:
(3/5) * (1/7) = (3 * 1) / (5 * 7) = 3/35
So, the product of 3/5 and 1/7 is 3/35.
`,
	},
	{
		id: "78",
		level: 1,
		question: "Multiply 3/5 and 2/7",
		options: [
			{ option: "6/7" },
			{ option: "5/7" },
			{ option: "6/49" },
			{ option: "2/13" },
		],
		answer: "6/49",
		solution: `
To multiply 3/7 and 2/7, you simply multiply the numerators together and the denominators together.
Here's how you do it:
(3/7) * (2/7) = (3 * 2) / (7 * 7) = 6/49
So, the product of 3/7 and 2/7 is 6/49.
`,
	},
	{
		id: "79",
		level: 1,
		question: "Multiply 7/9 and 9/7",
		options: [
			{ option: "63" },
			{ option: "1" },
			{ option: "31/63" },
			{ option: "none of the above" },
		],
		answer: "1",
		solution: `
When you multiply a fraction by its reciprocal (flipping the numerator and denominator), the result is always 1. In this case:
(7/9) * (9/7) = 1
So, the product of 7/9 and 9/7 is 1.
`,
	},
	{
		id: "80",
		level: 1,
		question: "Multiply 7/15 and 3/2",
		options: [
			{ option: "21/30" },
			{ option: "14/30" },
			{ option: "7/10" },
			{ option: "¾" },
		],
		answer: "7/10",
		solution: `
To multiply 7/15 and 3/2, you can simply multiply the numerators together and the denominators together. Here's how you do it:
(7/15) * (3/2) = (7 * 3) / (15 * 2) = 21/30
Now, you can simplify the fraction by dividing both the numerator and denominator by their greatest common divisor, which is 3:
(21/30) ÷ 3 = 7/10
So, the product of 7/15 and 3/2 is 7/10.
`,
	},
	{
		id: "81",
		level: 1,
		question: "Multiply 4/12 and 5/2",
		options: [
			{ option: "20/24" },
			{ option: "12/6" },
			{ option: "10/24" },
			{ option: "5/6" },
		],
		answer: "5/6",
		solution: `
To multiply 4/12 and 5/2, you can simplify the fractions and then multiply. Here's how you do it:
Step 1: Simplify the fractions:
4/12 can be simplified by dividing both the numerator and denominator by their greatest common divisor, which is 4. This results in 1/3.
So, 4/12 = 1/3.
Step 2: Multiply the simplified fractions:
(1/3) * (5/2) = (1 * 5) / (3 * 2) = 5/6
So, the product of 4/12 and 5/2 is 5/6.
`,
	},
	{
		id: "82",
		level: 1,
		question: "Divide 4/12 and 5/2",
		options: [
			{ option: "5/6" },
			{ option: "20/24" },
			{ option: "2/15" },
			{ option: "8/50" },
		],
		answer: "2/15",
		solution: `
To divide 4/12 by 5/2, you can use the following steps:
Step 1: Invert (take the reciprocal of) the second fraction (5/2) to make it 2/5. 
Step 2: Now, you have the division problem as a multiplication problem:
(4/12) ÷ (5/2) = (4/12) * (2/5)
Step 3: Multiply the fractions:
(4/12) * (2/5) = (4 * 2) / (12 * 5) = 8/60
Step 4: Simplify the fraction by dividing both the numerator and denominator by their greatest common divisor, which is 4:
(8/60) ÷ 4 = (2/15)
So, 4/12 divided by 5/2 is 2/15.
`,
	},
	{
		id: "83",
		level: 1,
		question: "Divide 4/8 and 2/7",
		options: [
			{ option: "8/56" },
			{ option: "1/7" },
			{ option: "7/4" },
			{ option: "7/5" },
		],
		answer: "7/4",
		solution: `
To divide 4/8 by 2/7, you can follow these steps:
Step 1: Invert (take the reciprocal of) the second fraction (2/7) to make it 7/2.
Step 2: Now, you have the division problem as a multiplication problem:
(4/8) ÷ (2/7) = (4/8) * (7/2)
Step 3: Simplify the fractions:
4/8 can be simplified to 1/2 by dividing both the numerator and denominator by their greatest common divisor, which is 4.
So, (1/2) * (7/2) = (1 * 7) / (2 * 2) = 7/4
So, 4/8 divided by 2/7 is 7/4.
`,
	},
	{
		id: "84",
		level: 1,
		question: "Divide 2/3 and 2/5",
		options: [
			{ option: "4/15" },
			{ option: "10/6" },
			{ option: "5/3" },
			{ option: "2/15" },
		],
		answer: "5/3",
		solution: `
To divide 2/3 by 2/5, you can follow these steps:
Step 1: Invert (take the reciprocal of) the second fraction (2/5) to make it 5/2.
Step 2: Now, you have the division problem as a multiplication problem:
(2/3) ÷ (2/5) = (2/3) * (5/2)
Step 3: Multiply the fractions:
(2/3) * (5/2) = (2 * 5) / (3 * 2) = 10/6
Step 4: Simplify the fraction by dividing both the numerator and denominator by their greatest common divisor, which is 2:
(10/6) ÷ 2 = 5/3
So, 2/3 divided by 2/5 is 5/3.
`,
	},
	{
		id: "85",
		level: 1,
		question: "Divide 3/8 and 5/4",
		options: [
			{ option: "15/32" },
			{ option: "12/40" },
			{ option: "15/40" },
			{ option: "3/10" },
		],
		answer: "3/10",
		solution: `
To divide 3/8 by 5/4, you can follow these steps:
Step 1: Invert (take the reciprocal of) the second fraction (5/4) to make it 4/5.
Step 2: Now, you have the division problem as a multiplication problem:
(3/8) ÷ (5/4) = (3/8) * (4/5)
Step 3: Multiply the fractions:
(3/8) * (4/5) = (3 * 4) / (8 * 5) = 12/40
Step 4: Simplify the fraction by dividing both the numerator and denominator by their greatest common divisor, which is 4:
(12/40) ÷ 4 = 3/10
So, 3/8 divided by 5/4 is 3/10.
`,
	},
	{
		id: "86",
		level: 1,
		question: "Divide 10/3 and 7/4",
		options: [
			{ option: "70/12" },
			{ option: "35/6" },
			{ option: "40/21" },
			{ option: "none of the above" },
		],
		answer: "3/10",
		solution: `
To divide 10/3 by 7/4, you can follow these steps:
Step 1: Invert (take the reciprocal of) the second fraction (7/4) to make it 4/7.
Step 2: Now, you have the division problem as a multiplication problem:
(10/3) ÷ (7/4) = (10/3) * (4/7)
Step 3: Multiply the fractions:
(10/3) * (4/7) = (10 * 4) / (3 * 7) = 40/21
So, 10/3 divided by 7/4 is 40/21.
`,
	},
	{
		id: "87",
		level: 1,
		question: "Solve for x in the equation: x + 5 = 11",
		options: [
			{ option: "16" },
			{ option: "-6" },
			{ option: "6" },
			{ option: "-16" },
		],
		answer: "6",
		solution: `
To solve for x in the equation x + 5 = 11, you can isolate x by performing the following steps:
1. Start with the equation:
	x + 5 = 11
2. To isolate x, you need to get rid of the 5 on the left side of the equation. You can do this by subtracting 5 from both sides of the equation:
	x + 5 - 5 = 11 - 5
3. Simplify both sides:
	x = 6
So, the solution to the equation is x = 6.
`,
	},
	{
		id: "88",
		level: 1,
		question: "Solve for x in the equation: x - 3 = 17",
		options: [
			{ option: "14" },
			{ option: "-14" },
			{ option: "20" },
			{ option: "-20" },
		],
		answer: "20",
		solution: `
To solve for x in the equation x - 3 = 17, you can isolate x by following these steps:
1. Start with the equation:
	x - 3 = 17
2. To isolate x, you need to get rid of the -3 on the left side of the equation. You can do this by adding 3 to both sides of the equation:
	x - 3 + 3 = 17 + 3
3. Simplify both sides:
	x = 20
So, the solution to the equation is x = 20.
`,
	},
	{
		id: "89",
		level: 1,
		question: "Solve for x in the equation: x - 3 = 17 – 4",
		options: [
			{ option: "16" },
			{ option: "13" },
			{ option: "10" },
			{ option: "15" },
		],
		answer: "16",
		solution: `
To solve for x in the equation x - 3 = 17 - 4, you can simplify the right side of the equation first and then isolate x. Here are the steps:
1. Start with the equation:
	x - 3 = 17 - 4
2. Simplify both sides of the equation:
	x - 3 = 13
3. To isolate x, add 3 to both sides of the equation:
	x - 3 + 3 = 13 + 3
4. Simplify both sides:
	x = 16
So, the solution to the equation is x = 16.
`,
	},
	{
		id: "90",
		level: 1,
		question: "Solve for x in the equation: x - 3 = -10",
		options: [
			{ option: "7" },
			{ option: "-7" },
			{ option: "13" },
			{ option: "-13" },
		],
		answer: "-7",
		solution: `
To solve for x in the equation x - 3 = -10, you can isolate x by following these steps:
1. Start with the equation:
	x - 3 = -10
2. To isolate x, you need to get rid of the -3 on the left side of the equation. You can do this by adding 3 to both sides of the equation:
	x - 3 + 3 = -10 + 3
3. Simplify both sides:
	x = -7
So, the solution to the equation is x = -7.
`,
	},
	{
		id: "91",
		level: 1,
		question: "Solve for x in the equation: x + 4 = -11",
		options: [
			{ option: "7" },
			{ option: "-7" },
			{ option: "13" },
			{ option: "-13" },
		],
		answer: "-13",
		solution: `
To solve for x in the equation x + 4 = -11, you can isolate x by following these steps:
1. Start with the equation:
	x + 4 = -11
2. To isolate x, you need to get rid of the +4 on the left side of the equation. You can do this by subtracting 4 from both sides of the equation:
	x + 4 - 4 = -11 - 4
3. Simplify both sides:
	x = -15
So, the solution to the equation is x = -15.
`,
	},
	{
		id: "92",
		level: 1,
		question: "Solve for x in the equation: x + 4 - 5 = -17",
		options: [
			{ option: "-18" },
			{ option: "18" },
			{ option: "-16" },
			{ option: "-17" },
		],
		answer: "-16",
		solution: `
To solve for x in the equation x + 4 - 5 = -17, you can follow these steps:
1. Start with the equation:
	x + 4 - 5 = -17
2. First, simplify the left side by combining like terms. In this case, combine 4 and -5:
	x - 1 = -17
3. To isolate x, add 1 to both sides of the equation to get rid of the -1 on the left side:
	x - 1 + 1 = -17 + 1
4. Simplify both sides:
	x = -16
So, the solution to the equation is x = -16.
`,
	},
	{
		id: "93",
		level: 1,
		question: "Solve for x in the equation: x - 4 - 7 = 17",
		options: [
			{ option: "6" },
			{ option: "-6" },
			{ option: "28" },
			{ option: "-28" },
		],
		answer: "-28",
		solution: `
To solve for x in the equation x - 4 - 7 = 17, you can isolate x by following these steps:
1. Start with the equation:
	x - 4 - 7 = 17
2. First, simplify the left side by combining like terms. In this case, combine -4 and -7:
	x - 11 = 17
3. To isolate x, add 11 to both sides of the equation to get rid of the -11 on the left side:
	x - 11 + 11 = 17 + 11
4. Simplify both sides:
	x = 28
So, the solution to the equation is x = 28.
`,
	},
	{
		id: "94",
		level: 1,
		question: "Solve for x in the equation: 6 - x + 5 = 11",
		options: [
			{ option: "22" },
			{ option: "-22" },
			{ option: "11" },
			{ option: "0" },
		],
		answer: "0",
		solution: `
To solve for x in the equation 6 - x + 5 = 11, you can isolate x by following these steps:
1. Start with the equation:
	6 - x + 5 = 11
2. First, simplify the left side by combining like terms. In this case, combine 6 and 5:
	11 - x = 11
3. To isolate x, subtract 11 from both sides of the equation to get rid of the 11 on the left side:
	11 - x - 11 = 11 - 11
4. Simplify both sides:
	-x = 0
5. To solve for x, multiply both sides by -1 to get x by itself:
	-1 * (-x) = -1 * 0
	This simplifies to:
	x = 0
So, the solution to the equation is x = 0.
`,
	},
	{
		id: "95",
		level: 1,
		question: "Solve for y in the equation: 2 + y - 5 = 8",
		options: [
			{ option: "5" },
			{ option: "-5" },
			{ option: "11" },
			{ option: "1" },
		],
		answer: "11",
		solution: `
To solve for y in the equation 2 + y - 5 = 8, you can isolate y by following these steps:
1. Start with the equation:
	2 + y - 5 = 8
2. First, simplify the left side by combining like terms. In this case, combine 2 and -5:
	(2 - 5) + y = 8
3. Continue to simplify the left side:
	-3 + y = 8
4. To isolate y, add 3 to both sides of the equation to get rid of the -3 on the left side:
	-3 + y + 3 = 8 + 3
5. Simplify both sides:
	y = 11
So, the solution to the equation is y = 11.
`,
	},
	{
		id: "96",
		level: 1,
		question: "Solve for y in the equation: y - 5 = -8",
		options: [
			{ option: "3" },
			{ option: "-3" },
			{ option: "13" },
			{ option: "-13" },
		],
		answer: "-3",
		solution: `
To solve for y in the equation y - 5 = -8, you can isolate y by following these steps:
1. Start with the equation:
	y - 5 = -8
2. To isolate y, add 5 to both sides of the equation to get rid of the -5 on the left side:
	y - 5 + 5 = -8 + 5
3. Simplify both sides:
	y = -3
So, the solution to the equation is y = -3.
`,
	},
	{
		id: "96",
		level: 1,
		question: "Solve for y in the equation: y - 5 = -8",
		options: [
			{ option: "3" },
			{ option: "-3" },
			{ option: "13" },
			{ option: "-13" },
		],
		answer: "-3",
		solution: `
To solve for y in the equation y - 5 = -8, you can isolate y by following these steps:
1. Start with the equation:
	y - 5 = -8
2. To isolate y, add 5 to both sides of the equation to get rid of the -5 on the left side:
	y - 5 + 5 = -8 + 5
3. Simplify both sides:
	y = -3
So, the solution to the equation is y = -3.
`,
	},
	{
		id: "97",
		level: 1,
		question: "Solve for y in the equation: y + 5 = 2 – 4",
		options: [
			{ option: "-7" },
			{ option: "7" },
			{ option: "9" },
			{ option: "-9" },
		],
		answer: "-7",
		solution: `
To solve for y in the equation y + 5 = 2 - 4, you can isolate y by following these steps:
1. Start with the equation:
	y + 5 = 2 - 4
2. First, simplify the right side by calculating 2 - 4:
	y + 5 = -2
3. To isolate y, subtract 5 from both sides of the equation to get rid of the +5 on the left side:
	y + 5 - 5 = -2 - 5
4. Simplify both sides:
	y = -7
So, the solution to the equation is y = -7.
`,
	},
	{
		id: "98",
		level: 1,
		question: "Solve for y in the equation: 3 - y + 5 = 4",
		options: [
			{ option: "4" },
			{ option: "-4" },
			{ option: "6" },
			{ option: "-12" },
		],
		answer: "4",
		solution: `
To solve for y in the equation 3 - y + 5 = 4, you can isolate y by following these steps:
1. Start with the equation:
	3 - y + 5 = 4
2. First, simplify the left side by combining like terms. In this case, combine 3 and 5:
	8 - y = 4
3. To isolate y, subtract 8 from both sides of the equation to get rid of the +8 on the left side:
	8 - y - 8 = 4 - 8
4. Simplify both sides:
	-y = -4
5. To solve for y, multiply both sides by -1 to get y by itself. When you multiply both sides by -1, you need to change the sign of the right side:
	-1 * (-y) = -1 * (-4)
	This simplifies to:
	y = 4
So, the solution to the equation is y = 4.
`,
	},
	{
		id: "99",
		level: 1,
		question: "Solve for y in the equation: y + 12 = -6",
		options: [
			{ option: "18" },
			{ option: "-6" },
			{ option: "-18" },
			{ option: "6" },
		],
		answer: "4",
		solution: `
To solve for y in the equation y + 12 = -6, you can isolate y by following these steps:
1. Start with the equation:
	y + 12 = -6
2. To isolate y, subtract 12 from both sides of the equation to get rid of the +12 on the left side:
	y + 12 - 12 = -6 - 12
3. Simplify both sides:
	y = -18
So, the solution to the equation is y = -18.
`,
	},
	{
		id: "100",
		level: 1,
		question: "Solve for y in the equation: y - 23 = -17",
		options: [
			{ option: "40" },
			{ option: "-40" },
			{ option: "6" },
			{ option: "-6" },
		],
		answer: "6",
		solution: `
To solve for y in the equation y - 23 = -17, you can isolate y by following these steps:
1. Start with the equation:
	y - 23 = -17
2. To isolate y, add 23 to both sides of the equation to get rid of the -23 on the left side:
	y - 23 + 23 = -17 + 23
3. Simplify both sides:
	y = 6
So, the solution to the equation is y = 6.
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
