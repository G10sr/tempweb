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
    checkAndApplyStyles(operationfinal, tempetureMeasurement2);

});

function celsiusTo(initialTemperature, targetunidad) {
  if (targetunidad == "C") {
    return initialTemperature;
  } else if (targetunidad == "F") {
    return initialTemperature * 9 / 5 + 32;
  } else if (targetunidad == "K") {
    return initialTemperature + 273.15;
  } else {
    return "Unidad inválida";
  }
}

function farenheitTo(initialTemperature, targetunidad) {
  if (targetunidad == "F") {
    return initialTemperature;
  } else if (targetunidad == "C") {
    return (initialTemperature-32)*(5/9);
  } else if (targetunidad == "K") {
    return (initialTemperature-32)*(5/9)+273.15;
  } else {
    return "Unidad inválida";
  }
}
function kelvinTo(initialTemperature, targetunidad) {
  if (targetunidad == "K") {
    return initialTemperature;
  } else if (targetunidad == "F") {
    return (initialTemperature-273.15)*(9/5)+32;
  } else if (targetunidad == "C") {
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

function checkAndApplyStyles(finalTemp, unidad) {
  let temperaturaFinal;

  if (unidad === "C") {
    temperaturaFinal = finalTemp;
  } else if (unidad == "F") {
    temperaturaFinal = (finalTemp - 32) * 5 / 9;
  } else if (unidad == "K") {
    temperaturaFinal = finalTemp - 273.15;
  }

  if (temperaturaFinal > 100) {
    document.body.style.backgroundColor = "#FFFEC8FF";
    document.body.style.color = "black";
    document.getElementById("decoration").style.backgroundColor = "#EB4A0AFF";
    document.querySelector("footer").style.backgroundColor = "#ff9999";
    document.querySelector("footer div").style.backgroundColor = "#ff9999";
    document.querySelector("form").style.backgroundColor = "#0303032D";
    document.querySelectorAll("footer a, footer p").forEach(element => {
      element.style.color = "black";
    });
  } else {
    document.body.style.backgroundColor = "rgb(13, 0, 27)";
    document.body.style.color = "rgb(253, 229, 229)";
    document.getElementById("decoration").style.backgroundColor = "rgb(114, 145, 192)";
    document.querySelector("footer").style.backgroundColor = "rgb(26, 0, 51)";
    document.querySelector("form").style.backgroundColor = "rgba(255, 255, 255, 0.07)";
    document.querySelectorAll("footer a, footer p").forEach(element => {
      element.style.color = "white";
    });
  }
}