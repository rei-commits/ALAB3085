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

