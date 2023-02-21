const succesBtn= document.getElementById("btn")
const questionSide= document.getElementById("question")
const yesBtn= document.getElementById("yes")
const noBtn= document.getElementById("no")

const hiddenRemove=()=>{
    questionSide.classList.remove("hidden")
}

const hiddenAdd=()=>{
  questionSide.classList.add("hidden")
}

succesBtn.addEventListener("click", hiddenRemove )
yesBtn.addEventListener("click", hiddenAdd)
noBtn.addEventListener("click", hiddenAdd)