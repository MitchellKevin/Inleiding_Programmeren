// wk1
// eerste oefening
let kop=document.querySelector("h1")
let bericht ="Bedankt!!"
let getal= 0
const imgPlus=document.querySelector("#plusButton")
const imgMin=document.querySelector("#minButton")
const controleer=document.querySelector("#controleer")
const button= document.querySelector("button")
let getalVeld=document.querySelector("p")
mysteryNumber=Math.round(Math.random()*6)

getalVeld.textContent=getal
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

// Dobbelsteen oefening
function reRoll(){
var aantalOgen = Math.ceil(Math.random()*6);

// even in de console kijken welke waarde hier uitkomt
console.log(aantalOgen);

//we schrijven deze waarde ook naar de <p>aragraaf in de html 
document.querySelector("p").textContent = 'mooie worp: '+aantalOgen; 

// een verzameling met alle bestandsnamen van de afbeeldingen uit het mapje images aanmaken
var plaatjesArray = ['one.png','two.png','three.png','four.png','five.png','six.png'];

var dobbelsteenAfbeelding = plaatjesArray[aantalOgen-1];

document.querySelector("img").src = '../image/'+dobbelsteenAfbeelding;
if (aantalOgen == 6){
    document.querySelector('p').textContent = "Feest! Dubbel uitbetaald"
    }
else if(aantalOgen != 4 && aantalOgen!=2){
        document.querySelector('p').textContent="Jammer, oneven. Je hebt verloren"
    }
else{
        document.querySelector('p').textContent="GEFELICITEERD, je hebt gewonnen"
    }
}
button.addEventListener("click",reRoll)

// week 2

function updateGetal(){
    getalVeld.textContent=getal
    console.log("getal: " + getal)
}

function verhoogGetal(){
    getal= getal+1
    updateGetal()
}

function verlaagGetal(){
    getal=getal-1
    updateGetal()
}
function controleerGetal(){
    if(getal===mysteryNumber){
        document.querySelector("h1").textContent="Perfect, je hebt het goed"
        console.log("Goed gedaan!")
    }else if(getal>mysteryNumber){
        document.querySelector("h1").textContent="Helaas, te hoog"
    }
    else if(getal<mysteryNumber){
        document.querySelector("h1").textContent="Helaas, te laag"
    }

    console.log("Controleert getal")
}

imgPlus.addEventListener("click", verhoogGetal)
imgMin.addEventListener("click", verlaagGetal)
controleer.addEventListener("click", controleerGetal)