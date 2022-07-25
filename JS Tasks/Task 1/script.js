/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit", displayData);
let lb;
let g;
let oz;
function displayData(e) {
  e.preventDefault();
  document.querySelector("#output").innerHTML = "";
  const inputElement = document.querySelector("#search").value;
  convertWeight(inputElement);
  const displayElement = document.createElement("h2");
  displayElement.innerHTML = `${inputElement} kg converted to Pounds = ${lb} lb <br/>
    ${inputElement} kg converted to Grams = ${g} g <br/> ${inputElement} kg converted to Ounces = ${oz} oz`;
  document.querySelector("#output").appendChild(displayElement);
}

function convertWeight(kg) {
  lb = kg * 2.2046;
  g = kg / 0.001;
  oz = kg * 35.274;
}
