const students = [{
        id: 21,
        name: 'Nahid'
    },
    {
        id: 31,
        name: 'Hassan'
    },
    {
        id: 24,
        name: 'Bulbul'
    },
    {
        id: 32,
        name: 'Random People'
    }
];
// const output = [];
// for (let i = 0; i < students.length; i++) {
//     const newArray = students[i].name;
//     output.push = newArray;
//     console.log(output);
// };
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 25);
const bigger2 = students.filter(s => s.id < 30);
const bigger3 = students.find(s => s.id < 30);

console.log(names);
console.log(ids);
console.log(bigger);
console.log(bigger2);
console.log(bigger3);