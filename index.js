document.querySelector("#main").remove();

const newHeader = document.createElement("h1");

document.body.appendChild(newHeader);

newHeader.id = "victory";

document.querySelector("h1#victory")

newHeader.innerHTML = "<h1>victory</h1> <p>Aric is the champion</p>";
