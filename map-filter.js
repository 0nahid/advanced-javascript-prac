const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
function square(element) {
    return element * element;
}
// const square = element => element * element;
// console.log(square);
// const square2 = x => x*x;
// console.log(square2);
const result = numbers.map(element => element * element);
console.log(result);
// numbers.map(function (element, index, array) {
//     console.log(element, index, array);
// })
// console.log(output);

const arrayElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const squareResult = arrayElement.map(x => x * x);
console.log(squareResult);

const num = [1, 2, 5, 5, 6, 6, 11, 56, 54, 8, 54, 1];
const output = num.map(x => x * x);
console.log(output);

const num2 = [12, 5, 45, 6, 1, 6, 4, 4, 6, 6, 6, 68, 5, 4];
const output2 = num2.map(x => x * x);
console.log(output2);

const bigger = numbers.filter(x => x > 5);
console.log(bigger);

const bigger2 = numbers.filter(x => x < 10);
console.log(bigger2);

const isThere = numbers.find(x => x > 5);
console.log(isThere);