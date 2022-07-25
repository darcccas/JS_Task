/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
document.querySelector("#btn__element").addEventListener("click", count);
let rezult = 0;
function count() {
  rezult += 1;
  const displayElement = document.querySelector("#btn__state");
  displayElement.textContent = rezult;
}
