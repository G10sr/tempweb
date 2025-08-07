document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const tempetureMeasurement1 = document.getElementById('initial').value;
  const tempetureMeasurement2 = document.getElementById('resultTemp').value;
  const input = document.getElementById('number');
  const initialTemperature = parseFloat(input.value) || 0;
  const displayFinal = document.getElementById('result');
  let operationfinal;

  if (tempetureMeasurement1 == "C") {
    operationfinal = celsiusTo(initialTemperature, tempetureMeasurement2);
    displayFinal.textContent = operationfinal.toFixed(2) + tempetureMeasurement2 + "°";
  } else if (tempetureMeasurement1 == "F"){
    operationfinal = farenheitTo(initialTemperature, tempetureMeasurement2);
    displayFinal.textContent = operationfinal.toFixed(2) + tempetureMeasurement2 + "°";
  }else if (tempetureMeasurement1 == "K"){
    operationfinal = kelvinTo(initialTemperature, tempetureMeasurement2);
    displayFinal.textContent = operationfinal.toFixed(2) + tempetureMeasurement2 + "°";
  }
});

function celsiusTo(initialTemperature, targetUnit) {
  if (targetUnit == "C") {
    return initialTemperature;
  } else if (targetUnit == "F") {
    return initialTemperature * 9 / 5 + 32;
  } else if (targetUnit == "K") {
    return initialTemperature + 273.15;
  } else {
    return "Unidad inválida";
  }
}

function farenheitTo(initialTemperature, targetUnit) {
  if (targetUnit == "F") {
    return initialTemperature;
  } else if (targetUnit == "C") {
    return (initialTemperature-32)*(5/9);
  } else if (targetUnit == "K") {
    return (initialTemperature-32)*(5/9)+273.15;
  } else {
    return "Unidad inválida";
  }
}
function kelvinTo(initialTemperature, targetUnit) {
  if (targetUnit == "K") {
    return initialTemperature;
  } else if (targetUnit == "F") {
    return (initialTemperature-273.15)*(9/5)+32;
  } else if (targetUnit == "C") {
    return (initialTemperature-273.15);
  } else {
    return "Unidad inválida";
  }
}
function changeValues(){
   const initialSelect = document.getElementById('initial');
    const resultSelect = document.getElementById('resultTemp');
    const index1 = initialSelect.selectedIndex;
    const index2 = resultSelect.selectedIndex;
    initialSelect.selectedIndex = index2;
    resultSelect.selectedIndex = index1;
};