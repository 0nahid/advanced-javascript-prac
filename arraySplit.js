// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const part = nums.slice(2, 5);
// console.log(part);

// // slice (n1 , n2)
// // n1 = index 0 to start
// // n2 = before element of n2 index  

// const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const part2 = num2.slice(2, 10);
// console.log(part2);

// // slice(n1,n2 , n,n,n,n,n,n,) here n means you can inject some element
// // n1 = start from n1 index
// // n2 = to n2 number order

// const remove = num2.splice(2, 5, 77, 78, 79, 80, 81)
// console.log(remove);
// console.log(num2);

// // Join
// const together = num2.join(' Ami ');
// console.log(together);

const num3=[0,1,2,3,6,5,4,7,8,9]
const remove3 = num3.slice(1,3);
console.log(remove3); 

const num4=[0,1,2,3,6,5,4,7,8,9]
const remove4 = num3.splice(1,3);
console.log(remove4); 

const together2 = num4.join(' ');
console.log(together2);