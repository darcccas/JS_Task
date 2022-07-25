/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

document.querySelector("#btn").addEventListener("click", showUser);

async function showUser() {
  const userData = await getData();
  displayData(userData);
}

async function getData() {
  const fechData = await fetch("https://api.github.com/users");
  return await fechData.json();
}

function displayData(data) {
  document.querySelector("#output").textContent = "";
  data.forEach((e) => {
    const loginDisplayElement = document.createElement("p");
    const userImage = document.createElement("img");
    loginDisplayElement.textContent = `User login: ${e.login}`;
    userImage.src = `${e.avatar_url}`;
    document.querySelector("#output").append(userImage, loginDisplayElement);
  });
}
