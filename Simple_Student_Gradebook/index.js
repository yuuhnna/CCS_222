//Array of grades for 5 students
let grades = [85, 92, 74, 60, 90];

// Function to calculate average grade
function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    let average = sum / grades.length;
    return average;
}

// Function to check pass or fail
function checkPassOrFail(average) {
    if (average >= 75) {
        return "Class Passed";
    } else {
        return "Class Failed";
    }
}

// Store results in variables
let averageGrade = calculateAverage(grades);
let result = checkPassOrFail(averageGrade);

// Print results 
console.log("Grades: " + grades);
console.log("Average Grade: " + averageGrade);
console.log("Result: " + result);

