let pattern = /^[^Aa]{6,}$/;

console.log(pattern.test("Wonderful"));
console.log(pattern.test("Joyful"));
console.log(pattern.test("Happiness"));
console.log(pattern.test("Time"));
console.log(pattern.test("Apple"));
