const modal= document.getElementById("modal")
const sual= document.getElementById("sual")
const okBtn= document.querySelector("#ok")
const kecidBtn= document.querySelector("#kecid")
const kecidUcun=()=>{
    sual.classList.add("hidden")
    modal.classList.remove("hiden")
}
const okUcun=()=>{
    modal.classList.add("hidden")
    sual.classList.remove("hidden")
}
kecidBtn.addEventListener("click", kecidUcun)
okBtn.addEventListener("click", okUcun)