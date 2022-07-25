/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "./cars.json";
async function getdata() {
  const data = await fetch(ENDPOINT);
  const carData = await data.json();
  displayDataToDom(carData);
}

function displayDataToDom(data) {
  data.forEach((element) => {
    const flexContainer = document.createElement("div");
    const brandElement = document.createElement("h2");
    const ulElement = document.createElement("ul");
    brandElement.textContent = element.brand;
    flexContainer.append(brandElement, ulElement);
    document.querySelector("#output").append(flexContainer);
    console.log(element.models);
    element.models.forEach((e) => {
      const modelElement = document.createElement("li");
      modelElement.textContent = e;
      ulElement.append(modelElement);
      console.log(e);
    });
  });
}
getdata();
