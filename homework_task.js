function checkProbabilityTheory(count) {
    let evenNumbers = 0;
    let oddNumbers = 0;

    for (let i = 0; i < count; i++) {
        let number = Math.floor(Math.random() * 901) + 100;

        if (number % 2 === 0) {
            evenNumbers++;
        } else {
            oddNumbers++;
        }
    }

    let evenPercent = Number((evenNumbers / count * 100).toFixed(2));
  let oddPercent = Number((oddNumbers / count * 100).toFixed(2));

  return {
         count: count,  // Кількість згенерованих чисел:
         odd: oddNumbers,// Кількість парних чисел
         even: evenNumbers, // Кількість не парних чисел
         percent: evenPercent + "% / " + oddPercent + "%", // Відсоток парних чисел до не парних
     };

}

console.log(checkProbabilityTheory(100));
console.log(checkProbabilityTheory(111));
console.log(checkProbabilityTheory(222));
