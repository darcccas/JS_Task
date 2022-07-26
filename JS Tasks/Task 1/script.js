/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit", inputHandle);
let lb;
let g;
let oz;
function inputHandle(e) {
  e.preventDefault();
  const inputElement = document.querySelector("#search").value;
  convertWeight(inputElement);
  domDisplay(inputElement);
}

function convertWeight(kg) {
  lb = kg * 2.2046;
  g = kg / 0.001;
  oz = kg * 35.274;
}
function domDisplay(data) {
  document.querySelector("#output").innerHTML = "";
  const displayElement = document.createElement("h2");
  displayElement.innerHTML = `${data} kg to Pounds = ${lb} lbs <br/>
    ${data} kg to Grams = ${g} g <br/> ${data} kg to Ounces = ${oz} oz`;
  document.querySelector("#output").appendChild(displayElement);
}
