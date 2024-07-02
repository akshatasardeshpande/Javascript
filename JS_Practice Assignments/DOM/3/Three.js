const parent = document.querySelector('.accordion-homepage')
console.log("NODES:",parent.childNodes)

const section = document.createElement("section");
section.className = "parent";

const h3 = document.createElement("h3");

h3.textContent = "My New FAQ";

section.appendChild(h3);

parent.appendChild(section);

console.log(parent)