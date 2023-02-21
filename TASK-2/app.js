const quest = document.getElementById("question");
const okBtn = document.getElementById("ok");
const container = document.querySelector("#container");
const btn = document.getElementById("button");
const body= document.querySelector(".modal")

const sual = () => {
  quest.classList.remove("hidden");
  container.classList.add("hidden");
};
const okCavab = () => {
  quest.classList.add("hidden");
  container.classList.remove("hidden");
  
};

btn.addEventListener("click", sual)
okBtn.addEventListener("click", okCavab )
body.addEventListener("click", okCavab)

