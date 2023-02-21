const testiqDiv = document.getElementById("modulT");
const legvDiv = document.getElementById("modulL");
const sualDiv = document.getElementById("sual");
const testiqBtn = document.getElementById("okT");
const legvBtn = document.getElementById("okL");
const beli = document.getElementById("beli");
const xeyr = document.getElementById("xeyr");

const testiqlemek = () => {
  testiqDiv.classList.remove("hidden");
  sualDiv.classList.add("hidden");

  setTimeout(() => {
    testiqDiv.classList.add("hidden");
    sualDiv.classList.remove("hidden");
  }, 3000);
};
beli.addEventListener("click", testiqlemek);

testiqBtn.addEventListener("click", () => {
  testiqDiv.classList.add("hidden");
  sualDiv.classList.remove("hidden");
});

const legvEtmek = () => {
  legvDiv.classList.remove("hidden");
  sualDiv.classList.add("hidden");
  setTimeout(() => {
    legvBtn.classList.add("hidden");
    sualDiv.classList.remove("hidden");
  }, 3000);
};
 xeyr.addEventListener("click", legvEtmek)
 legvBtn.addEventListener("click", ()=>{
    legvDiv.classList.add("hidden")
    sualDiv.classList.remove("hidden")
 })