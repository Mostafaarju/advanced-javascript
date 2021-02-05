// Falsy: value
// false
// 0
// '"
// undefined
// null
// NaN
// Truthy
// '0'
// ' '
// []
// {}

const age = 4;
if (age || age == 0) {
    console.log('Condition is true');
} else {
    console.log('Condition is false');
}