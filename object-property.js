const students = [{
        id: 21,
        name: 'Ommor Suni'
    },
    {
        id: 31,
        name: 'Mannnnaaa'
    },
    {
        id: 41,
        name: 'Kobita'
    },
    {
        id: 71,
        name: 'Bobita'
    }
];
// const names = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element.name;
//     names.push(result);

// }
// console.log(names);

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);