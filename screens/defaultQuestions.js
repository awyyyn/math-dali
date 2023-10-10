
export const beginnerLevel1 = [
    {
        id: '1',
        level: 1,
        question: 'Evaluate the expression: 3 * (7 - 4) + 2',
        options: [ 
            {option: "15"},
            {option: '8'},
            {option: '11'},
        ],
        answer: '11',
        solution :`\n\nTo evaluate the expression: 3 * (7 - 4) + 2

You should follow the order of operations (PEMDAS/BODMAS), which stands for Parentheses/Brackets, Exponents/Orders (i.e., powers and square roots, etc.), Multiplication and Division (left-to-right), and Addition and Subtraction (left-to-right). In this case, start with the operations inside the parentheses:

Inside the parentheses, you have 7 - 4, which equals 3.

Now, the expression becomes: 3 * 3 + 2

Next, perform the multiplication: 3 * 3 = 9

Now, the expression becomes: 9 + 2

Finally, perform the addition: 9 + 2 = 11

So, the final result of the expression 
3 * (7 - 4) + 2 is 11.
        ` 
    }, 
    {
        id: '2',
        level: 1,
        question: 'What is the slope of the equation: y = 2x + 6',
        options: [ 
            {option: "2x"},
            {option: '2'},
            {option: '6'},
        ],
        answer: '2',
        solution :'\n\nIn the equation y = mx + b, m is the slope of the line and b is the intercept. x and y represent the distance of the line from the x-axis and y-axis, respectively.', 
    },  
    {
        id: '3',
        level: 1,
        question: 'If you receive a discount of 20% on an item that costs $80, how much money do you save?',
        options: [ 
            {option: "$20.00"},
            {option: '$16.00'},
            {option: '$18.00'},
        ],
        answer: '$16.00',
        solution : `

To calculate the amount of money saved when receiving a 20% discount on an item that costs $80, you can follow these steps:

Step 1: Find 20% of $80, which represents the discount amount. To find a percentage of a number, multiply the number by the percentage as a decimal (20% is equivalent to 0.20 as a decimal):

Discount = 0.20 * $80 = $16

Step 2: The discount amount is $16. This is the money you save when you receive a 20% discount on the $80 item. So, you save $16.
        `
    },  
    {
        id: '4',
        level: 1,
        question: 'Identify which of the following is an algebraic expression?',
        options: [ 
            {option: "3x"},
            {option: '3x+5'},
            {option: '3x+5=11'},
        ],
        answer: '3x+5',
        solution :'\n\nIn basic algebra, an expression is a mathematical phrase that can contain numbers, variables, and operations (like addition, subtraction, multiplication, and division). For example, "3x + 5" is an expression because it combines the variable \'x\' with numbers and operations.', 
    },  
    {
        id: '5',
        level: 1,
        question: 'Identify which of the following is an algebraic equation?',
        options: [ 
            {option: "3x"},
            {option: '3x+5'},
            {option: '3x+5=11'},
        ],  
        answer: '3x+5=11',
        solution: '\n\nAn equation is a statement that shows that two expressions are equal. It uses an equal sign \'=\' to indicate this equality. For example, "3x + 5 = 11" is an equation because it states that the expression "3x + 5" is equal to the expression "11." Solving an equation typically involves finding the value of the variable (in this case, \'x\') that makes both sides of the equation equal.', 
    },  
]

