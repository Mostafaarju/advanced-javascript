const numbs = [1, 2, -3, -4, -5, 6, -7, 8, 9];
for (let i = 0; i < numbs.length; i++) {
    // const element = numbs[i];
    if (numbs[i] > 3) {
        break;
    }
    // console.log(numbs[i]);
}

for (let i = 0; i < numbs.length; i++) {
    // const element = numbs[i];
    if (numbs[i] < 0) {
        continue;
    }
    console.log(numbs[i]);
}