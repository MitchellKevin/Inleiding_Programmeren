let kop=document.querySelector("h1")
let bericht ="Bedankt!!"

const button= document.querySelector("button")

function veranderKnopNaam(){
    kop.textContent=bericht
}
// function veranderKnopNaam2(){
//     kop.textContent=bericht2
//     setAmount=2
// }
console.log(kop)
button.addEventListener("click", veranderKnopNaam)

// if(setAmount==1){
//     button.addEventListener("click", veranderKnopNaam)
// }
// else{
//     button.addEventListener("click", veranderKnopNaam2)
// }

// let level="1"
// let naam="Mario"

// const scoreMin="0"
// const scoreMax="1000"

// console.log(level,naam,scoreMin,scoreMax)

