/* Adds colour to the consol.log that seperates the exercises */

function addConsoleColor(msg) {
    const color = 'red';
    console.log("%c" + msg, "color:" + color + ";font-weight:bold;");
}


/* Writing expressions with variables - Exercise 1
Create an array with all the names of your class (including mentors). 
Sort the array alphabetically. 
Then print the first element of the array in the console. 
On the next line, print the last element of the array in the console. 
On the next line, print all the elements of the array in the console (use a "for" loop). 
Save the file and reload the page. You should see the first element of the sorted array, the last element of the sorted array, and a list of all the elements in order in the array in the console.*/


addConsoleColor('Exercise 1-------')
let helloWorld = 'Hello World!'
console.log(helloWorld);


/* Writing expressions with variables - Exercise 2 
Create a variable called age with a number that is your age. Do not use string quotes for numbers.

Add a line to print that variable in the console. Save the file and reload the page. You should see your name and your age.*/

addConsoleColor('Exercise 2-------')
let myAge = 42;
console.log(myAge);

/* Writing expressions with variables - Exercise 3 
Create a variable called juliaAge with a value 32. 
Create another variable called ageDiff and set it to an expression that calculates your age minus Julias's age. Print the value of ageDiff. 
Save the file and reload the page. 
You should see your age and the age difference. 
If you are younger than Julia, you should see a negative number.*/


addConsoleColor('Exercise 3-------')
let juliaAge = 32;
let ageDif = myAge - juliaAge;
console.log(ageDif);

/* Writing code with conditionals - Exercise 4 
Write a conditional that compares the variable with your age with the number 21. 
It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age. 
Save your JavaScript file and reload the page. Make sure you see the correct message. 
Try changing your age in the JavaScript file to make sure the other message prints when it should.
*/

addConsoleColor('Exercise 4-------')
if (myAge <= 21) {
    console.log('My age is more!')
} else if (myAge >= 21) {
    console.log('My age is less!')
}

/* Writing code with conditionals - Exercise 5 
Write a conditional that compares the variable with your age with the number 21. 
It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age. 
Save your JavaScript file and reload the page. 
Make sure you see the correct message. 
Try changing your age in the JavaScript file to make sure the other message prints when it should.*/

addConsoleColor('Exercise 5-------')
if (myAge <= juliaAge) {
    console.log('Julia is younger')
} else if (myAge >= juliaAge) {
    console.log('Julia is older')
} else {
    console.log('You are the same age')
}

/* Sorting an Array - Exercise 1

Create an array with all the names of your class (including mentors). 
Sort the array alphabetically. Then print the first element of the array in the console. 
On the next line, print the last element of the array in the console. 
On the next line, print all the elements of the array in the console (use a "for" loop). 
Save the file and reload the page. 
You should see the first element of the sorted array, the last element of the sorted array, and a list of all the elements in order in the array in the console. */

addConsoleColor('Sorting an Array - Exercise 1-------')
let myArray = ["Stian", "Jesprit", "Thomas", "Eser", "John", "Ottavia", "Helena", "Raul"]
myArray.sort();
console.log(myArray[1]);

console.log('Space-------')
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i] + ' ' + i);
}

/* Looping over an Array - Exercise 2
Create an array with all the ages of the students in your class. 
Iterate the array using a while loop, and then print every age in the console. 
Add a conditional inside the while loop to only print even numbers. 
Write again a loop but use a "for" loop instead of a "while" loop. 
ave your changes to your JavaScript file. Reload the HTML page in your browser. 
You should see every age printed, then only the even numbers printed. If not, investigate and fix it.*/

addConsoleColor('Looping over an Array - Exercise 2-------')
let classAge = [1,3,5,7,9,11,2,4,6,8,10];

for (let i = 0; i < classAge.length; i++) {
    if (classAge[i] % 2 == 0) {
        console.log(classAge[i] + ' is a even number.');
    } else {
        console.log(classAge[i] + ' is an odd number')
    }
}

/* Functions that use Arrays - Exercise 3 
Write a function that receives an array as a parameter and prints the lowest number in the array to the console. 
Save the changes to your JavaScript file. Reload the HTML page in your browser. 
You should see the lowest number in the array printed in the console. 
If not, investigate and fix it. */

addConsoleColor('Functions that use Arrays - Exercise 3-------')
let classAgeEx3 = [1,3,5,7,9,11,2,4,6,8,10];
function lowNumber() {
    let minValue = Math.min(...classAgeEx3);
    console.log(minValue);
}
lowNumber();

/* Exercise 4 Write a function that receives an array as a parameter and prints the biggest number in the array to the console. 
Save the changes to your JavaScript file. Reload the HTML page in your browser. 
You should see the biggest number in the array printed in the console. If not, investigate and fix it. */

