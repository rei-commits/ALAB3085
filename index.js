// Function to calculate the sum of numbers in an array
function calSum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Function to calculate the average of numbers in an array
function calAverage(numbers) {
    const sum = calSum(numbers);
    return sum / numbers.length;
}

// Function to find the longest string in an array of strings
function findLongestString(strings) {
    return strings.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}

// Function to filter strings longer than a given number
function stringsLongerThan(strings, length) {
    return strings.filter((string) => string.length > length);
}

// Function to print numbers from 1 to n using recursion
function printNumbers(n) {
    if (n > 0) {
        printNumbers(n - 1);
        console.log(n);
    }
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const strings = ["say", "hello", "in", "the", "morning"];
const n = 5;

console.log("Sum:", calSum(numbers));
console.log("Average:", calAverage(numbers));
console.log("Longest string:", findLongestString(strings));
console.log(
    "Strings longer than",
    n,
    "characters:",
    stringsLongerThan(strings, n)
);
console.log("Numbers from 1 to", n, "using recursion:");
printNumbers(n);

//part 2
const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// Sort the array by age
const sortedByAge = data.sort((a, b) => Number(a.age) - Number(b.age));
console.log("Sorted by age:", sortedByAge);

// Filter the array to remove entries with an age greater than 50
const filteredByAge = data.filter((person) => Number(person.age) <= 50);
console.log("Filtered by age (less than or equal to 50):", filteredByAge);

// Map the array to change the “occupation” key to “job” and increment every age by 1
const mappedData = data.map((person) => ({
    ...person,
    job: person.occupation,
    age: Number(person.age) + 1,
}));
console.log(
    "Mapped data (occupation to job, age incremented by 1):",
    mappedData
);

// Use the reduce method to calculate the sum of the ages
const sumOfAges = data.reduce((acc, person) => acc + Number(person.age), 0);
console.log("Sum of ages:", sumOfAges);

// Calculate the average age
const averageAge = sumOfAges / data.length;
console.log("Average age:", averageAge);

// Function to increment the age field of an object
function incrementAge(obj) {
    if (!obj.age) obj.age = 0;
    obj.age++;
    obj.updated_at = new Date();
}
//  Part 3-Function to make a copy of an object and increment the age field of the copy
function copyAndIncrementAge(obj) {
    const copy = { ...obj };
    if (!copy.age) copy.age = 0;
    copy.age++;
    copy.updated_at = new Date();
    return copy;
}