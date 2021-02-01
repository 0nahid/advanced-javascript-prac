// let name = null;
let name = NaN;
// console.log(name);
// const name = 'Nahid Hassan';
if (name) {
    console.log('Condition is true');
} else {
    console.log('Condition is false');
}
// Falsy
// 0
// ''
// undefined
// null
// NaN
// false

// Truthy
// '0', ' ',  []
// true

let name2 = 0;
if(name2 || name2 == 0){
    console.log(true);
} else{
    console.log(false);
}