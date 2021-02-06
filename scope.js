let math = 20;

function sum(first, second) {
    let result = first + second + math;

    if (result > 9) {
        let mood = 'Nice';
        console.log(mood);
    }

    return result;
}
const outPut = sum(15, 20);
console.log(outPut);