export const intermediateLevel1 = [
    {
        id: '1',
        level: 1,
        question: 'Solve for x in the equation: 2x + 5 = 11',
        options: [ 
            {option: "8"},
            {option: '1/3'},
            {option: '3'},
        ],
        answer: '3',
        solution :`

To solve for x, follow these steps:

1. Subtract 5 from both sides of the equation to isolate the term with x:

2x + 5 - 5 = 11 - 5

2x = 6

2. Now, divide both sides by 2 to solve for x:

(2x) / 2 = 6 / 2

x = 3

So, the solution to the equation is x = 3.
        ` 
    }, 
    {
        id: '2',
        level: 1,
        question: 'Simplify the expression involving rational numbers: (3/4) + (5/6)?',
        options: [ 
            {option: "8/12"},
            {option: '¾'},
            {option: '19/12'},
        ],
        answer: '19/12',
        solution : `

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
        id: '3',
        level: 1,
        question: 'Solve for x: 3(2x - 1) = 21',
        options: [ 
            {option: "3"},
            {option: '4'},
            {option: '7'},
        ],
        answer: '4',
        solution : `

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

        `
    },  
    {
        id: '4',
        level: 1,
        question: 'If 2(y - 3) = 10, what is the value of y?',
        options: [ 
            {option: "8"},
            {option: '2'},
            {option: '4'},
        ],
        answer: '8',
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
        id: '5',
        level: 1,
        question: 'In a recipe, you need to mix 2/3 cup of sugar for every 1/4 cup of flour. How many cups of sugar do you need if you use 2 cups of flour?',
        options: [ 
            {option: "4 1/3 cups"},
            {option: '5 2/3 cups'},
            {option: '5 1/3 cups'},
        ],  
        answer: '5 1/3 cups',
        solution: 
        `

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
]



export const expertLevel1 = [
    {
        id: '1',
        level: 1,
        question: 'If \'y\' is 6 less than twice \'x,\' what is the right equation to represent this relationship?',
        options: [ 
            {option: "y=x^2 - 6"},
            {option: 'y=2x + 6'},
            {option: 'y=2x – 6'},
        ],
        answer: 'y=2x – 6',
        solution :`

Here's an explanation of the equation:

"2x" represents twice the value of "x." You multiply "x" by 2 to get twice its value.

"-6" indicates that you are subtracting 6 from the result of "2x," which means that "y" is 6 less than "2x."

So, in this equation, "y" is expressed as a function of "x," and it is equal to twice the value of "x" minus 6. This equation describes the relationship where "y" is 6 less than double the value of "x."
        ` 
    }, 
    {
        id: '2',
        level: 1,
        question: 'Solve for x in the equation 2x + 3 + 7x + 33 = y',
        options: [ 
            {option: "x = 4"},
            {option: 'x = y + 36 / 9'},
            {option: 'x = y - 36 / 9'},
        ],
        answer: 'x = y - 36 / 9',
        solution :`

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
        id: '3',
        level: 1,
        question: 'Write an equation of the line with slope -3 and y-intercept (0 , -5).',
        options: [ 
            {option: "y = 3x + 5"},
            {option: 'y = -3x + 5'},
            {option: 'y = -3x – 5'},
        ],
        answer: 'y = -3x – 5',
        solution : `

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
        `
    },  
    {
        id: '4',
        level: 1,
        question: 'Expand and simplify the expression: (2x - 3)(4x + 5)',
        options: [ 
            {option: "8x^2 + 2x - 15"},
            {option: '8x^2 + 2x + 15'},
            {option: '8x^2 - 2x - 15'},
        ],
        answer: '8x^2 - 2x - 15',
        solution :`

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
        id: '5',
        level: 1,
        question: 'Find the slope of the line perpendicular to the line y = (1/3)x – 7',
        options: [ 
            {option: "1/3"},
            {option: '3'},
            {option: '-3'},
        ],  
        answer: '-3',
        solution: `

To find the slope of a line perpendicular to the line y = (1/3)x - 7, you can follow these steps:

Step 1: Recognize that the given equation is in slope-intercept form, y = mx + b, where "m" is the slope. In this case, the slope of the given line is (1/3).

Step 2: To find the slope of a line perpendicular to this, you can use the fact that the product of the slopes of two perpendicular lines is -1. So, you need to find the negative reciprocal of (1/3).

Step 3: The negative reciprocal of (1/3) is -3. This means that the slope of a line perpendicular to y = (1/3)x - 7 is -3.

So, the slope of the line perpendicular to y = (1/3)x - 7 is -3.
`
    },  
]
