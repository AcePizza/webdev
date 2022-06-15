/* Adds colour to the consol.log that seperates the exercises */

function addConsoleColor(msg) {
    const color = 'red';
    console.log("%c" + msg, "color:" + color + ";font-weight:bold;");
}



/* Exercise 1
Write a JavaScript function that returns nothing and has no parameters. 
This function should print the result of the multiplication of two numbers 
(the numbers that you want).
*/

addConsoleColor("Exercise 1 --------------");

function multiPly () {
    let result = 5 + 10;
    console.log(result);
}

multiPly();


/* Exercise 2
Write a JavaScript function with no parameters. 
This function should return the result of the multiplication of two numbers (the numbers that you want), and in your main program, you should print the result.

Tip: if a function returns something, you can assign the function call to a variable. 
In this way, the value of the return will be held by this variable. */

addConsoleColor("Exercise 2 --------------");

function multiPlyNum () {
    let result = 7 + 10;
    return result
}

let outsideResult = multiPly();
console.log(outsideResult);


/* Exercise 3
Write a JavaScript function with two parameters. 
These parameters are the numbers that have to be multiplied. 
The function should return the result of the multiplication of both numbers (the numbers that you want), and in your main program, you should print the result. 
Test the function with 3 examples. */

addConsoleColor("Exercise 3 --------------");

function multiplyTwoNum (a, b) {
    let result = a + b;
    return result;
}

console.log(multiplyTwoNum(25, 6))

/* Exercise 4
Write a function that determines the type of a triangle given the length of its three sides. 
Easier to use conditional: if ( a == b || b == c || c == a ) 
*/

addConsoleColor("Exercise 4 --------------");

function detTrinagle (a,b,c) {
    const arr = [a, b, c];
    let result = '';
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[i] == arr[x]) {
                counter++;
            }
        }
    }
    if (counter == 2) {
        result = "Equilateral Triangle"
    }
    else if (counter == 1) {
        result = "Isosceles Triangle"
    }
    else {
        result = "Scalene Triangle"
    }
    console.log(result);
}

detTrinagle(2,3,2);


/* Exercise 5
Write a function that receives as a parameter an array of characters and replaces all "a" by "1". e.g.: JavaScript will become J1v1Script. */

addConsoleColor("Exercise 5 --------------");
let arr = ["Java", "Script", "Test", "Tast", "Taasat"]

function replaceA (a) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        let itr = a[i].replaceAll("a", 1);
        result.push(itr);
    }
    return result;
}

console.log(replaceA(arr));

/* Exercise 6
Write two functions. The first one should return the sum of all the elements of an array and the second one should return the smallest number in the array. Print the result in the main program. */

addConsoleColor("Exercise 6 --------------");

let arrEx6 = [1,2,3,4,5,6,7,8,9,10];

function sumAllElement (a) {
    let total=0;
    for(let i = 0; i < a.length; i++) { 
        total += a[i];
    }
    return total;
}

console.log(sumAllElement(arrEx6));

function findLargest(a) {
    let max = a[0];
    for (let i = 1; i < a.length; i++) { /* max is constantly replaced if a higher value is found and tested agains with the array */
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
}

console.log(findLargest(arrEx6));


/* Exercise 7
Write a function that adds the even numbers of an array. 
For example, the array: 1 2 8 3 2 would result in the sum of 2 + 8 + 2, since they are even numbers. 
Return the result and print it in the main program. */

addConsoleColor("Exercise 7 --------------");
let arrEx7 = [1,2,8,3,2];

function addEvenNumbers (a) {
    const even = [];
    let sum = 0;
    a.forEach(number => {
        if (number % 2 === 0) {
            even.push(number);
        }
    });
    for (let i = 0; i < even.length; i++) {
        sum += even[i];
    }
    return sum;
}

console.log(addEvenNumbers(arrEx7));

/* Exercise 8
Write a function that adds the even positions of an array. \
For example, the array: 1 2 8 3 2 3 4 would result in the sum of 8 + 2 + 4 since they are in even positions in the array (position 2,4,6). 
Return the result and print it in the main program. */

addConsoleColor("Exercise 8 --------------");

const arrEx8 = [1,2,8,3,2,3,4];

function addEvenPositions(a) {
    let even = [];
    let sum = 0;
    for (let i = 0; i <= a.length; i++) {
        if (i % 2 === 0) {
           even.push(a[i]);
        }
    }
    for (let i = 0; i < even.length; i++) {
        sum += even[i];
    }
    return sum;
}

console.log(addEvenPositions(arrEx8));

/* Exercise 9
Write a function that by sending a number as parameter, tells you all the even numbers before it. 
For example, if you send to the function the number 9, it should print 2,4,6,8. */

addConsoleColor("Exercise 9 --------------");

function findEvenBefor(a) {
    let even = [];
    let num = [];
    for (let i = 0; i <= a; i++) {
        num.push(i);
    }
    for (let i = 0; i <= num.length; i++) {
        if (i % 2 === 0) {
           even.push(num[i]);
        }
    }
    return even;
}
console.log(findEvenBefor(10));

/* Exercise 10
Write a function that by sending two numbers as parameters, it tells you the odd numbers between these. 
For instance, if you send the numbers 1 and 13 as parameters, it should print 1,3,5,7,9,11,13. */


addConsoleColor("Exercise 10 --------------");

function findEvenBetween(a, b) {
    const min = a;
    const max = b;
    let even = [];
    let num = [];
    for (let i = min; i < max; i++) {
        num.push(i);
    }
    for (let i = 0; i < num.length; i++) {
        if (i % 2 === 0) {
           even.push(num[i]);
        }
    }
    return even;
}


console.log(findEvenBetween(5, 20));


