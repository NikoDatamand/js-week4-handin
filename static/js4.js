const cars = ["Ford", "WW", "Toyota", "Volvo"]; 

const carSelector = document.getElementById("car-selector");

const carMake = document.getElementById("car-make");

function populateSelect() {
  for (let i = 0; i < cars.length; i++) {
    const option = document.createElement("option");
    option.text = cars[i];
    carSelector.appendChild(option);
  }
}

function updateCarMake() {
  const selectedValue = carSelector.value;
  carMake.textContent = "Selected Brand: " + selectedValue;
}

populateSelect();

carSelector.addEventListener("change", updateCarMake);