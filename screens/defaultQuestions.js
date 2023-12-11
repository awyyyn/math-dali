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
		options: [
			{ option: "8" },
			{ option: "1/3" },
			{ option: "3" },
			{ option: "6" },
		],
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
		options: [
			{ option: "8/12" },
			{ option: "¾" },
			{ option: "19/12" },
			{ option: "2/3" },
		],
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
		options: [
			{ option: "3" },
			{ option: "4" },
			{ option: "7" },
			{ option: "5" },
		],
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
		options: [
			{ option: "8" },
			{ option: "2" },
			{ option: "4" },
			{ option: "6" },
		],
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
			{ option: "4 2/3 cups" },
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
	{
		id: "6",
		level: 1,
		question: "Evaluate the expression: 22 - (3 * -5) * -3",
		options: [
			{ option: "-23" },
			{ option: "67" },
			{ option: "7" },
			{ option: "-67" },
		],
		answer: "-23",
		solution: `
To evaluate the expression 22 - (3 * -5) * -3, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 3 * -5:
3 * -5 = -15
Now the expression becomes: 22 - (-15) * -3
Next, perform the multiplication: -15 * -3 = 45
Now the expression becomes: 22 - 45
Finally, perform the subtraction: 22 - 45 = -23
So, the final answer is -23.
In summary, you first calculated the value inside the parentheses, then proceeded with the multiplication and finally the subtraction to get the final result of -23.
        `,
	},
	{
		id: "7",
		level: 1,
		question: "Evaluate the expression: 18 - (3 * -7) * 2",
		options: [
			{ option: "90" },
			{ option: "60" },
			{ option: "70" },
			{ option: "-60" },
		],
		answer: "60",
		solution: `
To evaluate the expression 18 - (3 * -7) * 2, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 3 * -7:
3 * -7 = -21
Now the expression becomes: 18 - (-21) * 2
Next, perform the multiplication: -21 * 2 = -42
Now the expression becomes: 18 - (-42)
Finally, perform the subtraction: 18 - (-42) = 18 + 42 = 60
So, the final answer is 60.
In summary, you first calculated the value inside the parentheses, then proceeded with the multiplication and finally the addition to get the final result of 60.
        `,
	},
	{
		id: "8",
		level: 1,
		question: "Evaluate the expression: 9- (3 * 3) * -4",
		options: [
			{ option: "0" },
			{ option: "-4" },
			{ option: "45" },
			{ option: "-27" },
		],
		answer: "45",
		solution: `
To evaluate the expression 9 - (3 * 3) * -4, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 3 * 3:
3 * 3 = 9
Now the expression becomes: 9 - 9 * -4
Next, perform the multiplication: 9 * -4 = -36
Now the expression becomes: 9 - (-36)
Finally, perform the subtraction: 9 - (-36) = 9 + 36 = 45
So, the final answer is 45.
In summary, you first calculated the value inside the parentheses, then proceeded with the multiplication and finally the addition to get the final result of 45.
        `,
	},
	{
		id: "9",
		level: 1,
		question: "Evaluate the expression: 9+(12 / 3) * 4",
		options: [
			{ option: "25" },
			{ option: "21" },
			{ option: "52" },
			{ option: "23" },
		],
		answer: "25",
		solution: `
To evaluate the expression 9 + (12 / 3) * 4, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 12 / 3:
12 / 3 = 4
Now the expression becomes: 9 + 4 * 4
Next, perform the multiplication: 4 * 4 = 16
Now the expression becomes: 9 + 16
Finally, perform the addition: 9 + 16 = 25
So, the final answer is 25.
In summary, you first calculated the value inside the parentheses, then proceeded with the multiplication and finally the addition to get the final result of 25.
        `,
	},
	{
		id: "10",
		level: 1,
		question: "Evaluate the expression: 7+(18 / -3) * 2",
		options: [
			{ option: "19" },
			{ option: "-19" },
			{ option: "5" },
			{ option: "-5" },
		],
		answer: "-5",
		solution: `
To evaluate the expression 7 + (18 / -3) * 2, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 18 / -3:
18 / -3 = -6
Now the expression becomes: 7 + (-6) * 2
Next, perform the multiplication: -6 * 2 = -12
Now the expression becomes: 7 + (-12)
Finally, perform the addition: 7 + (-12) = -5
So, the final answer is -5.
In summary, you first calculated the value inside the parentheses, which is -6, then proceeded with the multiplication and finally the addition to get the final result of -5.
        `,
	},
	{
		id: "11",
		level: 1,
		question: "Evaluate the expression: 8 + (2 * -3) / 2",
		options: [
			{ option: "11" },
			{ option: "-11" },
			{ option: "5" },
			{ option: "-5" },
		],
		answer: "-5",
		solution: `
To evaluate the expression 8 + (2 * -3) / 2, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 2 * -3:
2 * -3 = -6
Now the expression becomes: 8 + (-6) / 2
Next, perform the division: -6 / 2 = -3
Now the expression becomes: 8 + (-3)
Finally, perform the addition: 8 + (-3) = 5
So, the final answer is 5.
In summary, you first calculated the value inside the parentheses, which is -6, then proceeded with the division and finally the addition to get the final result of 5.
        `,
	},
	{
		id: "12",
		level: 1,
		question: "Evaluate the expression: 7 + (5 * -4) / 2",
		options: [
			{ option: "17" },
			{ option: "-17" },
			{ option: "-3" },
			{ option: "3" },
		],
		answer: "-3",
		solution: `
To evaluate the expression 7 + (5 * -4) / 2, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 5 * -4:
5 * -4 = -20
Now the expression becomes: 7 + (-20) / 2
Next, perform the division: -20 / 2 = -10
Now the expression becomes: 7 + (-10)
Finally, perform the addition: 7 + (-10) = -3
So, the final answer is -3.
In summary, you first calculated the value inside the parentheses, which is -20, then proceeded with the division and finally the addition to get the final result of -3.
        `,
	},
	{
		id: "13",
		level: 1,
		question: "Evaluate the expression: -7 + (5 * 6) / -3",
		options: [
			{ option: "10" },
			{ option: "-10" },
			{ option: "-17" },
			{ option: "17" },
		],
		answer: "-17",
		solution: `
To evaluate the expression -7 + (5 * 6) / -3, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 5 * 6:
5 * 6 = 30
Now the expression becomes: -7 + 30 / -3
Next, perform the division: 30 / -3 = -10
Now the expression becomes: -7 + (-10)
Finally, perform the addition: -7 + (-10) = -17
So, the final answer is -17.
In summary, you first calculated the value inside the parentheses, which is 30, then proceeded with the division and finally the addition to get the final result of -17.
        `,
	},
	{
		id: "14",
		level: 1,
		question: "Evaluate the expression: -7 + (5 * 3) * -3",
		options: [
			{ option: "52" },
			{ option: "-52" },
			{ option: "45" },
			{ option: "-45" },
		],
		answer: "-17",
		solution: `
To evaluate the expression -7 + (5 * 3) * -3, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 5 * 3:
5 * 3 = 15
Now the expression becomes: -7 + 15 * -3
Next, perform the multiplication: 15 * -3 = -45
Now the expression becomes: -7 + (-45)
Finally, perform the addition: -7 + (-45) = -52
So, the final answer is -52.
In summary, you first calculated the value inside the parentheses, which is 15, then proceeded with the multiplication and finally the addition to get the final result of -52.
        `,
	},
	{
		id: "15",
		level: 1,
		question: "Evaluate the expression: -17 + (5 * 2) * 4",
		options: [
			{ option: "57" },
			{ option: "-57" },
			{ option: "-23" },
			{ option: "23" },
		],
		answer: "23",
		solution: `
To evaluate the expression -17 + (5 * 2) * 4, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 5 * 2:
5 * 2 = 10
Now the expression becomes: -17 + 10 * 4
Next, perform the multiplication: 10 * 4 = 40
Now the expression becomes: -17 + 40
Finally, perform the addition: -17 + 40 = 23
So, the final answer is 23.
In summary, you first calculated the value inside the parentheses, which is 10, then proceeded with the multiplication and finally the addition to get the final result of 23.
        `,
	},
	{
		id: "16",
		level: 1,
		question: "Evaluate the expression: -8 / 2 + (7 * 3)",
		options: [
			{ option: "-25" },
			{ option: "17" },
			{ option: "-17" },
			{ option: "none of the above" },
		],
		answer: "17",
		solution: `
To evaluate the expression -8 / 2 + (7 * 3), you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
First, perform the division: -8 / 2 = -4
Now the expression becomes: -4 + (7 * 3)
Inside the parentheses, evaluate 7 * 3: 
7 * 3 = 21
Now the expression becomes: -4 + 21
Finally, perform the addition: -4 + 21 = 17
So, the final answer is 17.
In summary, you first calculated the value of the division, which is -4, and then proceeded with the multiplication and finally the addition to get the final result of 17.
        `,
	},
	{
		id: "17",
		level: 1,
		question: "Evaluate the expression: -24 / 3 - (2 * 9)",
		options: [
			{ option: "-26" },
			{ option: "26" },
			{ option: "10" },
			{ option: "-10" },
		],
		answer: "-26",
		solution: `
To evaluate the expression -24 / 3 - (2 * 9), you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
First, perform the division: -24 / 3 = -8
Now the expression becomes: -8 - (2 * 9)
Inside the parentheses, evaluate 2 * 9:
2 * 9 = 18
Now the expression becomes: -8 - 18
Finally, perform the subtraction: -8 - 18 = -26
So, the final answer is -26.
In summary, you first calculated the value of the division, which is -8, and then proceeded with the multiplication and finally the subtraction to get the final result of -26.
        `,
	},
	{
		id: "18",
		level: 1,
		question: "Evaluate the expression: -16 / 2 - (-3 * 6)",
		options: [
			{ option: "10" },
			{ option: "-10" },
			{ option: "-26" },
			{ option: "26" },
		],
		answer: "10",
		solution: `
To evaluate the expression -16 / 2 - (-3 * 6), you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
First, perform the division: -16 / 2 = -8
Now the expression becomes: -8 - (-3 * 6)
Inside the second set of parentheses, evaluate -3 * 6:
-3 * 6 = -18
Now the expression becomes: -8 - (-18)
To subtract a negative number, you can treat it as adding the positive of that number:
-8 + 18 = 10
So, the final answer is 10.
In summary, you first calculated the value of the division, which is -8, and then proceeded with the multiplication and the subtraction (which is equivalent to addition) to get the final result of 10.
        `,
	},
	{
		id: "19",
		level: 1,
		question: "Evaluate the expression: (-3 * 6) -3 * 2",
		options: [
			{ option: "12" },
			{ option: "-12" },
			{ option: "-24" },
			{ option: "24" },
		],
		answer: "-12",
		solution: `
To evaluate the expression (-3 * 6) - 3 * 2, you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate -3 * 6:
-3 * 6 = -18
Now the expression becomes: -18 - 3 * 2
Next, perform the multiplication: -3 * 2 = -6
Now the expression becomes: -18 - (-6)
To subtract a negative number, you can treat it as adding the positive of that number:
-18 + 6 = -12
So, the final answer is -12.
In summary, you first calculated the value inside the first set of parentheses, which is -18, then proceeded with the multiplication and the subtraction (which is equivalent to addition) to get the final result of -12.
        `,
	},
	{
		id: "20",
		level: 1,
		question: "Evaluate the expression: (-3 * 6) - (3 * 2)",
		options: [
			{ option: "24" },
			{ option: "12" },
			{ option: "-24" },
			{ option: "12" },
		],
		answer: "-24",
		solution: `
To evaluate the expression (-3 * 6) - (3 * 2), you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate -3 * 6:
-3 * 6 = -18
Now the expression becomes: -18 - (3 * 2)
Next, inside the second set of parentheses, evaluate 3 * 2:
3 * 2 = 6
Now the expression becomes: -18 - 6
Finally, perform the subtraction: -18 - 6 = -24
So, the final answer is -24.
In summary, you first calculated the values inside each set of parentheses, and then proceeded with the subtraction to get the final result of -24.
        `,
	},
	{
		id: "21",
		level: 1,
		question: "Evaluate the expression: (-3 * 6) + (12 / -2)",
		options: [
			{ option: "24" },
			{ option: "12" },
			{ option: "-24" },
			{ option: "12" },
		],
		answer: "-24",
		solution: `
To evaluate the expression (-3 * 6) + (12 / -2), you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate -3 * 6:
-3 * 6 = -18
Now the expression becomes: -18 + (12 / -2)
Inside the second set of parentheses, evaluate 12 / -2:
12 / -2 = -6
Now the expression becomes: -18 + (-6)
Finally, perform the addition: -18 + (-6) = -18 - 6 = -24
So, the final answer is -24.
In summary, you first calculated the value inside each set of parentheses, and then proceeded with the addition (which is equivalent to subtraction when adding a negative number) to get the final result of -24.
        `,
	},
	{
		id: "22",
		level: 1,
		question: "Evaluate the expression: (-6 * 2) - (28 / -7)",
		options: [
			{ option: "-8" },
			{ option: "-16" },
			{ option: "8" },
			{ option: "16" },
		],
		answer: "-8",
		solution: `
To evaluate the expression (-6 * 2) - (28 / -7), you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate -6 * 2:
-6 * 2 = -12
Now the expression becomes: -12 - (28 / -7)
Inside the second set of parentheses, evaluate 28 / -7:
28 / -7 = -4
Now the expression becomes: -12 - (-4)
To subtract a negative number, you can treat it as adding the positive of that number:
-12 + 4 = -8
So, the final answer is -8.
In summary, you first calculated the value inside each set of parentheses, and then proceeded with the addition (which is equivalent to subtraction when adding a positive number) to get the final result of -8.
        `,
	},
	{
		id: "23",
		level: 1,
		question: "Evaluate the expression: (4 * 7) + (28 / -7)",
		options: [
			{ option: "0" },
			{ option: "-24" },
			{ option: "32" },
			{ option: "none of the above" },
		],
		answer: "-8",
		solution: `
To evaluate the expression (4 * 7) + (28 / -7), you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 4 * 7:
4 * 7 = 28
Now the expression becomes: 28 + (28 / -7)
Inside the second set of parentheses, evaluate 28 / -7:
28 / -7 = -4
Now the expression becomes: 28 + (-4)
Finally, perform the addition: 28 + (-4) = 28 - 4 = 24
So, the final answer is 24.
In summary, you first calculated the value inside each set of parentheses, and then proceeded with the addition (which is equivalent to subtraction when adding a negative number) to get the final result of 24.
        `,
	},
	{
		id: "24",
		level: 1,
		question: "Evaluate the expression: (2 * 6) + 4 * 3",
		options: [
			{ option: "12" },
			{ option: "24" },
			{ option: "42" },
			{ option: "34" },
		],
		answer: "-8",
		solution: `
To evaluate the expression (2 * 6) + (4 * 3), you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 2 * 6:
2 * 6 = 12
Now the expression becomes: 12 + (4 * 3)
Inside the second set of parentheses, evaluate 4 * 3:
4 * 3 = 12
Now the expression becomes: 12 + 12
Finally, perform the addition: 12 + 12 = 24
So, the final answer is 24.
In summary, you first calculated the value inside each set of parentheses, and then proceeded with the addition to get the final result of 24.
        `,
	},
	{
		id: "25",
		level: 1,
		question: "Evaluate the expression: (2 * 7) + 6 * -3",
		options: [
			{ option: "-4" },
			{ option: "-60" },
			{ option: "60" },
			{ option: "none of the above" },
		],
		answer: "-4",
		solution: `
To evaluate the expression (2 * 7) + (6 * -3), you should follow the order of operations (PEMDAS), which stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).
Let's break it down step by step:
Inside the first set of parentheses, evaluate 2 * 7:
2 * 7 = 14
Now the expression becomes: 14 + (6 * -3)
Inside the second set of parentheses, evaluate 6 * -3:
6 * -3 = -18
Now the expression becomes: 14 + (-18)
Finally, perform the addition: 14 + (-18) = -4
So, the final answer is -4.
In summary, you first calculated the value inside each set of parentheses, and then proceeded with the addition to get the final result of -4.
        `,
	},
	{
		id: "26",
		level: 1,
		question: "What is the slope of the equation: 2y = -2x - 4",
		options: [
			{ option: "-2" },
			{ option: "-4" },
			{ option: "1" },
			{ option: "-1" },
		],
		answer: "-1",
		solution: `
To find the slope of the equation 2y = -2x - 4, you need to rearrange it into slope-intercept form (y = mx + b), where "m" represents the slope.
First, divide both sides of the equation by 2 to isolate y:
2y = -2x - 4
Dividing by 2:
y = (-2x - 4) / 2
Now, simplify the right-hand side of the equation: 
y = -x – 2
Now, the equation is in slope-intercept form, where the coefficient of x (-1 in this case) is the slope.
So, the slope of the equation 2y = -2x - 4 is -1. This means that for every one-unit increase in the x-coordinate, the y-coordinate decreases by 1 unit, and for every one-unit decrease in the x-coordinate, the y-coordinate increases by 1 unit. The negative sign indicates that the line has a negative slope, meaning it slants downward from left to right on a graph.
        `,
	},
	{
		id: "27",
		level: 1,
		question: "What is the slope of the equation: -3y = 12x + 4",
		options: [
			{ option: "12" },
			{ option: "4" },
			{ option: "-3" },
			{ option: "-4" },
		],
		answer: "-4",
		solution: `
To find the slope of the equation -3y = 12x + 4, you need to rearrange it into slope-intercept form (y = mx + b), where "m" represents the slope.
First, divide both sides of the equation by -3 to isolate y:
-3y = 12x + 4
Dividing by -3: 
y = (12x + 4) / -3
Now, simplify the right-hand side of the equation: 
y = -4x - 4/3
Now, the equation is in slope-intercept form, where the coefficient of x (-4 in this case) is the slope.
So, the slope of the equation -3y = 12x + 4 is -4. This means that for every one-unit increase in the x-coordinate, the y-coordinate decreases by 4 units, and for every one-unit decrease in the x-coordinate, the y-coordinate increases by 4 units.
        `,
	},
	{
		id: "28",
		level: 1,
		question: "What is the slope of the equation: -y = 2x - ¼",
		options: [
			{ option: "2" },
			{ option: "1/4" },
			{ option: "-1/4" },
			{ option: "-2" },
		],
		answer: "-2",
		solution: `
To find the slope of the equation -y = 2x - 1/4, you need to rearrange it into slope-intercept form (y = mx + b), where "m" represents the slope.
First, multiply both sides of the equation by -1 to isolate y:
-y = 2x - 1/4
Multiplying by -1:
y = -2x + 1/4
Now, the equation is in slope-intercept form, where the coefficient of x (-2 in this case) is the slope.
So, the slope of the equation -y = 2x - 1/4 is -2. This means that for every one-unit increase in the x-coordinate, the y-coordinate decreases by 2 units, and for every one-unit decrease in the x-coordinate, the y-coordinate increases by 2 units. The negative sign indicates that the line has a negative slope, meaning it slants downward from left to right on a graph.
        `,
	},
	{
		id: "29",
		level: 1,
		question: "What is the slope of the equation: -2y = -x - 1/8",
		options: [
			{ option: "-1" },
			{ option: "1" },
			{ option: "-1/8" },
			{ option: "½" },
		],
		answer: "½",
		solution: `
To find the slope of the equation -2y = -x - 1/8, you need to rearrange it into slope-intercept form (y = mx + b), where "m" represents the slope.
First, divide both sides of the equation by -2 to isolate y:
-2y = -x - 1/8
Dividing by -2:
y = (x + 1/8) / 2
Now, simplify the right-hand side of the equation:
y = (1/2)x + 1/16
Now, the equation is in slope-intercept form, where the coefficient of x (1/2 in this case) is the slope.
So, the slope of the equation -2y = -x - 1/8 is 1/2. This means that for every one-unit increase in the x-coordinate, the y-coordinate increases by 1/2 unit, and for every one-unit decrease in the x-coordinate, the y-coordinate decreases by 1/2 unit.
        `,
	},
	{
		id: "30",
		level: 1,
		question: "What is the slope of the equation: -2y = x - 1/8",
		options: [
			{ option: "1" },
			{ option: "½" },
			{ option: "1/8" },
			{ option: "none of the above" },
		],
		answer: "none of the above",
		solution: `
To find the slope of the equation -2y = x - 1/8, you need to rearrange it into slope-intercept form (y = mx + b), where "m" represents the slope.
First, divide both sides of the equation by -2 to isolate y:
-2y = x - 1/8
Dividing by -2:
y = -1/2x + 1/16
Now, the equation is in slope-intercept form, where the coefficient of x (-1/2 in this case) is the slope.
So, the slope of the equation -2y = x - 1/8 is -1/2. This means that for every one-unit increase in the x-coordinate, the y-coordinate decreases by 1/2 unit, and for every one-unit decrease in the x-coordinate, the y-coordinate increases by 1/2 unit.
        `,
	},
	{
		id: "31",
		level: 1,
		question: "What is the slope of the equation: -y = 1/2x – 9",
		options: [
			{ option: "-1/2" },
			{ option: "-9" },
			{ option: "1" },
			{ option: "none of the above" },
		],
		answer: "-1/2",
		solution: `
To find the slope of the equation -y = 1/2x - 9, you need to rearrange it into slope-intercept form (y = mx + b), where "m" represents the slope.
First, multiply both sides of the equation by -1 to isolate y:
-y = 1/2x - 9
Multiplying by -1:
y = -1/2x + 9
Now, the equation is in slope-intercept form, where the coefficient of x (-1/2 in this case) is the slope.
So, the slope of the equation -y = 1/2x - 9 is -1/2. This means that for every one-unit increase in the x-coordinate, the y-coordinate decreases by 1/2 unit, and for every one-unit decrease in the x-coordinate, the y-coordinate increases by 1/2 unit. The negative sign indicates that the line has a negative slope, meaning it slants downward from left to right on a graph.
        `,
	},
	{
		id: "32",
		level: 1,
		question: "What is the y intercept of the equation: -y = 1/2x – 9",
		options: [
			{ option: "½" },
			{ option: "-1/2" },
			{ option: "9" },
			{ option: "1" },
		],
		answer: "9",
		solution: `
To find the y-intercept of the equation -y = 1/2x - 9, you need to isolate the y-intercept term, which is the constant term on the right side of the equation when x is set to 0.
In this equation, you have:
-y = 1/2x - 9
Now, let's set x to 0 and solve for y:
-y = 1/2(0) - 9
This simplifies to:
-y = 0 - 9
Now, multiply both sides by -1 to isolate y:
y = 9
So, the y-intercept of the equation -y = 1/2x - 9 is 9. This means that the graph of this equation intersects the y-axis at the point (0, 9).
        `,
	},
	{
		id: "33",
		level: 1,
		question: "What is the y intercept of the equation: -2y = 1/2x + 9",
		options: [
			{ option: "½" },
			{ option: "-9" },
			{ option: "-9/2" },
			{ option: "9/2" },
		],
		answer: "-9/2",
		solution: `
To find the y-intercept of the equation -2y = 1/2x + 9, you need to isolate the y-intercept term, which is the constant term on the right side of the equation when x is set to 0.
In this equation, you have:
-2y = 1/2x + 9
Now, let's set x to 0 and solve for y:
-2y = 1/2(0) + 9
This simplifies to:
-2y = 0 + 9
Now, divide both sides by -2 to isolate y:
y = 9 / (-2)
y = -9/2
So, the y-intercept of the equation -2y = 1/2x + 9 is -9/2. This means that the graph of this equation intersects the y-axis at the point (0, -9/2) or (-4.5, 0).
        `,
	},
	{
		id: "34",
		level: 1,
		question: "What is the y intercept of the equation: -y = 3x + 9",
		options: [
			{ option: "3" },
			{ option: "-9" },
			{ option: "9" },
			{ option: "none of the above" },
		],
		answer: "-9",
		solution: `
To find the y-intercept of the equation -y = 3x + 9, you need to isolate the y-intercept term, which is the constant term on the right side of the equation when x is set to 0.
In this equation, you have:
-y = 3x + 9
Now, let's set x to 0 and solve for y:
-y = 3(0) + 9
This simplifies to:
-y = 0 + 9
Now, multiply both sides by -1 to isolate y:
y = -9
So, the y-intercept of the equation -y = 3x + 9 is -9. This means that the graph of this equation intersects the y-axis at the point (0, -9).
        `,
	},
	{
		id: "35",
		level: 1,
		question: "What is the y intercept of the equation: -6y = 12x + 9",
		options: [
			{ option: "-12" },
			{ option: "-6" },
			{ option: "-3/2" },
			{ option: "9" },
		],
		answer: "-3/2",
		solution: `
To find the y-intercept of the equation -6y = 12x + 9, you need to isolate the y-intercept term, which is the constant term on the right side of the equation when x is set to 0.
In this equation, you have:
-6y = 12x + 9
Now, let's set x to 0 and solve for y:
-6y = 12(0) + 9
This simplifies to:
-6y = 0 + 9
Now, divide both sides by -6 to isolate y:
y = 9 / (-6)
y = -3/2
So, the y-intercept of the equation -6y = 12x + 9 is -3/2. This means that the graph of this equation intersects the y-axis at the point (0, -3/2) or (-1.5, 0).
        `,
	},
	{
		id: "36",
		level: 1,
		question: "What is the y intercept of the equation: 3y = -x + 21",
		options: [
			{ option: "21" },
			{ option: "8" },
			{ option: "7" },
			{ option: "-1" },
		],
		answer: "7",
		solution: `
To find the y-intercept of the equation 3y = -x + 21, you need to isolate the y-intercept term, which is the constant term on the right side of the equation when x is set to 0.
In this equation, you have:
3y = -x + 21
Now, let's set x to 0 and solve for y:
3y = -(0) + 21
This simplifies to:
3y = 0 + 21
Now, divide both sides by 3 to isolate y:
y = 21 / 3
y = 7
So, the y-intercept of the equation 3y = -x + 21 is 7. This means that the graph of this equation intersects the y-axis at the point (0, 7).
        `,
	},
	{
		id: "37",
		level: 1,
		question: "What is the y intercept of the equation: -3y = -3x + 27",
		options: [
			{ option: "-3" },
			{ option: "27" },
			{ option: "-9" },
			{ option: "1" },
		],
		answer: "7",
		solution: `
To find the y-intercept of the equation -3y = -3x + 27, you need to isolate the y-intercept term, which is the constant term on the right side of the equation when x is set to 0.
In this equation, you have:
-3y = -3x + 27
Now, let's set x to 0 and solve for y:
-3y = -3(0) + 27
This simplifies to:
-3y = 0 + 27
Now, divide both sides by -3 to isolate y:
y = 27 / (-3)
y = -9
So, the y-intercept of the equation -3y = -3x + 27 is -9. This means that the graph of this equation intersects the y-axis at the point (0, -9).
        `,
	},
	{
		id: "38",
		level: 1,
		question: "What is the y intercept of the equation: 7y = -21x + 7",
		options: [
			{ option: "-21" },
			{ option: "-3" },
			{ option: "1" },
			{ option: "7" },
		],
		answer: "1",
		solution: `
To find the y-intercept of the equation 7y = -21x + 7, you need to isolate the y-intercept term, which is the constant term on the right side of the equation when x is set to 0.
In this equation, you have:
7y = -21x + 7
Now, let's set x to 0 and solve for y:
7y = -21(0) + 7
This simplifies to:
7y = 0 + 7
Now, divide both sides by 7 to isolate y:
y = 7 / 7
y = 1
So, the y-intercept of the equation 7y = -21x + 7 is 1. This means that the graph of this equation intersects the y-axis at the point (0, 1).
        `,
	},
	{
		id: "39",
		level: 1,
		question: "What is the y intercept of the equation: 1y = -11x + 7",
		options: [
			{ option: "-11" },
			{ option: "-7" },
			{ option: "7" },
			{ option: "11x" },
		],
		answer: "7",
		solution: `
To find the y-intercept of the equation 1y = -11x + 7, you need to isolate the y-intercept term, which is the constant term on the right side of the equation when x is set to 0.
In this equation, you have:
1y = -11x + 7
Now, let's set x to 0 and solve for y:
1y = -11(0) + 7
This simplifies to:
1y = 0 + 7
Now, divide both sides by 1 (which is not typically shown in equations, but it's implied) to isolate y:
y = 7
So, the y-intercept of the equation 1y = -11x + 7 is 7. This means that the graph of this equation intersects the y-axis at the point (0, 7).
        `,
	},
	{
		id: "40",
		level: 1,
		question: "What is the y intercept of the equation: -2y = -21x + 16",
		options: [
			{ option: "-21" },
			{ option: "2/21" },
			{ option: "-8" },
			{ option: "none of the above" },
		],
		answer: "-8",
		solution: `
To find the y-intercept of the equation -2y = -21x + 16, you need to isolate the y-intercept term, which is the constant term on the right side of the equation when x is set to 0.
In this equation, you have:
-2y = -21x + 16
Now, let's set x to 0 and solve for y:
-2y = -21(0) + 16
This simplifies to:
-2y = 0 + 16
Now, divide both sides by -2 to isolate y:
y = 16 / (-2)
y = -8
So, the y-intercept of the equation -2y = -21x + 16 is -8. This means that the graph of this equation intersects the y-axis at the point (0, -8).
        `,
	},
	{
		id: "41",
		level: 1,
		question:
			"You invested $5,000 in a savings account with an annual interest rate of 4%. How much interest will you earn after one year?",
		options: [
			{ option: "$40" },
			{ option: "$160" },
			{ option: "$200" },
			{ option: "$250" },
		],
		answer: "$200",
		solution: `
To calculate the interest earned on a $5,000 investment with an annual interest rate of 4%, you can use the following formula:
Interest = Principal (initial amount) x Rate
Interest = $5,000 x 4% (or 0.04 as a decimal)
Interest = $5,000 x 0.04 = $200
You will earn $200 in interest after one year on your $5,000 investment at a 4% annual interest rate.
        `,
	},
	{
		id: "42",
		level: 1,
		question:
			"You receive a 15% raise in your annual salary. If your current salary is $50,000, how much will your new salary be?",
		options: [
			{ option: "$57,000" },
			{ option: "$57,500" },
			{ option: "$58,000" },
			{ option: "$58,500" },
		],
		answer: "$200",
		solution: `
To calculate your new salary after a 15% raise, you can follow these steps:
Step 1: Calculate the raise amount.
Raise amount = Current salary * Raise percentage
Raise amount = $50,000 * 15% = $50,000 * 0.15 = $7,500
Step 2: Add the raise amount to your current salary to find the new salary.
New salary = Current salary + Raise amount
New salary = $50,000 + $7,500 = $57,500
So, with a 15% raise, your new salary will be $57,500.
        `,
	},
	{
		id: "43",
		level: 1,
		question:
			"In a class of 40 students, 25% are fluent in a second language. How many students are not fluent in the second language?",
		options: [
			{ option: "10" },
			{ option: "15" },
			{ option: "20" },
			{ option: "none of the above" },
		],
		answer: "none of the above",
		solution: `
To find out how many students in a class of 40 are not fluent in a second language, you can use the following formula:
Number of students not fluent in the second language = Total number of students × (100% - Percentage who are fluent)
Number of students not fluent in the second language = 40 students × (100% - 25%) = 40 students × 75%
First, calculate 75% of 40 students:
0.75 (75%) × 40 = 30 students
So, 30 students in the class are not fluent in a second language.
        `,
	},
	{
		id: "44",
		level: 1,
		question:
			"A restaurant bill is $80, and you want to leave a 15% tip. How much should you leave as a tip?",
		options: [
			{ option: "$12" },
			{ option: "$14" },
			{ option: "$16" },
			{ option: "$10" },
		],
		answer: "$12",
		solution: `
To calculate a 15% tip on an $80 restaurant bill, you can use the following formula:
Tip amount = Bill amount × Tip percentage
Tip amount = $80 × 15% (or 0.15 as a decimal)
Tip amount = $80 × 0.15 = $12
You should leave a tip of $12 on an $80 restaurant bill if you want to leave a 15% tip.
        `,
	},
	{
		id: "45",
		level: 1,
		question:
			"You bought a car for $20,000, and its value has depreciated by 30%. What is the current value of the car?",
		options: [
			{ option: "$6,000" },
			{ option: "$12,000" },
			{ option: "$14,000" },
			{ option: "$10,000" },
		],
		answer: "$14,000",
		solution: `
To find the current value of a car that has depreciated by 30%, you can use the following formula:
Current Value = Original Value - Depreciation
Depreciation = Original Value × Depreciation Rate
In this case, the original value is $20,000, and the depreciation rate is 30% (0.30 as a decimal).
Depreciation = $20,000 × 0.30 = $6,000
Now, subtract the depreciation amount from the original value to find the current value:
Current Value = $20,000 - $6,000 = $14,000
So, the current value of the car is $14,000 after depreciating by 30%.
        `,
	},
	{
		id: "46",
		level: 1,
		question:
			"You scored 85% on your math test, which had 50 questions. How many questions did you answer correctly?",
		options: [
			{ option: "42" },
			{ option: "43.5" },
			{ option: "44.5" },
			{ option: "none of the above" },
		],
		answer: "none of the above",
		solution: `
To find out how many questions you answered correctly on a math test where you scored 85%, you can use the following formula:
Number of correct answers = (Percentage score / 100) x Total number of questions
Number of correct answers = (85% / 100) x 50 questions
First, convert the percentage to a decimal by dividing by 100:
85% = 0.85 (as a decimal)
Now, calculate the number of correct answers:
Number of correct answers = 0.85 x 50 questions = 42.5
Since you can't have half a question, we round down to the nearest whole number. So, you answered 42 questions correctly on your math test.
        `,
	},
	{
		id: "47",
		level: 1,
		question:
			"A store initially priced a shirt at $60 but later reduced the price by 20%. What is the new sale price of the shirt?",
		options: [
			{ option: "$12" },
			{ option: "$38" },
			{ option: "$48" },
			{ option: "$58" },
		],
		answer: "$48",
		solution: `
To find the new sale price of the shirt after a 20% reduction, you can use the following formula:
Sale Price = Original Price - (Original Price × Discount Percentage)
In this case, the original price of the shirt is $60, and the discount percentage is 20%, or 0.20 as a decimal.
Sale Price = $60 - ($60 × 0.20)
Sale Price = $60 - ($12)
Sale Price = $48
The new sale price of the shirt is $48 after a 20% reduction.
        `,
	},
	{
		id: "48",
		level: 1,
		question:
			"Your monthly mobile phone bill is $80. If you use a 15% discount code, how much will you save on your bill?",
		options: [
			{ option: "$14" },
			{ option: "$12" },
			{ option: "$16" },
			{ option: "$10" },
		],
		answer: "$12",
		solution: `
To calculate how much you will save on your monthly mobile phone bill with a 15% discount, you can use the following formula:
Savings = Monthly bill amount × Discount percentage
Savings = $80 × 15% (or 0.15 as a decimal)
Savings = $80 × 0.15 = $12
You will save $12 on your monthly mobile phone bill with a 15% discount.
        `,
	},
	{
		id: "49",
		level: 1,
		question:
			"You save 15% of your monthly income. If your monthly income is $2,000, how much do you save each month?",
		options: [
			{ option: "$150" },
			{ option: "$300" },
			{ option: "$450" },
			{ option: "$200" },
		],
		answer: "$300",
		solution: `
To find out how much you save each month, given that you save 15% of your monthly income, you can use the following formula:
Savings = Monthly income × Savings percentage
Savings = $2,000 × 15% (or 0.15 as a decimal)
Savings = $2,000 × 0.15 = $300
You save $300 each month from your $2,000 monthly income, as 15% of $2,000 is $300.
        `,
	},
	{
		id: "50",
		level: 1,
		question:
			"A company's profits increased by 15% this year. If their profits were $60,000 last year, what are their profits this year?",
		options: [
			{ option: "$66,000" },
			{ option: "$69,000" },
			{ option: "$72,000" },
			{ option: "$63,000" },
		],
		answer: "$69,000",
		solution: `
To calculate the company's profits this year after a 15% increase, you can use the following formula:
Profits this year = Profits last year + (Profits last year × Profit increase percentage)
Profits this year = $60,000 + ($60,000 × 15% or 0.15 as a decimal)
Profits this year = $60,000 + ($9,000)
Profits this year = $69,000
So, the company's profits this year are $69,000 after a 15% increase from the previous year's profits of $60,000.
        `,
	},
	{
		id: "51",
		level: 1,
		question:
			"A company offers its employees a 5% raise. If your current salary is $40,000, how much will your new salary be after the raise?",
		options: [
			{ option: "$44,000" },
			{ option: "$42,500" },
			{ option: "$42,000" },
			{ option: "$43,000" },
		],
		answer: "$42,000",
		solution: `
To calculate your new salary after a 5% raise, you can use the following formula:
New Salary = Current Salary + (Current Salary * Raise Percentage)
New Salary = $40,000 + ($40,000 * 5% or 0.05 as a decimal)
New Salary = $40,000 + ($2,000)
New Salary = $42,000
So, with a 5% raise, your new salary will be $42,000.
        `,
	},
	{
		id: "52",
		level: 1,
		question:
			"You invest $5,000 in a savings account with a 3% annual interest rate. How much will you have in the account after one year?",
		options: [
			{ option: "$5,300" },
			{ option: "$5,030" },
			{ option: "$5,030" },
			{ option: "$5,050" },
		],
		answer: "$5,030",
		solution: `
To calculate the amount you will have in the savings account after one year with a 3% annual interest rate, you can use the following formula for simple interest:
Future Value = Initial Principal × (1 + (Annual Interest Rate/100))
Future Value = $5,000 × (1 + (3/100))
Future Value = $5,000 × (1 + 0.03)
Future Value = $5,000 × 1.03
Future Value = $5,150
So, after one year, you will have $5,150 in the savings account with a 3% annual interest rate.
        `,
	},
	{
		id: "53",
		level: 1,
		question:
			"You invest $10,000 in a stock that increases in value by 8%. How much is your investment worth after the increase?",
		options: [
			{ option: "$18,000" },
			{ option: "$10,800" },
			{ option: "$10,400" },
			{ option: "$10,200" },
		],
		answer: "$10,800",
		solution: `
To calculate the value of your investment after it increases by 8%, you can use the following formula:
New Value = Initial Value × (1 + Percentage Increase/100)
New Value = $10,000 × (1 + 8/100)
New Value = $10,000 × (1 + 0.08)
New Value = $10,000 × 1.08
New Value = $10,800
So, your investment will be worth $10,800 after it increases in value by 8%.
        `,
	},
	{
		id: "54",
		level: 1,
		question:
			"A store initially marks up a product by 50% and then offers a 20% discount. If the product's original cost was $100, what is the final sale price after the discount?",
		options: [
			{ option: "$130" },
			{ option: "$120" },
			{ option: "$125" },
			{ option: "$127" },
		],
		answer: "$120",
		solution: `
To find the final sale price after a 50% markup and a 20% discount, you can follow these steps:
1. Calculate the price after the 50% markup:  
	Markup Price = Original Cost + (Original Cost × Markup Percentage)
	Markup Price = $100 + ($100 × 50% or 0.50 as a decimal)
	Markup Price = $100 + ($50)
	Markup Price = $150
2. Calculate the price after the 20% discount from the markup price:
	Discounted Price = Markup Price - (Markup Price × Discount Percentage)
	Discounted Price = $150 - ($150 × 20% or 0.20 as a decimal)
	Discounted Price = $150 - ($30)
	Discounted Price = $120
So, the final sale price after the 50% markup and 20% discount is $120.
        `,
	},
	{
		id: "55",
		level: 1,
		question:
			"You have a pizza, and you eat 40% of it. If the remaining pizza is divided equally between you and a friend, what percentage of the original pizza does each of you get?",
		options: [
			{ option: "50%" },
			{ option: "40%" },
			{ option: "30%" },
			{ option: "20%" },
		],
		answer: "30%",
		solution: `
To find out what percentage of the original pizza each of you gets, you can follow these steps:
1. First, calculate how much of the pizza remains after you've eaten 40% of it:
Remaining pizza = 100% - 40% = 60%
2. Now, divide the remaining pizza equally between you and your friend. Each of you gets half of the remaining pizza, which is 60% / 2:
Each of you gets 60% / 2 = 30%
So, you and your friend each get 30% of the original pizza.
        `,
	},
	{
		id: "56",
		level: 1,
		question: "Solve for x in the equation: 2x + 8 = 18",
		options: [
			{ option: "13" },
			{ option: "5" },
			{ option: "-5" },
			{ option: "-13" },
		],
		answer: "5",
		solution: `
		To solve for x in the equation 2x + 8 = 18, follow these steps:
		1. Start by isolating the term with x on one side of the equation. In this case, you want to isolate 2x.
		2. Subtract 8 from both sides of the equation to get rid of the constant term on the left side:
		   2x + 8 - 8 = 18 - 8
		   This simplifies to:
		   2x = 10
		3. Now, to solve for x, divide both sides of the equation by 2:
		   (2x) / 2 = 10 / 2
		   This simplifies to:
		   x = 5
		So, the solution to the equation 2x + 8 = 18 is x = 5.
        `,
	},
	{
		id: "57",
		level: 1,
		question: "Solve for x in the equation: 3x - 5 = 28",
		options: [
			{ option: "23/5" },
			{ option: "23/3" },
			{ option: "-11" },
			{ option: "11" },
		],
		answer: "11",
		solution: `
To solve for x in the equation 3x - 5 = 28, follow these steps:
1. Start by isolating the term with x on one side of the equation. In this case, you want to isolate 3x.
2. Add 5 to both sides of the equation to get rid of the constant term on the left side:
   3x - 5 + 5 = 28 + 5
   This simplifies to:
   3x = 33
3. Now, to solve for x, divide both sides of the equation by 3:
   (3x) / 3 = 33 / 3
   This simplifies to:
   x = 11
So, the solution to the equation 3x - 5 = 28 is x = 11.
        `,
	},
	{
		id: "58",
		level: 1,
		question: "Solve for x in the equation: 3x - 3 = 21",
		options: [
			{ option: "5" },
			{ option: "6" },
			{ option: "7" },
			{ option: "8" },
		],
		answer: "8",
		solution: ` 
To solve for x in the equation 3x - 3 = 21, follow these steps:
1. Start by isolating the term with x on one side of the equation. In this case, you want to isolate 3x.
2. Add 3 to both sides of the equation to get rid of the constant term on the left side:
	3x - 3 + 3 = 21 + 3
	This simplifies to:
	3x = 24
3. Now, to solve for x, divide both sides of the equation by 3:
	(3x) / 3 = 24 / 3
	This simplifies to:
	x = 8
So, the solution to the equation 3x - 3 = 21 is x = 8.
        `,
	},
	{
		id: "59",
		level: 1,
		question: "Solve for x in the equation: 3x - 3 = -27",
		options: [
			{ option: "-10" },
			{ option: "10" },
			{ option: "-8" },
			{ option: "8" },
		],
		answer: "-8",
		solution: ` 
To solve for x in the equation 3x - 3 = -27, follow these steps:
1. Start by isolating the term with x on one side of the equation. In this case, you want to isolate 3x.
2. Add 3 to both sides of the equation to get rid of the constant term on the left side:
	3x - 3 + 3 = -27 + 3
	This simplifies to:
	3x = -24
3. Now, to solve for x, divide both sides of the equation by 3:
	(3x) / 3 = (-24) / 3
	This simplifies to:
	x = -8
So, the solution to the equation 3x - 3 = -27 is x = -8.
        `,
	},
	{
		id: "60",
		level: 1,
		question: "Solve for x in the equation: 3x + 7 = -29",
		options: [
			{ option: "-22/7" },
			{ option: "22/7" },
			{ option: "-12" },
			{ option: "12" },
		],
		answer: "-12",
		solution: ` 
To solve for x in the equation 3x + 7 = -29, follow these steps:
1. Start by isolating the term with x on one side of the equation. In this case, you want to isolate 3x.
2. Subtract 7 from both sides of the equation to get rid of the constant term on the left side:
	3x + 7 - 7 = -29 - 7
	This simplifies to:
	3x = -36
3. Now, to solve for x, divide both sides of the equation by 3:
	(3x) / 3 = (-36) / 3
	This simplifies to:
	x = -12
So, the solution to the equation 3x + 7 = -29 is x = -12.
        `,
	},
	{
		id: "61",
		level: 1,
		question: "Solve for x in the equation: 3x - 12 = -33",
		options: [
			{ option: "15" },
			{ option: "-15" },
			{ option: "-7" },
			{ option: "7" },
		],
		answer: "-7",
		solution: ` 
To solve for x in the equation 3x - 12 = -33, follow these steps:
1. Start by isolating the term with x on one side of the equation. In this case, you want to isolate 3x.
2. Add 12 to both sides of the equation to get rid of the constant term on the left side:
	3x - 12 + 12 = -33 + 12
	This simplifies to:
	3x = -21
3. Now, to solve for x, divide both sides of the equation by 3:
	(3x) / 3 = (-21) / 3
	This simplifies to:
	x = -7
So, the solution to the equation 3x - 12 = -33 is x = -7.
        `,
	},
	{
		id: "62",
		level: 1,
		question: "Solve for x in the equation: 7x - 2 = -33",
		options: [
			{ option: "-10" },
			{ option: "-31/2" },
			{ option: "-31/7" },
			{ option: "none of the above" },
		],
		answer: "-31/7",
		solution: ` 
To solve for x in the equation 7x - 2 = -33, follow these steps:
1. Start by isolating the term with x on one side of the equation. In this case, you want to isolate 7x.
2. Add 2 to both sides of the equation to get rid of the constant term on the left side:
	7x - 2 + 2 = -33 + 2
	This simplifies to:
	7x = -31
3. Now, to solve for x, divide both sides of the equation by 7:
	(7x) / 7 = (-31) / 7
	This simplifies to:
	x = -31/7
So, the solution to the equation 7x - 2 = -33 is x = -31/7.
        `,
	},
	{
		id: "63",
		level: 1,
		question: "Solve for x in the equation: 5x - 3 = -38",
		options: [
			{ option: "-41/5" },
			{ option: "-7" },
			{ option: "-9" },
			{ option: "-41/3" },
		],
		answer: "-7",
		solution: ` 
To solve for x in the equation 5x - 3 = -38, follow these steps:
1. Start by isolating the term with x on one side of the equation. In this case, you want to isolate 5x.
2. Add 3 to both sides of the equation to get rid of the constant term on the left side:
	5x - 3 + 3 = -38 + 3
	This simplifies to:
	5x = -35
3. Now, to solve for x, divide both sides of the equation by 5:
	(5x) / 5 = (-35) / 5
	This simplifies to:
	x = -7
So, the solution to the equation 5x - 3 = -38 is x = -7.
        `,
	},
	{
		id: "64",
		level: 1,
		question: "Solve for x in the equation: 6x - 6 = 6",
		options: [
			{ option: "0" },
			{ option: "1" },
			{ option: "2" },
			{ option: "-1" },
		],
		answer: "2",
		solution: ` 
To solve for x in the equation 6x - 6 = 6, follow these steps:
1. Start by isolating the term with x on one side of the equation. In this case, you want to isolate 6x.
2. Add 6 to both sides of the equation to get rid of the constant term on the left side:
	6x - 6 + 6 = 6 + 6
	This simplifies to:
	6x = 12
3. Now, to solve for x, divide both sides of the equation by 6:
	(6x) / 6 = 12 / 6
	This simplifies to:
	x = 2
So, the solution to the equation 6x - 6 = 6 is x = 2.
        `,
	},
	{
		id: "65",
		level: 1,
		question: "Solve for x in the equation: 8x - 6 = 58",
		options: [
			{ option: "8" },
			{ option: "-8" },
			{ option: "52/8" },
			{ option: "-52/8" },
		],
		answer: "8",
		solution: ` 
To solve for x in the equation 8x - 6 = 58, follow these steps:
1. Start by isolating the term with x on one side of the equation. In this case, you want to isolate 8x.
2. Add 6 to both sides of the equation to get rid of the constant term on the left side:
	8x - 6 + 6 = 58 + 6
	This simplifies to:
	8x = 64
3. Now, to solve for x, divide both sides of the equation by 8:
	(8x) / 8 = 64 / 8
	This simplifies to:
	x = 8
So, the solution to the equation 8x - 6 = 58 is x = 8.
        `,
	},
	{
		id: "66",
		level: 1,
		question: "Solve for y in the equation: 7y - 7 = 49",
		options: [
			{ option: "7" },
			{ option: "-7" },
			{ option: "8" },
			{ option: "-8" },
		],
		answer: "8",
		solution: ` 
To solve for y in the equation 7y - 7 = 49, follow these steps:
1. Start by isolating the term with y on one side of the equation. In this case, you want to isolate 7y.
2. Add 7 to both sides of the equation to get rid of the constant term on the left side:
	7y - 7 + 7 = 49 + 7
	This simplifies to:
	7y = 56
3. Now, to solve for y, divide both sides of the equation by 7:
	(7y) / 7 = 56 / 7
	This simplifies to:
	y = 8
So, the solution to the equation 7y - 7 = 49 is y = 8.
        `,
	},
	{
		id: "67",
		level: 1,
		question: "Solve for y in the equation: 6y - 6 = -42",
		options: [
			{ option: "-6" },
			{ option: "6" },
			{ option: "-7" },
			{ option: "7" },
		],
		answer: "8",
		solution: ` 
To solve for y in the equation 6y - 6 = -42, follow these steps:
1. Start by isolating the term with y on one side of the equation. In this case, you want to isolate 6y.
2. Add 6 to both sides of the equation to get rid of the constant term on the left side:
	6y - 6 + 6 = -42 + 6
	This simplifies to:
	6y = -36
3. Now, to solve for y, divide both sides of the equation by 6:
	(6y) / 6 = (-36) / 6
	This simplifies to:
	y = -6
So, the solution to the equation 6y - 6 = -42 is y = -6.
        `,
	},
	{
		id: "68",
		level: 1,
		question: "Solve for y in the equation: 6y - 5 = -49",
		options: [
			{ option: "9" },
			{ option: "-9" },
			{ option: "-44/5" },
			{ option: "-22/3" },
		],
		answer: "-22/3",
		solution: ` 
To solve for y in the equation 6y - 5 = -49, follow these steps:
1. Start by isolating the term with y on one side of the equation. In this case, you want to isolate 6y.
2. Add 5 to both sides of the equation to get rid of the constant term on the left side:
	6y - 5 + 5 = -49 + 5
	This simplifies to:
	6y = -44
3. Now, to solve for y, divide both sides of the equation by 6:
	(6y) / 6 = (-44) / 6
	This simplifies to:
	y = -44 / 6
	You can simplify -44/6 to -22/3, so:
	y = -22/3
So, the solution to the equation 6y - 5 = -49 is y = -22/3.
        `,
	},
	{
		id: "69",
		level: 1,
		question: "Solve for y in the equation: 9y - 9 = 81",
		options: [
			{ option: "9" },
			{ option: "-9" },
			{ option: "10" },
			{ option: "-10" },
		],
		answer: "10",
		solution: ` 
To solve for y in the equation 9y - 9 = 81, follow these steps:
1. Start by isolating the term with y on one side of the equation. In this case, you want to isolate 9y.
2. Add 9 to both sides of the equation to get rid of the constant term on the left side:
	9y - 9 + 9 = 81 + 9
	This simplifies to:
	9y = 90
3. Now, to solve for y, divide both sides of the equation by 9:
	(9y) / 9 = 90 / 9
	This simplifies to:
	y = 10
So, the solution to the equation 9y - 9 = 81 is y = 10.
        `,
	},
	{
		id: "70",
		level: 1,
		question: "Solve for y in the equation: 11y - 12 = 109",
		options: [
			{ option: "11" },
			{ option: "12" },
			{ option: "13" },
			{ option: "-12" },
		],
		answer: "11",
		solution: ` 
To solve for y in the equation 11y - 12 = 109, follow these steps:
1. Start by isolating the term with y on one side of the equation. In this case, you want to isolate 11y.
2. Add 12 to both sides of the equation to get rid of the constant term on the left side:
	11y - 12 + 12 = 109 + 12
	This simplifies to:
	11y = 121
3. Now, to solve for y, divide both sides of the equation by 11:
	(11y) / 11 = 121 / 11
	This simplifies to:
	y = 11
So, the solution to the equation 11y - 12 = 109 is y = 11.
        `,
	},
	{
		id: "71",
		level: 1,
		question: "Solve for y in the equation: 15y - 22 = 143",
		options: [
			{ option: "10" },
			{ option: "-10" },
			{ option: "11" },
			{ option: "12" },
		],
		answer: "11",
		solution: ` 
To solve for y in the equation 15y - 22 = 143, follow these steps:
1. Start by isolating the term with y on one side of the equation. In this case, you want to isolate 15y.
2. Add 22 to both sides of the equation to get rid of the constant term on the left side:
	15y - 22 + 22 = 143 + 22
	This simplifies to:
	15y = 165
3. Now, to solve for y, divide both sides of the equation by 15:
	(15y) / 15 = 165 / 15
	This simplifies to:
	y = 11
So, the solution to the equation 15y - 22 = 143 is y = 11.
        `,
	},
	{
		id: "72",
		level: 1,
		question: "Solve for y in the equation: -5y - 15 = 120",
		options: [
			{ option: "26" },
			{ option: "17" },
			{ option: "-27" },
			{ option: "38" },
		],
		answer: "-27",
		solution: ` 
To solve for y in the equation -5y - 15 = 120, follow these steps:
1. Start by isolating the term with y on one side of the equation. In this case, you want to isolate -5y.
2. Add 15 to both sides of the equation to get rid of the constant term on the left side:
	-5y - 15 + 15 = 120 + 15
	This simplifies to:
	-5y = 135
3. Now, to solve for y, divide both sides of the equation by -5. Remember that when you divide by a negative number, the inequality sign flips:
	(-5y) / -5 = 135 / -5
	This simplifies to:
	y = -27
So, the solution to the equation -5y - 15 = 120 is y = -27.
        `,
	},
	{
		id: "73",
		level: 1,
		question: "Solve for y in the equation: -8y + 12 = -36",
		options: [
			{ option: "-6" },
			{ option: "4" },
			{ option: "-3" },
			{ option: "6" },
		],
		answer: "6",
		solution: ` 
To solve for y in the equation -8y + 12 = -36, follow these steps:
1. Start by isolating the term with y on one side of the equation. In this case, you want to isolate -8y.
2. Subtract 12 from both sides of the equation to get rid of the constant term on the left side:
	-8y + 12 - 12 = -36 - 12
	This simplifies to:
	-8y = -48
3. Now, to solve for y, divide both sides of the equation by -8:
	(-8y) / -8 = (-48) / -8
	This simplifies to:
	y = 6
So, the solution to the equation -8y + 12 = -36 is y = 6.
        `,
	},
	{
		id: "74",
		level: 1,
		question: "Solve for y in the equation: -7y - 10 = -36",
		options: [
			{ option: "8" },
			{ option: "46/7" },
			{ option: "26/7" },
			{ option: "none of the above" },
		],
		answer: "26/6",
		solution: ` 
To solve for y in the equation -7y - 10 = -36, follow these steps:
1. Start by isolating the term with y on one side of the equation. In this case, you want to isolate -7y.
2. Add 10 to both sides of the equation to get rid of the constant term on the left side:
	-7y - 10 + 10 = -36 + 10
	This simplifies to:
	-7y = -26
3. Now, to solve for y, divide both sides of the equation by -7:
	(-7y) / -7 = (-26) / -7
	This simplifies to:
	y = 26/7
So, the solution to the equation -7y - 10 = -36 is y = 26/7.
        `,
	},
	{
		id: "75",
		level: 1,
		question: "Solve for y in the equation: -6y + 10 = -34",
		options: [
			{ option: "-4" },
			{ option: "4" },
			{ option: "7" },
			{ option: "none of the above" },
		],
		answer: "none of the above",
		solution: ` 
To solve for y in the equation -6y + 10 = -34, follow these steps:
1. Start by isolating the term with y on one side of the equation. In this case, you want to isolate -6y.
2. Subtract 10 from both sides of the equation to get rid of the constant term on the left side:
	-6y + 10 - 10 = -34 - 10
	This simplifies to:
	-6y = -44
3. Now, to solve for y, divide both sides of the equation by -6:
	(-6y) / -6 = (-44) / -6
	This simplifies to:
	y = 44 / 6
	You can simplify 44/6 by dividing both the numerator and denominator by their greatest common divisor, which is 2:
	y = (44 / 2) / (6 / 2)
	y = 22 / 3
So, the solution to the equation -6y + 10 = -34 is y = 22/3.
        `,
	},
	{
		id: "76",
		level: 1,
		question: "Solve for x: 3(x - 4) = 21",
		options: [
			{ option: "10" },
			{ option: "11" },
			{ option: "12" },
			{ option: "3" },
		],
		answer: "11",
		solution: ` 
To solve for x in the equation 3(x - 4) = 21, you'll need to apply the distributive property to simplify the equation:
1. Distribute the 3 on the left side of the equation:
	3(x - 4) = 3 * x - 3 * 4 = 3x - 12
2. Now, the equation is simplified to:
	3x - 12 = 21
3. Add 12 to both sides of the equation to isolate the term with x:
	3x - 12 + 12 = 21 + 12
	This simplifies to:
	3x = 33
4. Finally, divide both sides of the equation by 3 to solve for x:
	(3x) / 3 = 33 / 3
	This simplifies to:
	x = 11
So, the solution to the equation 3(x - 4) = 21 is x = 11.
        `,
	},
	{
		id: "77",
		level: 1,
		question: "Solve for x: 5(3x - 2) = 45",
		options: [
			{ option: "3" },
			{ option: "4" },
			{ option: "11/3" },
			{ option: "9/2" },
		],
		answer: "11/3",
		solution: ` 
To solve for x in the equation 5(3x - 2) = 45, you'll need to apply the distributive property to simplify the equation:
1. Distribute the 5 on the left side of the equation:
	5(3x - 2) = 5 * 3x - 5 * 2 = 15x - 10
2. Now, the equation is simplified to:
	15x - 10 = 45
3. Add 10 to both sides of the equation to isolate the term with x:
	15x - 10 + 10 = 45 + 10
	This simplifies to:
	15x = 55
4. Finally, divide both sides of the equation by 15 to solve for x:
	(15x) / 15 = 55 / 15
	This simplifies to:
	x = 11/3
So, the solution to the equation 5(3x - 2) = 45 is x = 11/3.
        `,
	},
	{
		id: "78",
		level: 1,
		question: "Solve for x: 5(3x - 3) = 75",
		options: [
			{ option: "6" },
			{ option: "7" },
			{ option: "16/3" },
			{ option: "-7" },
		],
		answer: "6",
		solution: ` 
To solve for x in the equation 5(3x - 3) = 75, you'll need to apply the distributive property to simplify the equation:
1. Distribute the 5 on the left side of the equation:
	5(3x - 3) = 5 * 3x - 5 * 3 = 15x - 15
2. Now, the equation is simplified to:
	15x - 15 = 75
3. Add 15 to both sides of the equation to isolate the term with x:
	15x - 15 + 15 = 75 + 15
	This simplifies to:
	15x = 90
4. Finally, divide both sides of the equation by 15 to solve for x:
	(15x) / 15 = 90 / 15
	This simplifies to:   x = 6
So, the solution to the equation 5(3x - 3) = 75 is x = 6.
        `,
	},
	{
		id: "79",
		level: 1,
		question: "Solve for x: -4(2x - 5) = 22",
		options: [
			{ option: "-1/4" },
			{ option: "½" },
			{ option: "2" },
			{ option: "4" },
		],
		answer: "-1/4",
		solution: ` 
To solve for x in the equation -4(2x - 5) = 22, you'll need to apply the distributive property to simplify the equation:
1. Distribute the -4 on the left side of the equation:
	-4(2x - 5) = -4 * 2x + (-4) * (-5) = -8x + 20
2. Now, the equation is simplified to:
	-8x + 20 = 22
3. Subtract 20 from both sides of the equation to isolate the term with x:
	-8x + 20 - 20 = 22 - 20
	This simplifies to:
	-8x = 2
4. Finally, divide both sides of the equation by -8 to solve for x:
	(-8x) / -8 = 2 / -8
	This simplifies to:
	x = -1/4
So, the solution to the equation -4(2x - 5) = 22 is x = -1/4.
        `,
	},
	{
		id: "80",
		level: 1,
		question: "Solve for x: -2(4x - 3) = 16",
		options: [
			{ option: "-5/4" },
			{ option: "22/8" },
			{ option: "-11/4" },
			{ option: "none of the above" },
		],
		answer: "-1/4",
		solution: ` 
To solve for x in the equation -2(4x - 3) = 16, follow these steps:
1. Distribute the -2 on the left side of the equation:
	-2(4x - 3) = -2 * 4x + (-2) * (-3) = -8x + 6
2. Now, the equation is simplified to:
	-8x + 6 = 16
3. Subtract 6 from both sides of the equation to isolate the term with x:
	-8x + 6 - 6 = 16 - 6
	This simplifies to:
	-8x = 10
4. Finally, divide both sides of the equation by -8 to solve for x:
	(-8x) / -8 = 10 / -8
	This simplifies to:
	x = -5/4
So, the solution to the equation -2(4x - 3) = 16 is x = -5/4.
        `,
	},
	{
		id: "81",
		level: 1,
		question: "Solve for x: -7(3x + 2) = 28",
		options: [
			{ option: "2" },
			{ option: "-2" },
			{ option: "-2/3" },
			{ option: "none of the above" },
		],
		answer: "-2",
		solution: ` 
To solve for x in the equation -7(3x + 2) = 28, you can follow these steps:
1. Distribute the -7 on the left side of the equation:
	-7(3x + 2) = -7 * 3x - 7 * 2 = -21x - 14
2. Now, the equation is simplified to:
	-21x - 14 = 28
3. Add 14 to both sides of the equation to isolate the term with x:
	-21x - 14 + 14 = 28 + 14
	This simplifies to:
	-21x = 42
4. Finally, divide both sides of the equation by -21 to solve for x:
	(-21x) / -21 = 42 / -21
	This simplifies to:
	x = -2
So, the solution to the equation -7(3x + 2) = 28 is x = -2.
        `,
	},
	{
		id: "82",
		level: 1,
		question: "Solve for x: -7(2x + 2) = 50",
		options: [
			{ option: "-32/7" },
			{ option: "64/7" },
			{ option: "8/7" },
			{ option: "32/7" },
		],
		answer: "-32/7",
		solution: ` 
To solve for x in the equation -7(2x + 2) = 50, you can follow these steps:
1. Distribute the -7 on the left side of the equation:
	-7(2x + 2) = -7 * 2x - (-7) * 2 = -14x - 14
2. Now, the equation is simplified to:
	-14x - 14 = 50
3. Add 14 to both sides of the equation to isolate the term with x:
	-14x - 14 + 14 = 50 + 14
	This simplifies to:
	-14x = 64
4. Finally, divide both sides of the equation by -14 to solve for x:
	(-14x) / -14 = 64 / -14
	This simplifies to:
	x = -64/14
You can simplify -64/14 by dividing both the numerator and denominator by their greatest common divisor, which is 2:
	x = (-64/2) / (14/2)
	x = -32/7
So, the solution to the equation -7(2x + 2) = 50 is x = -32/7.
        `,
	},
	{
		id: "83",
		level: 1,
		question: "Solve for x: 4(2x - 3) = 20",
		options: [
			{ option: "4" },
			{ option: "8" },
			{ option: "2" },
			{ option: "3" },
		],
		answer: "4",
		solution: ` 
To solve for x in the equation 4(2x - 3) = 20, follow these steps:
1. Distribute the 4 on the left side of the equation:
	4(2x - 3) = 4 * 2x - 4 * 3 = 8x - 12
2. Now, the equation is simplified to:
	8x - 12 = 20
3. Add 12 to both sides of the equation to isolate the term with x:
	8x - 12 + 12 = 20 + 12
	This simplifies to:
	8x = 32
4. Finally, divide both sides of the equation by 8 to solve for x:
	(8x) / 8 = 32 / 8
	This simplifies to:
	x = 4
So, the solution to the equation 4(2x - 3) = 20 is x = 4.
        `,
	},
	{
		id: "84",
		level: 1,
		question: "Solve for x: 8(4x + 1) = 64",
		options: [
			{ option: "3" },
			{ option: "2" },
			{ option: "4/3" },
			{ option: "7/4" },
		],
		answer: "7/4",
		solution: ` 
To solve for x in the equation 8(4x + 1) = 64, follow these steps:
1. Distribute the 8 on the left side of the equation:
	8(4x + 1) = 8 * 4x + 8 * 1 = 32x + 8
2. Now, the equation is simplified to:
	32x + 8 = 64
3. Subtract 8 from both sides of the equation to isolate the term with x:
	32x + 8 - 8 = 64 - 8
	This simplifies to:   32x = 56
4. Finally, divide both sides of the equation by 32 to solve for x:
	(32x) / 32 = 56 / 32
	This simplifies to:
	x = 7/4
So, the solution to the equation 8(4x + 1) = 64 is x = 7/4.
        `,
	},
	{
		id: "85",
		level: 1,
		question: "Solve for x: 9(2x - 4) = 81",
		options: [
			{ option: "13/2" },
			{ option: "11/2" },
			{ option: "13/3" },
			{ option: "11/3" },
		],
		answer: "13/2",
		solution: ` 
To solve for x in the equation 9(2x - 4) = 81, follow these steps:
1. Distribute the 9 on the left side of the equation:
	9(2x - 4) = 9 * 2x - 9 * 4 = 18x - 36
2. Now, the equation is simplified to:
	18x - 36 = 81
3. Add 36 to both sides of the equation to isolate the term with x:
	18x - 36 + 36 = 81 + 36
	This simplifies to:
	18x = 117
4. Finally, divide both sides of the equation by 18 to solve for x:
	(18x) / 18 = 117 / 18
	This simplifies to:
	x = 13/2
So, the solution to the equation 9(2x - 4) = 81 is x = 13/2.
        `,
	},
	{
		id: "86",
		level: 1,
		question: "If 3(2y + 1) = 21, what is the value of y?",
		options: [
			{ option: "3" },
			{ option: "7" },
			{ option: "6" },
			{ option: "2" },
		],
		answer: "3",
		solution: ` 
To find the value of y in the equation 3(2y + 1) = 21, follow these steps:
1. Start by distributing the 3 on the left side of the equation:
	3(2y + 1) = 3 * 2y + 3 * 1 = 6y + 3
2. Now, the equation is simplified to:
	6y + 3 = 21
3. Subtract 3 from both sides of the equation to isolate the term with y:
	6y + 3 - 3 = 21 - 3
	This simplifies to:
	6y = 18
4. Finally, divide both sides of the equation by 6 to solve for y:
	(6y) / 6 = 18 / 6
	This simplifies to:
	y = 3
So, the value of y in the equation 3(2y + 1) = 21 is y = 3.
        `,
	},
	{
		id: "87",
		level: 1,
		question: "If 4(y - 2) = 12, what is the value of y?",
		options: [
			{ option: "1" },
			{ option: "5" },
			{ option: "-1" },
			{ option: "3" },
		],
		answer: "5",
		solution: ` 
To find the value of y in the equation 4(y - 2) = 12, follow these steps:
1. Start by distributing the 4 on the left side of the equation:
	4(y - 2) = 4 * y - 4 * 2 = 4y - 8
2. Now, the equation is simplified to:
	4y - 8 = 12
3. Add 8 to both sides of the equation to isolate the term with y:
	4y - 8 + 8 = 12 + 8
	This simplifies to:
	4y = 20
4. Finally, divide both sides of the equation by 4 to solve for y:
	(4y) / 4 = 20 / 4
	This simplifies to:
	y = 5
So, the value of y in the equation 4(y - 2) = 12 is y = 5.
        `,
	},
	{
		id: "88",
		level: 1,
		question: "If 2(3y - 4) = 14, what is the value of y?",
		options: [
			{ option: "3" },
			{ option: "11/3" },
			{ option: "9/2" },
			{ option: "-11/3" },
		],
		answer: "11/3",
		solution: ` 
To find the value of y in the equation 2(3y - 4) = 14, follow these steps:
1. Start by distributing the 2 on the left side of the equation:
	2(3y - 4) = 2 * 3y - 2 * 4 = 6y - 8
2. Now, the equation is simplified to:
	6y - 8 = 14
3. Add 8 to both sides of the equation to isolate the term with y:
	6y - 8 + 8 = 14 + 8
	This simplifies to:
	6y = 22
4. Finally, divide both sides of the equation by 6 to solve for y:
	(6y) / 6 = 22 / 6
	This simplifies to:
	y = 22 / 6
You can simplify 22/6 by dividing both the numerator and denominator by their greatest common divisor, which is 2:
	y = (22 / 2) / (6 / 2)
	y = 11 / 3
So, the value of y in the equation 2(3y - 4) = 14 is y = 11/3.
        `,
	},
	{
		id: "89",
		level: 1,
		question: "If 5(2y + 5) = 35, what is the value of y?",
		options: [
			{ option: "1" },
			{ option: "6" },
			{ option: "5" },
			{ option: "-1" },
		],
		answer: "1",
		solution: ` 
To find the value of y in the equation 5(2y + 5) = 35, follow these steps:
1. Start by distributing the 5 on the left side of the equation:
	5(2y + 5) = 5 * 2y + 5 * 5 = 10y + 25
2. Now, the equation is simplified to:
	10y + 25 = 35
3. Subtract 25 from both sides of the equation to isolate the term with y:
	10y + 25 - 25 = 35 - 25
	This simplifies to:
	10y = 10
4. Finally, divide both sides of the equation by 10 to solve for y:
	(10y) / 10 = 10 / 10
	This simplifies to:
	y = 1
So, the value of y in the equation 5(2y + 5) = 35 is y = 1.
        `,
	},
	{
		id: "90",
		level: 1,
		question: "If 6(y - 3) = 30, what is the value of y?",
		options: [
			{ option: "3" },
			{ option: "-3" },
			{ option: "8" },
			{ option: "-8" },
		],
		answer: "8",
		solution: ` 
To find the value of y in the equation 6(y - 3) = 30, follow these steps:
1. Start by distributing the 6 on the left side of the equation:
	6(y - 3) = 6 * y - 6 * 3 = 6y - 18
2. Now, the equation is simplified to:
	6y - 18 = 30
3. Add 18 to both sides of the equation to isolate the term with y:
	6y - 18 + 18 = 30 + 18
	This simplifies to:
	6y = 48
4. Finally, divide both sides of the equation by 6 to solve for y:
	(6y) / 6 = 48 / 6
	This simplifies to:
	y = 8
So, the value of y in the equation 6(y - 3) = 30 is y = 8.
        `,
	},
	{
		id: "91",
		level: 1,
		question: "If 3(4y + 2) = 24, what is the value of y?",
		options: [
			{ option: "3" },
			{ option: "2" },
			{ option: "1" },
			{ option: "none of the above" },
		],
		answer: "none of the above",
		solution: ` 
To find the value of y in the equation 3(4y + 2) = 24, follow these steps:
1. Start by distributing the 3 on the left side of the equation:
	3(4y + 2) = 3 * 4y + 3 * 2 = 12y + 6
2. Now, the equation is simplified to:
	12y + 6 = 24
3. Subtract 6 from both sides of the equation to isolate the term with y:
	12y + 6 - 6 = 24 - 6
	This simplifies to:
	12y = 18
4. Finally, divide both sides of the equation by 12 to solve for y:
	(12y) / 12 = 18 / 12
	This simplifies to:
	y = 3/2
So, the value of y in the equation 3(4y + 2) = 24 is y = 3/2.
        `,
	},
	{
		id: "92",
		level: 1,
		question: "If 2(5y - 1) = 16, what is the value of y?",
		options: [
			{ option: "-18/10" },
			{ option: "-9/5" },
			{ option: "9/5" },
			{ option: "none of the above" },
		],
		answer: "9/5",
		solution: ` 
To find the value of y in the equation 2(5y - 1) = 16, follow these steps:
1. Start by distributing the 2 on the left side of the equation:
	2(5y - 1) = 2 * 5y - 2 * 1 = 10y - 2
2. Now, the equation is simplified to:
	10y - 2 = 16
3. Add 2 to both sides of the equation to isolate the term with y:
	10y - 2 + 2 = 16 + 2
	This simplifies to:
	10y = 18
4. Finally, divide both sides of the equation by 10 to solve for y:
	(10y) / 10 = 18 / 10
	This simplifies to:
	y = 9/5
So, the value of y in the equation 2(5y - 1) = 16 is y = 9/5.
        `,
	},
	{
		id: "93",
		level: 1,
		question: "If 7(2y - 3) = 56, what is the value of y?",
		options: [
			{ option: "11/2" },
			{ option: "9/3" },
			{ option: "-11/3" },
			{ option: "13/3" },
		],
		answer: "11/2",
		solution: ` 
To find the value of y in the equation 7(2y - 3) = 56, follow these steps:
1. Start by distributing the 7 on the left side of the equation:
	7(2y - 3) = 7 * 2y - 7 * 3 = 14y - 21
2. Now, the equation is simplified to:
	14y - 21 = 56
3. Add 21 to both sides of the equation to isolate the term with y:
	14y - 21 + 21 = 56 + 21
	This simplifies to:
	14y = 77
4. Finally, divide both sides of the equation by 14 to solve for y:
	(14y) / 14 = 77 / 14
	This simplifies to:
	y = 77/14
You can simplify 77/14 by dividing both the numerator and denominator by their greatest common divisor, which is 7:
	y = (77 / 7) / (14 / 7)
	y = 11/2
So, the value of y in the equation 7(2y - 3) = 56 is y = 11/2.
        `,
	},
	{
		id: "94",
		level: 1,
		question: "If 4(3y + 4) = 32, what is the value of y?",
		options: [
			{ option: "4/3" },
			{ option: "8/6" },
			{ option: "-3/2" },
			{ option: "both b & c" },
		],
		answer: "4/3",
		solution: ` 
To find the value of y in the equation 4(3y + 4) = 32, follow these steps:
1. Start by distributing the 4 on the left side of the equation:
	4(3y + 4) = 4 * 3y + 4 * 4 = 12y + 16
2. Now, the equation is simplified to:
	12y + 16 = 32
3. Subtract 16 from both sides of the equation to isolate the term with y:
	12y + 16 - 16 = 32 - 16
	This simplifies to:
	12y = 16
4. Finally, divide both sides of the equation by 12 to solve for y:
	(12y) / 12 = 16 / 12
	This simplifies to:
	y = 4/3
So, the value of y in the equation 4(3y + 4) = 32 is y = 4/3.
        `,
	},
	{
		id: "95",
		level: 1,
		question: "If 8(y - 2) = 48, what is the value of y?",
		options: [
			{ option: "8" },
			{ option: "-8" },
			{ option: "4" },
			{ option: "-4" },
		],
		answer: "8",
		solution: ` 
To find the value of y in the equation 8(y - 2) = 48, follow these steps:
1. Start by distributing the 8 on the left side of the equation:
	8(y - 2) = 8 * y - 8 * 2 = 8y - 16
2. Now, the equation is simplified to:
	8y - 16 = 48
3. Add 16 to both sides of the equation to isolate the term with y:
	8y - 16 + 16 = 48 + 16
	This simplifies to:   8y = 64
4. Finally, divide both sides of the equation by 8 to solve for y:
	(8y) / 8 = 64 / 8
	This simplifies to:
	y = 8
So, the value of y in the equation 8(y - 2) = 48 is y = 8.
        `,
	},
	{
		id: "96",
		level: 1,
		question: "Add 4/7 and 5/4",
		options: [
			{ option: "51/28" },
			{ option: "41/28" },
			{ option: "21/14" },
			{ option: "none of the above" },
		],
		answer: "51/28",
		solution: ` 
To add the fractions 4/7 and 5/4, you need to find a common denominator. The least common denominator for 7 and 4 is 28. 
1. Rewrite both fractions with a common denominator:
	- 4/7 becomes 16/28 by multiplying both the numerator and denominator by 4.
	- 5/4 becomes 35/28 by multiplying both the numerator and denominator by 7.
2. Now, add the fractions:
	- 16/28 + 35/28 = (16 + 35)/28 = 51/28
So, 4/7 + 5/4 = 51/28.
        `,
	},
	{
		id: "97",
		level: 1,
		question: "Subtract 4/7 and 5/4",
		options: [
			{ option: "19/28" },
			{ option: "2/3" },
			{ option: "-2/3" },
			{ option: "none of the above" },
		],
		answer: "none of the above",
		solution: ` 
To subtract the fractions 4/7 and 5/4, you need to find a common denominator. The least common denominator for 7 and 4 is 28. 
1. Rewrite both fractions with a common denominator:
	- 4/7 becomes 16/28 by multiplying both the numerator and denominator by 4.
	- 5/4 becomes 35/28 by multiplying both the numerator and denominator by 7.
2. Now, subtract the fractions:
	- 16/28 - 35/28 = (16 - 35)/28 = -19/28
So, 4/7 - 5/4 = -19/28.
        `,
	},
	{
		id: "98",
		level: 1,
		question: "Add 2/4 and 3/9",
		options: [
			{ option: "5/6" },
			{ option: "2/3" },
			{ option: "¼" },
			{ option: "1" },
		],
		answer: "5/6",
		solution: ` 
To add the fractions 2/4 and 3/9, you first need to find a common denominator. The least common denominator for 4 and 9 is 36. 
1. Rewrite both fractions with a common denominator:
	- 2/4 becomes 18/36 by multiplying both the numerator and denominator by 9.
	- 3/9 becomes 12/36 by multiplying both the numerator and denominator by 4.
2. Now, add the fractions:
	- 18/36 + 12/36 = (18 + 12)/36 = 30/36
3. Simplify the fraction by dividing both the numerator and denominator by their greatest common divisor, which is 6:
	- (30 ÷ 6) / (36 ÷ 6) = 5/6
So, 2/4 + 3/9 = 5/6.
        `,
	},
	{
		id: "99",
		level: 1,
		question: "Add 9/7 and 3/5",
		options: [
			{ option: "66/25" },
			{ option: "66/35" },
			{ option: "33/35" },
			{ option: "33/25" },
		],
		answer: "66/35",
		solution: ` 
To add the fractions 9/7 and 3/5, you need to find a common denominator. The least common denominator for 7 and 5 is 35.
1. Rewrite both fractions with a common denominator:
	- 9/7 becomes 45/35 by multiplying both the numerator and denominator by 5.
	- 3/5 becomes 21/35 by multiplying both the numerator and denominator by 7.
2. Now, add the fractions:
	- 45/35 + 21/35 = (45 + 21)/35 = 66/35
3. Simplify the fraction by dividing both the numerator and denominator by their greatest common divisor, which is 1:
	- 66/35
So, 9/7 + 3/5 = 66/35.
        `,
	},
	{
		id: "100",
		level: 1,
		question: "Add 7/4 and 9/8",
		options: [
			{ option: "22/8" },
			{ option: "23/8" },
			{ option: "21/8" },
			{ option: "24/8" },
		],
		answer: "23/8",
		solution: ` 
To add the fractions 7/4 and 9/8, you need to find a common denominator. The least common denominator for 4 and 8 is 8.
1. Rewrite both fractions with a common denominator:
	- 7/4 remains the same because the denominator is already 4.
	- 9/8 becomes 9/8 by keeping the denominator as 8.
2. Now, add the fractions:
	- 7/4 + 9/8
3. To add fractions with different denominators, find a common denominator, which is 8 in this case:
	- 7/4 + 9/8 = (7/4) * (2/2) + 9/8 = 14/8 + 9/8
4. Add the fractions with the same denominator:
	- 14/8 + 9/8 = (14 + 9)/8 = 23/8
So, 7/4 + 9/8 = 23/8.
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
			{ option: "y=2 – 6x" },
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
			{ option: "x = 9 / y - 36" },
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
			{ option: "y = 3x - 5" },
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
			{ option: "8x^2 - 2x + 15" },
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
		options: [
			{ option: "1/3" },
			{ option: "3" },
			{ option: "-3" },
			{ option: "-1/3" },
		],
		answer: "-3",
		solution: `

To find the slope of a line perpendicular to the line y = (1/3)x - 7, you can follow these steps:

Step 1: Recognize that the given equation is in slope-intercept form, y = mx + b, where "m" is the slope. In this case, the slope of the given line is (1/3).

Step 2: To find the slope of a line perpendicular to this, you can use the fact that the product of the slopes of two perpendicular lines is -1. So, you need to find the negative reciprocal of (1/3).

Step 3: The negative reciprocal of (1/3) is -3. This means that the slope of a line perpendicular to y = (1/3)x - 7 is -3.

So, the slope of the line perpendicular to y = (1/3)x - 7 is -3.
`,
	},
	{
		id: "6",
		level: 1,
		question:
			"An investment grows by 10% annually. If you invest $5,000 today, how much will it be worth in 5 years?",
		options: [
			{ option: "$5,500" },
			{ option: "$6,250.5" },
			{ option: "$8,090.21" },
			{ option: "none of the above" },
		],
		answer: "none of the above",
		solution: `
To calculate the future value of an investment that grows by 10% annually, you can use the compound interest formula:
Future Value = Present Value × (1 + Annual Growth Rate)^Number of Years
In this case, the present value (initial investment) is $5,000, the annual growth rate is 10% (0.10 as a decimal), and the number of years is 5.
Future Value = $5,000 × (1 + 0.10)^5
Future Value = $5,000 × (1.10)^5
Future Value = $5,000 × 1.61051 (rounded to five decimal places)
Future Value ≈ $8,052.56
So, if you invest $5,000 today and it grows by 10% annually, it will be worth approximately $8,052.56 in 5 years.
`,
	},
	{
		id: "7",
		level: 1,
		question:
			'A store is offering a "Buy 2, Get 1 Free" promotion. If you buy three items each priced at $30, what is the total cost?',
		options: [
			{ option: "$30" },
			{ option: "$90" },
			{ option: "$75" },
			{ option: "$60" },
		],
		answer: "$60",
		solution: `
In a "Buy 2, Get 1 Free" promotion, you pay for the two most expensive items, and the least expensive item is free. In this case, each item is priced at $30, so you are essentially buying two items at full price, and the third item is free.
So, the total cost for three items in this promotion would be:
Total cost = (Price of 2 items) + (Price of 1 item)
`,
	},
	{
		id: "8",
		level: 1,
		question:
			"In a basket of fruit, 40% are apples, 30% are oranges, and the rest are bananas. If there are 20 pieces of fruit in the basket, how many are bananas?",
		options: [
			{ option: "3" },
			{ option: "4" },
			{ option: "6" },
			{ option: "8" },
		],
		answer: "6",
		solution: `  
To find out how many of the fruits in the basket are bananas, you can first calculate the percentage of apples and oranges in the basket, and then subtract that from 100% to find the percentage of bananas. Then, you can use that percentage to find the number of bananas.
Percentage of apples = 40%
Percentage of oranges = 30%
Now, subtract the percentages of apples and oranges from 100% to find the percentage of bananas:
Percentage of bananas = 100% - (Percentage of apples + Percentage of oranges)
Percentage of bananas = 100% - (40% + 30%)
Percentage of bananas = 100% - 70%
Percentage of bananas = 30%
So, 30% of the fruits in the basket are bananas.
If there are 20 pieces of fruit in the basket, you can find the number of bananas by calculating 30% of 20:
Number of bananas = (30/100) * 20
Number of bananas = 0.30 * 20
Number of bananas = 6
So, there are 6 bananas in the basket.
`,
	},
	{
		id: "9",
		level: 1,
		question:
			"A car's value depreciates by 12% each year. If it was worth $20,000 when first purchased, what will be its value after 3 years?",
		options: [
			{ option: "$12,729.34" },
			{ option: "$13,629.44" },
			{ option: "$12,629.34" },
			{ option: "$14,839.44" },
		],
		answer: "$13,629.44",
		solution: `  
To calculate the car's value after 3 years of depreciation, where it loses 12% of its value each year, you can use the following formula:
Value after depreciation = Initial value × (1 - Depreciation rate)^Number of years
In this case, the initial value is $20,000, the depreciation rate is 12% (or 0.12 as a decimal), and the number of years is 3.
Value after depreciation = $20,000 × (1 - 0.12)^3
Value after depreciation = $20,000 × (0.88)^3
Value after depreciation = $20,000 × 0.681472
Value after depreciation ≈ $13,629.44
So, the car's value after 3 years of depreciation will be approximately $13,629.44.
`,
	},
	{
		id: "10",
		level: 1,
		question:
			"If 'z' is 5 less than twice 'w,' what is the right equation to represent this relationship?",
		options: [
			{ option: "z = 2 – 5w" },
			{ option: "z = 2w + 5" },
			{ option: "z = 2w – 5" },
			{ option: "z = 2² – 5" },
		],
		answer: "z = 2w – 5",
		solution: `  
The right equation to represent the relationship between 'z' and 'w' where 'z' is 5 less than twice 'w' can be written as:
z = 2w - 5
Here's an explanation:
- "Twice 'w'" is represented by 2w, which means you're taking two times the value of 'w.'
- "5 less than twice 'w'" means you subtract 5 from the result of 2w.
So, you are taking twice the value of 'w' and then subtracting 5 from it to get 'z'. This relationship is accurately represented by the equation z = 2w - 5.
`,
	},
	{
		id: "11",
		level: 1,
		question:
			"If 'b' is 7 more than half of 'a,' what is the right equation to represent this relationship?",
		options: [
			{ option: "b = 7a + ½" },
			{ option: "b = 7 + a + ½" },
			{ option: "b = 7 + (1/2)a" },
			{ option: "b = 7 + a1/2" },
		],
		answer: "b = 7 + (1/2)a",
		solution: `  
The right equation to represent the relationship between 'b' and 'a' where 'b' is 7 more than half of 'a' can be written as:
b = (1/2)a + 7
Here's an explanation:
- "Half of 'a'" is represented by (1/2)a, which means you're taking half of the value of 'a.'
- "7 more than half of 'a'" means you add 7 to the result of (1/2)a.
So, you are taking half of the value of 'a' and then adding 7 to it to get 'b'. This relationship is accurately represented by the equation b = (1/2)a + 7.
		`,
	},
	{
		id: "12",
		level: 1,
		question:
			"If 'm' is 3 less than four times 'n,' what is the right equation to represent this relationship?",
		options: [
			{ option: "m = 4 – 3n" },
			{ option: "m = 4n – 3" },
			{ option: "m = 3 – 4n" },
			{ option: "m = 4 – 3n" },
		],
		answer: "m = 4n – 3",
		solution: `  
The right equation to represent the relationship between 'm' and 'n' where 'm' is 3 less than four times 'n' can be written as:
m = 4n - 3
Here's an explanation:
- "Four times 'n'" is represented by 4n, which means you're taking four times the value of 'n.'
- "3 less than four times 'n'" means you subtract 3 from the result of 4n.
So, you are taking four times the value of 'n' and then subtracting 3 from it to get 'm'. This relationship is accurately represented by the equation m = 4n - 3.

		`,
	},
	{
		id: "13",
		level: 1,
		question:
			"If 'p' is 2 more than twice 'q,' what is the right equation to represent this relationship?",
		options: [
			{ option: "p = 2p + 2" },
			{ option: "p = 2p - 2" },
			{ option: "p = 2p + 2" },
			{ option: "p = 2q + 2" },
		],
		answer: "p = 2q + 2",
		solution: `  
The right equation to represent the relationship between 'p' and 'q' where 'p' is 2 more than twice 'q' can be written as:
p = 2q + 2
Here's an explanation:
- "Twice 'q'" is represented by 2q, which means you're taking two times the value of 'q.'
- "2 more than twice 'q'" means you add 2 to the result of 2q.
So, you are taking twice the value of 'q' and then adding 2 to it to get 'p'. This relationship is accurately represented by the equation p = 2q + 2.

		`,
	},
	{
		id: "14",
		level: 1,
		question:
			"If 'c' is 8 less than three times 'd,' what is the right equation to represent this relationship?",
		options: [
			{ option: "c = 3 + 8d" },
			{ option: "c = 3d + 8" },
			{ option: "c = 8d - 3" },
			{ option: "c = 3d – 8" },
		],
		answer: "c = 3d – 8",
		solution: `  
The right equation to represent the relationship between 'c' and 'd' where 'c' is 8 less than three times 'd' can be written as:
c = 3d – 8
Here's an explanation:
- "Three times 'd'" is represented by 3d, which means you're taking three times the value of 'd.'- "8 less than three times 'd'" means you subtract 8 from the result of 3d.
So, you are taking three times the value of 'd' and then subtracting 8 from it to get 'c'. This relationship is accurately represented by the equation c = 3d - 8.
		
		`,
	},
	{
		id: "15",
		level: 1,
		question:
			"If 'e' is 10 more than half of 'f,' what is the right equation to represent this relationship?",
		options: [
			{ option: "e = 10 > (½)f" },
			{ option: "e = (1/2)f + 10" },
			{ option: "e = (1/2)f > 10" },
			{ option: "e = (1/2)f + 10" },
		],
		answer: "e = (1/2)f + 10",
		solution: `   
The right equation to represent the relationship between 'e' and 'f' where 'e' is 10 more than half of 'f' can be written as:
e = (1/2)f + 10
Here's an explanation:
- "Half of 'f'" is represented by (1/2)f, which means you're taking half of the value of 'f.'
- "10 more than half of 'f'" means you add 10 to the result of (1/2)f.
So, you are taking half of the value of 'f' and then adding 10 to it to get 'e'. This relationship is accurately represented by the equation e = (1/2)f + 10.

		`,
	},
	{
		id: "16",
		level: 1,
		question:
			"If 'k' is 9 less than twice 'l,' what is the right equation to represent this relationship?",
		options: [
			{ option: "k = 9 < 2l" },
			{ option: "k = 9 – 2l" },
			{ option: "k = 2l - 9" },
			{ option: "k = 2l + 9" },
		],
		answer: "k = 2l - 9",
		solution: `   
The right equation to represent the relationship between 'k' and 'l' where 'k' is 9 less than twice 'l' can be written as:
k = 2l - 9
Here's an explanation:
- "Twice 'l'" is represented by 2l, which means you're taking two times the value of 'l.'
- "9 less than twice 'l'" means you subtract 9 from the result of 2l.
So, you are taking twice the value of 'l' and then subtracting 9 from it to get 'k'. This relationship is accurately represented by the equation k = 2l - 9.
		
		`,
	},
	{
		id: "17",
		level: 1,
		question:
			"If 'r' is 6 more than three times 's,' what is the right equation to represent this relationship?",
		options: [
			{ option: "r = 6 > 3s" },
			{ option: "r = 3s – 6" },
			{ option: "r = 3s + 6" },
			{ option: "none of the above" },
		],
		answer: "r = 3s + 6",
		solution: `   
The right equation to represent the relationship between 'r' and 's' where 'r' is 6 more than three times 's' can be written as:
r = 3s + 6
Here's an explanation:
- "Three times 's'" is represented by 3s, which means you're taking three times the value of 's.'
- "6 more than three times 's'" means you add 6 to the result of 3s.
So, you are taking three times the value of 's' and then adding 6 to it to get 'r'. This relationship is accurately represented by the equation r = 3s + 6.	
		`,
	},
	{
		id: "18",
		level: 1,
		question:
			"If 'u' is 7 less than twice 'v,' what is the right equation to represent this relationship?",
		options: [
			{ option: "u = 7 – 2v" },
			{ option: "u = 7 < 2v" },
			{ option: "u = 2v - 7" },
			{ option: "u = 7 + 2v" },
		],
		answer: "u = 2v - 7",
		solution: `   
The right equation to represent the relationship between 'u' and 'v' where 'u' is 7 less than twice 'v' can be written as:
u = 2v - 7
Here's an explanation:
- "Twice 'v'" is represented by 2v, which means you're taking two times the value of 'v.'
- "7 less than twice 'v'" means you subtract 7 from the result of 2v.
So, you are taking twice the value of 'v' and then subtracting 7 from it to get 'u'. This relationship is accurately represented by the equation u = 2v - 7.
		
		`,
	},
	{
		id: "19",
		level: 1,
		question:
			"If 'h' is 11 more than half of 'g,' what is the right equation to represent this relationship?",
		options: [
			{ option: "h = 11 > 2g" },
			{ option: "h = 11 > (1/2)g" },
			{ option: "h = (1/2)g + 11" },
			{ option: "none of the above" },
		],
		answer: "h = (1/2)g + 11",
		solution: `   
The right equation to represent the relationship between 'h' and 'g' where 'h' is 11 more than half of 'g' can be written as:
h = (1/2)g + 11
Here's an explanation:
- "Half of 'g'" is represented by (1/2)g, which means you're taking half of the value of 'g.'
- "11 more than half of 'g'" means you add 11 to the result of (1/2)g.
So, you are taking half of the value of 'g' and then adding 11 to it to get 'h'. This relationship is accurately represented by the equation h = (1/2)g + 11.

		`,
	},
	{
		id: "20",
		level: 1,
		question:
			"If 'j' is 4 less than four times 'i,' what is the right equation to represent this relationship?",
		options: [
			{ option: "j = 4 – 4j" },
			{ option: "j = 4 – 4i" },
			{ option: "j = 4i – 4" },
			{ option: "both b & c" },
		],
		answer: "h = (1/2)g + 11",
		solution: `   
The right equation to represent the relationship between 'j' and 'i' where 'j' is 4 less than four times 'i' can be written as:
j = 4i - 4
Here's an explanation:
- "Four times 'i'" is represented by 4i, which means you're taking four times the value of 'i.'
- "4 less than four times 'i'" means you subtract 4 from the result of 4i.
So, you are taking four times the value of 'i' and then subtracting 4 from it to get 'j'. This relationship is accurately represented by the equation j = 4i - 4.

		`,
	},
];
