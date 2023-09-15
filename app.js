// Task 1: 
let studentNamesLiteral = [];

// Task 2: 
let studentNamesObject = new Array();

// Task 3: 
let stringArray = ["apple", "banana", "cherry"];

// Task 4: 
let numberArray = [1, 2, 3, 4, 5];

// Task 5: 
let booleanArray = [true, false, true];

// Task 6: 
let mixedArray = [1, "apple", true, 3.14];

// Task 7: 
let qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];


// Task 8

let studentNames = ["Alice", "Bob", "Charlie"];
let scores = [450, 480, 490];
let totalMarks = 500;

document.write("<h1>Student Scores and Percentages:</h1>");
for (let i = 0; i < studentNames.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    document.write("<p>" + studentNames[i] + " scored " + scores[i] + " out of " + totalMarks + " (Percentage: " + percentage + "%)</p>");
}
// Task 9:
let colorArray = ["Red", "Green", "Blue", "Yellow", "Orange"];
console.log(colorArray)

// Task 9a: 
let colorToAddAtBeginning = prompt("Enter a color to add to the beginning of the array:");
colorArray.unshift(colorToAddAtBeginning);
// Task 9b:
let colorToAddAtEnd = prompt("Enter a color to add to the end of the array:");
colorArray.push(colorToAddAtEnd);


// Task 9c: 
colorArray.unshift("Purple", "Pink");

// Task 9d: 
colorArray.shift();


// Task 9e: 
colorArray.pop();

// Task 9f: 
let indexToAdd = parseInt(prompt("Enter the index where you want to add a color:"));
let colorToAdd = prompt("Enter the color to add at that position:");
colorArray.splice(indexToAdd, 0, colorToAdd);


// Task 9g: 
let indexToDelete = parseInt(prompt("Enter the index from where you want to delete color(s):"));
let numToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colorArray.splice(indexToDelete, numToDelete);
// task 10:
let studentScores = [85, 72, 93, 68, 77, 88, 95, 90, 78, 84];
studentScores.sort(function(a, b) {
    return a - b;
});
document.write("<h1>Student Scores (Ascending Order):</h1>");
document.write("<p>" + studentScores.join(", ") + "</p>");
// task 11
let cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad"];
let selectedCities = cities.slice(1, 4);
// task 12
let arr = ["This", "is", "my", "cat"];
let singleString = arr.join(" ");
// task 13
let fifoQueue = [];
fifoQueue.push("First");
fifoQueue.push("Second");
fifoQueue.push("Third");
// taSK 14
let lifoStack = [];
lifoStack.push("First");
lifoStack.push("Second");
lifoStack.push("Third");
// TASK 15
SAMJ NHI ARHA 

