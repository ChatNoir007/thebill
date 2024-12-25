const weight = document.getElementById("weight");
const height = document.getElementById("height");
const result = document.getElementById("result");
const onBMI = document.getElementById("onBMI");

let mode = 1;
onBMI.addEventListener("click", () => {
  let weightV = weight.value;
  let heightV = height.value;

  const resultV = weightV / (heightV * heightV * 0.0001);
  if (mode == 1) {
    if (resultV >= 30) {
      result.innerHTML = "Otyłość";
    } else if (resultV >= 25) {
      result.innerHTML = "Nadwaga";
    } else if (resultV >= 18.5) {
      result.innerHTML = "Prawidłowo";
    } else if (resultV >= 17) {
      result.innerHTML = "Niedowaga";
    } else if (resultV >= "0") {
      result.innerHTML = "Wygłodzenie";
    } else {
      result.innerHTML = "Podaj prawidłowe dane";
    }

    height.disabled = true;
    weight.disabled = true;

    onBMI.innerText = "Resetuj";
    mode = 0;
  } else {
    weight.disabled = false;
    height.disabled = false;
    height.value = "";
    weight.value = "";
    result.innerHTML = "";
    onBMI.innerText = "Licz";
    mode = 1;
  }
});
