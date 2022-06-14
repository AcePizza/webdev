// // Exercise 1
// console.log('Exercise 1-------')
// let helloWorld = 'Hello World!'
// console.log(helloWorld);

// // Exercise 2
// console.log('Exercise 2-------')
// let myAge = 42;

// // Exercise 3
// console.log('Exercise 3-------')
// let juliaAge = 32;
// let ageDif = myAge - juliaAge;
// console.log(ageDif);

// // Exercise 4
// console.log('Exercise 4-------')
// if (myAge <= 21) {
//     console.log('My age is more!')
// } else if (myAge >= 21) {
//     console.log('My age is less!')
// }

// // Exercise 5
// console.log('Exercise 5-------')
// if (myAge <= juliaAge) {
//     console.log('Julia is younger')
// } else if (myAge >= juliaAge) {
//     console.log('Julia is older')
// } else {
//     console.log('You are the same age')
// }

// // Exercise 6
// console.log('Exercise 6-------')
// let myArray = ["Stian", "Jesprit", "Thomas", "Eser", "John", "Ottavia", "Helena", "Raul"]
// myArray.sort();
// console.log(myArray[1]);

// console.log('Space-------')
// for (let i = 0; i <= myArray.length; i++) {
//     console.log(myArray[i] + ' ' + i);
// }

// // Exercise 7
// console.log('Exercise 7-------')
// let classAge = [1,3,5,7,9,11,2,4,6,8,10];

// for (let i = 0; i <= classAge.length; i++) {
//     if (classAge[i] % 2 == 0) {
//         console.log(classAge[i] + ' is a even number.');
//     } else {
//         console.log(classAge[i] + ' is an odd number')
//     }
// }

// Functions that use Arrays
// Exercise 3
// console.log('Exercise 3-------')
// let classAge = [1,3,5,7,9,11,2,4,6,8,10];
// function lowNumber() {
//     let minValue = Math.min(...classAge);
//     console.log(minValue);
// }
// lowNumber();

// // Exercise 4
// console.log('Exercise 4-------')
// function highNumber() {
//     let maxValue = Math.max(...classAge);
//     console.log(maxValue);
// }
// highNumber()

// // Exercise 5
// console.log('Exercise 5-------')
// let exFiveArray = [1,2,3,4,5,6,7,8]
// let exFiveIndex = 2;

// function exFiveFunc (a, b) {
//     console.log(a[b]);
// }
// exFiveFunc(exFiveArray, exFiveIndex);

// // Exercise 6 v1.2
// console.log('Exercise 6-------')
// const duplicatesArray = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
// let result = [];
// let conditionText = '';

// function checkDuplicates(arr) {
//     for (let i = 0; i <= arr.length; i++) {
//         for (let j = 0; j <= arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 conditionText = 'There is a match ';
//                 result.push(arr[j]);
//             } else {
//                 conditionText = 'There is NO match ';
//             }
//             //Some values repat because one loop compares the number in the other loop with itself
//             console.log(conditionText + "This is the first loop " + arr[i] + " " + "This is the scond loop " + arr[j] );
//         }
//     }
//     console.log(result);
// }
// checkDuplicates(duplicatesArray);

// Exercise 6 v1.3
console.log("Exercise 6-------");
const duplicatesArray = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];

function checkDuplicates(a) {
  var resultReturn = [];
  for (let i = 0; i < a.length; i++) {
    var ct = a[i];
    var cmt = 0;
    for (var x = 0; x < a.length; ++x) {
      if (ct === a[x]) {
        cmt++;
        if (cmt > 1) {
            resultReturn.push(a[i]);
        }
      }
    }
  }
  return resultReturn.filter((i, ix) => resultReturn.indexOf(i) === ix);
}

console.log(checkDuplicates(duplicatesArray));

// Exercise 7
// console.log('Exercise 7-------')
// const myColor = ["Red", "Green", "White", "Black"];

// function joinTheDarkSide (arrayFive) {
//     for (let i = 0; i <= arrayFive.length; i++) {
//         let stringReturn = '';
//         stringReturn.concat(arrayFive[i]);
//     }
//     console.log(stringReturn);
// }

// joinTheDarkSide (myColor)

// // JavaScript String Exercise 1
// console.log('JavaScript String Exercise 1-------')
// const stringToReverse = '12345';

// function reverseString (str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]

//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]

//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"

//     //Step 4. Return the reversed string
//     console.log(joinArray);
// }

// reverseString(stringToReverse);

// JavaScript String Exercise 2
// console.log('JavaScript String Exercise 2-------')

// let x = 'webmaster';

// function stringAplphabetically (str) {
//     let splitString = str.split('');
//     console.log(splitString.sort());
// }

// stringAplphabetically(x)

// JavaScript String Exercise 3
// console.log('JavaScript String Exercise 3-------')

// const x = "prince of persia";

// function upperCase(str) {
//     let stringSplit = str.split(" ");
//     for (let i = 0; i <= stringSplit.length; i++) {
//         let capitalLetters = stringSplit[i].charAt(0).toUpperCase() + stringSplit[i].slice(1);
//         console.log(capitalLetters);
//     }
//     // console.log(stringSplit);
// }

// upperCase (x);

// JavaScript String Exercise 4

/* Write a JavaScript function that finds the longest word in a phrase. 
For example, if x = "Web Development Tutorial", then the output should be "Development". 
Save your JavaScript file and reload the page. Make sure you see the correct output. 
If not, investigate and fix it. */

// console.log('JavaScript String Exercise 4-------')

// let x = "Web Development Tutorial";

// function longestWord (str) {
//     let strValue = [];
//     let stringSplit = str.split(/\s+/);
//     for (let i = 0; i <= 2; i++) {
//         strValue.push(stringSplit[i].length);
//     }
//     let maxValue = Math.max(...strValue);
//     let indexMax = strValue.indexOf(maxValue);
//     console.log(stringSplit[indexMax]);
// }

// longestWord(x);
