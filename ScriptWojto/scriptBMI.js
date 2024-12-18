const weight = document.getElementById("weight");
const height = document.getElementById("height");
const result = document.getElementById("result");
const onBMI = document.getElementById("onBMI");

onBMI.addEventListener("click", () => {
  let weightV = weight.value;
  let heightV = height.value;
  let mode = 1;
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
    } else {
      result.innerHTML = "wygłodzenie wtf";
    }
    onBMI.innerText = "Resetuj";
  } else {
    onBMI.innerText = "Licz";
  }
});