addConsoleColor('Exercise 4-------')
function highNumber() {
    let maxValue = Math.max(...classAge);
    console.log(maxValue);
}
highNumber()

/* Exercise 5
Write a function that receives two parameters, an array, and an index. 
The function will print the value of the element at the given position (one-based) to the console. 
For example, given the following array and index, the function will print '6'.
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1; 
Save the changes to your JavaScript file and check your browser console. 
You should see the number at the correct index printed in the console. If not, investigate and fix it. */

addConsoleColor('Exercise 5-------')
let exFiveArray = [1,2,3,4,5,6,7,8]
let exFiveIndex = 2;

function exFiveFunc (a, b) {
    console.log(a[b]);
}
exFiveFunc(exFiveArray, exFiveIndex);


/* Exercise 6
Write a function that receives an array and only prints the values that repeat.
For example, given the following array and index, the function will print '6,23,33,100'.
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
Save the changes to your JavaScript file. Reload the HTML page in your browser. 
You should see an array of the repeated numbers printed in the console. If not, investigate and fix it. */


addConsoleColor("Exercise 6-------");
const duplicatesArray = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];

function checkDuplicates(a) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) { 
                result.push(a[i]);
            }
        }
    }
    return result;
}

console.log(checkDuplicates(duplicatesArray));

/* Exercise 7 
Write a simple JavaScript function to join all elements of the following array into a string.
myColor = ["Red", "Green", "White", "Black"];
Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the following in your console:
"Red", "Green", "White", "Black"
If not, investigate and fix it.
*/

addConsoleColor('Exercise 7-------')
const myColor = ["Red", "Green", "White", "Black"];

function joinTheDarkSide(a) {
    let joinedStr = a.join();
    return joinedStr;
}

console.log(joinTheDarkSide(myColor));

/* JavaScript String Exercise 1
Write a JavaScript function that reverses a number. 
For example, if x = 32443 then the output should be 34423. 
Save your JavaScript file and reload the page. Make sure you see the correct output. 
If not, investigate and fix it.*/

addConsoleColor('JavaScript String Exercise 1-------')
const stringToReverse = '12345';

function reverseString (str) {
    let splitString = str.split(""); 
    let reverseArray = splitString.reverse(); 
    let joinArray = reverseArray.join("");
    console.log(joinArray);
}

reverseString(stringToReverse);

/* JavaScript String Exercise 2 
Write a JavaScript function that returns a string in alphabetical order. 
For example, if x = 'webmaster' then the output should be 'abeemrstw'. 
Punctuation and numbers aren't passed in the string. Save your JavaScript file and reload the page. 
Make sure you see the correct output. If not, investigate and fix it. */

addConsoleColor('JavaScript String Exercise 2-------');

let xEx2 = 'webmaster';

function stringAplphabetically (str) {
    let splitString = str.split('');
    console.log(splitString.sort());
}

stringAplphabetically(xEx2)

/* JavaScript String Exercise 3 
Write a JavaScript function that converts the first letter of every word to uppercase. 
For example, if x = "prince of persia" then the output should be "Prince Of Persia". 
Save your JavaScript file and reload the page. Make sure you see the correct output. 
If not, investigate and fix it.*/

addConsoleColor('JavaScript String Exercise 3-------');

const xEx3 = "prince of persia";

function upperCase(str) {
    let stringSplit = str.split(" ");
    for (let i = 0; i < stringSplit.length; i++) {
        let capitalLetters = stringSplit[i].charAt(0).toUpperCase() + stringSplit[i].slice(1);
        console.log(capitalLetters);
    }
    // console.log(stringSplit);
}

upperCase (xEx3);

// JavaScript String Exercise 4

/* Write a JavaScript function that finds the longest word in a phrase. 
For example, if x = "Web Development Tutorial", then the output should be "Development". 
Save your JavaScript file and reload the page. Make sure you see the correct output. 
If not, investigate and fix it. */

addConsoleColor('JavaScript String Exercise 4-------')

let xEx4 = "Web Development Tutorial";

function longestWord (str) {
    let strValue = [];
    let stringSplit = str.split(/\s+/);
    for (let i = 0; i < stringSplit.length; i++) {
        strValue.push(stringSplit[i].length);
    }
    let max = strValue[0];
    let maxPosition = 0;
    for (let i = 1; i < strValue.length; i++) {
        if (strValue[i] > max) {
            max = strValue[i];
            maxPosition = i;
        }
    }
    console.log(stringSplit[maxPosition]);
}

longestWord(xEx4);
