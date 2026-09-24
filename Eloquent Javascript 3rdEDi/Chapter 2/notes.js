let ten = 10;
console.log(ten * ten);
// → 100

let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105

let one = 1, two = 2;
console.log(one + two);
// → 3

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda

prompt("Enter passcode");

console.log(Math.max(2, 4));
// → 4

console.log(Math.min(2, 4) + 100);
// → 102

let theNumber1 = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber1 * theNumber1);

let theNumber2 = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber2)) {
    console.log("Your number is the square root of " + theNumber2 * theNumber2);
}

if (1 + 1 == 2) console.log("It's true");
// → It's true

let theNumber3 = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber3)) {
    console.log("Your number is the square root of " +theNumber3 * theNumber3);
} else {
    console.log("Hey. Why didn't you give me a number?");
}

if (num < 10) {
    console.log("Small");
} else if (num < 100) {
    onsole.log("Medium");
} else {
    console.log("Large");
}

console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
// so bad to do this :D
// just need use loop 
let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}
// → 0
// → 2
// … etcetera

let result1 = 1;
let counter = 0;
while (counter < 10) {
    result1 = result1 * 2;
    counter = counter + 1;
}
console.log(result1);
// → 1024

let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

if (false != true) {
    console.log("That makes sense.");
    if (1 < 2) {
        console.log("No surprise there.");
    }
}

for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}
// → 0
// → 2
// … etcetera

let result2 = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
    result2 = result2 * 2;
}
console.log(result2);
// → 1024

for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}
// → 21

counter = counter + 1; //=> 
    counter += 1;

for (let number = 0; number <= 12; number += 2) {
    console.log(number);
}

if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();

switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}

// Capitalization
// fuzzylittleturtle
// fuzzy_little_turtle
// FuzzyLittleTurtle
// fuzzyLittleTurtle

let accountBalance = calculateBalance(account);
// It's a green hollow where a river sings
accountBalance.adjust();
// Madly catching white tatters in the grass.
let report = new Report();
// Where the sun on the proud mountain rings:
addToReport(accountBalance, report);
// It's a little valley, foaming like light in a glass.

/*
    I first found this number scrawled on the back of an old notebook.
    Since then, it has often dropped by, showing up in phone numbers
    and the serial numbers of products that I've bought. It obviously
    likes me, so I've decided to keep it.
*/
const myNumber = 11213;

let abc = "abc";
console.log(abc.length);
// → 3

// Exercises

// 1
// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (var i = 0; i < 7; i++) {
    var line = "";

    for (var j = 0; j < i + 1; j++) {
        line += "#";
    }

    console.log(line);
}

// 2 
// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
// number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for
// numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
// for numbers divisible by only one of those).

for(var i = 1;i<=100;i++){
    if(i %5 ==0 && i%3==0){
        console.log("FizzBuzz\n");
    }else if(i%5==0){
        console.log("Buzz\n");
    }else if(i%3==0){
        console.log("Fizz\n");
    }else{
        console.log(i + "\n");
    }
}

// 3
// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

var size = 8;
var board = "";

for (var i = 0; i < size; i++) {
    var line = "";

    for (var j = 0; j < size; j++) {
        if ((i + j) % 2 == 0) {
            line += " ";
        } else {
            line += "#";
        }
    }

    board += line + "\n";
}

console.log(board);
