let kop=document.querySelector("h1")
let bericht ="Hello world"

const button= document.querySelector("button")

function veranderKnopNaam(){
    kop.textContent=bericht
}
console.log(kop)
button.addEventListener("click", veranderKnopNaam)
// let level="1"
// let naam="Mario"

// const scoreMin="0"
// const scoreMax="1000"

// console.log(level,naam,scoreMin,scoreMax)

