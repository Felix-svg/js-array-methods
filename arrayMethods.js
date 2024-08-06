// Create an array of numbers. Use the forEach method to print each number to the console.
const myArray = [1, 2, 3, 4, 5, 6];
myArray.forEach((num) => console.log(num));

// Use the map method to create a new array that contains each number from the original array squared.
const myNumArray = [2, 4, 6, 8, 10];
myNumArray.map((num) => console.log(num * num));

// Use the filter method to create a new array that only contains the even numbers from the original array.
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((num) => num % 2 == 0);
console.log(evens);

// Use the reduce method to find the sum of all numbers in the array.
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, curr) => acc + curr);
console.log(sum);

// Use the find method to find the first number in the array that is greater than 3.
const nums1 = [1, 2, 3, 4, 5];
const firstGreaterThanThree = nums1.find((num) => num > 3)
console.log(firstGreaterThanThree)

// Use the concat method to merge two arrays.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2)
console.log(mergedArray)

// Use the some method to check if there is any number greater than 4 in the array.
const someNumbers = [1, 2, 3, 4, 5];
hasNumGreaterThanFour = someNumbers.some((num) => num > 4)
console.log(hasNumGreaterThanFour)

// Use the every method to check if all numbers in the array are less than 6.
const numbs = [1, 2, 3, 4, 5]
const allLessThanSix = numbs.every((num) => num < 6)
console.log(allLessThanSix)

// Use the slice method to create a new array that contains the first three elements of the original array.
const numbers1 = [1, 2, 3, 4, 5];
const firstThree = numbers1.slice(0, 3)
console.log(firstThree)

// Use the splice method to remove the third element from the array.
const numbers2 = [1, 2, 3, 4, 5];
numbers2.splice(2,1)
console.log(numbers2)