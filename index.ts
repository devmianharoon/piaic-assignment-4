                                  // Task-1

// - Create a function that takes an array, an index, and a value as parameters.
//  Inside the function, use the splice method to insert the value at the specified index in the array.
//   Return the modified array.


// function addValue(array:any, index:number,value:any) {
//   array.splice(index,0,value)
//   return array;
// }


// let originalArray = [1,2,3,1,2,35,2,5,252,5,125,51,7,7,67,4];
// let modifiedArray = addValue(originalArray, 2, 5);
// console.log(modifiedArray); 


// TAsk 2
// - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

// var items: string[] = ["books", "pensils", "notebooks", "pen", "stone", "papper", "marker"];

// function toAdd(items: string[], newItem: string) {
//     items.splice(0, 0, newItem);
//     console.log(items);
// }

// toAdd(items, "all2");



// var items: string[] = ["books", "pensils", "notebooks", "pen", "stone", "papper", "marker"];

// function toRemove(index: number ) {
//     items.splice(index, 1, );
//     console.log(items);
// }

// toRemove(2 );

// -> Task-3
// Write a program that uses a while loop to print the first 25 integers.
// let integers:number=1;
// while (integers<=25) {
//     console.log(integers);
//     integers++
    
// }


// Task-> 4
//  Write a program that uses a while loop to print the first 10 even numbers.
// let evenNumber:number=1;
// while (evenNumber<=10) {
//     if (evenNumber%2==0) {
//         console.log(evenNumber);
        
//     }
//     evenNumber++
// }


// Task->5
// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
// function factorial(integer: number): number {
//     if (integer < 0) {
//         console.log("Please Enter Positive Integer");
//         return -1; 
//     }
    
//     if (integer === 0 || integer === 1) {
//         return 1;
//     }

//     let result: number = 1;

//     while (integer > 1) {
//         result *= integer;
//         integer--;
//     }

//     return result;
// }

// console.log(factorial(6));



// task->6
// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

// function removeNeagativeNumber(numbers:number[]) {
//     return numbers.filter(numbers=> numbers>=0)
    
// }
// let numberArray:number[]=[0,20,0,2,-3,-2,90,-48,9,4]
// let resultArray:number[]=removeNeagativeNumber(numberArray);
// console.log("Original Aarray"+numberArray);

// console.log("Result "+resultArray);


// Task->7
// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.


// function inputArray(array:number[]) {
//     let sum = 0;
//     let index = 0;

//     while (index < array.length) {
//         sum += array[index];
//         index++;
//     }
//     return sum
// }
// var numberArray: number[] = [5, 1,63, 8,5,23,67,8,8, 2, 0, 10, 7];
// var totalSum= inputArray(numberArray);

// console.log("Array:", numberArray);
// console.log("Sum of numbers:", totalSum);

// Task->
// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.





// function tempInCelcius(temperature:number) {
//     temperature.length()
// }

