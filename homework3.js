function pow(x, y) {
    let result = 1;

    if (y >= 0) {
        for (let i = 0; i < y; i++) {
            result = result * x;
        }
    } else {
        for (let i = 0; i > y; i--) {
            result = result / x;
        }
    }

    return result;
}


console.log(pow(2, 3));    // 8
console.log(pow(5, 2));    // 25
console.log(pow(10, 1));   // 10
console.log(pow(10, 0));   // 1

console.log(pow(2, -1));   // 0.5
console.log(pow(2, -2));   // 0.25
console.log(pow(5, -2));   // 0.04

console.log(pow(-2, 3));   // -8
console.log(pow(-2, 2));   // 4
console.log(pow(-2, -2));  // 0.25
