var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services["Розбити скло"] = "200 грн";

services.price = function () {
    let total = 0;

    for (let service in this) {
        if (service !== "price" && service !== "minPrice" && service !== "maxPrice") {
            total += parseFloat(this[service]);
        }
    }
    return total;
};

services.minPrice = function () {
    let min = null;

    for (let service in this) {
        if (service !== "price" && service !== "minPrice" && service !== "maxPrice") {
            let price = parseFloat(this[service]);

            if (min === null || price < min) {
                min = price;
            }
        }
    }
    return min;
};

services.maxPrice = function () {
    let max = null;

    for (let service in this) {
        if (service !== "price" && service !== "minPrice" && service !== "maxPrice") {
            let price = parseFloat(this[service]);

            if (max === null || price > max) {
                max = price;
            }
        }
    }
    return max;
};

console.log("Загальна вартість:", services.price() + " грн");
console.log("Мінімальна ціна:", services.minPrice() + " грн");
console.log("Максимальна ціна:", services.maxPrice() + " грн");
