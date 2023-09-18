const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

const tableBody = document.getElementById("tableBody");
const filterButton = document.getElementById("filterButton");
const filterInput = document.getElementById("filterInput");
const clearButton = document.getElementById("clearButton");
const priceHeader = document.querySelector("th:nth-child(5)");

let ascending = true;

function createCarTableRows(cars) {
    return cars.map(car => {
        return `<tr><td>${car.id}</td><td>${car.year}</td><td>${car.make}</td><td>${car.model}</td><td>${car.price}</td></tr>`;
    });
}

function renderCarTable(cars) {
    const tableRows = createCarTableRows(cars);
    tableBody.innerHTML = tableRows.join('');
}

filterButton.addEventListener("click", function() {
    const filterValue = parseInt(filterInput.value);
    if (!isNaN(filterValue)) {
        const filteredCars = cars.filter(car => car.price < filterValue);
        renderCarTable(filteredCars);
    }
});

clearButton.addEventListener("click", function() {
    filterInput.value = "";
    renderCarTable(cars);
});

priceHeader.addEventListener("click", function() {
    if (ascending) {
        cars.sort((a, b) => a.price - b.price);
    } else {
        cars.sort((a, b) => b.price - a.price);
    }

    renderCarTable(cars);

    ascending = !ascending;
});

renderCarTable(cars);