let locaMax=1460
let locaMin=0
let loca=0
let succes= 1000
let finsihLine=1250
bomba_1_loca=0
bomba_2_loca=0
let interval_1 = null;
let interval_2=null;
const enemy2 = document.getElementById("enemy2");   
let bombaAfstand_2 = -670;
const enemy1 = document.getElementById("enemy1");   
let bombaAfstand_1 = -1520;
let hs=document.querySelector("h3");
let score=document.querySelector("h2")
let box0=document.querySelector(".box0");
let box1= document.querySelector(".box1");
let box2= document.querySelector(".box2")
let box3=document.querySelector(".box3");
let box4=document.querySelector(".box4");
let timer=0;
let lowestScore = 99999

function getLowestScore(){
  score.textContent="Lowest Score: " + lowestScore
}
function setLowestScore(){
  hs.textContent="Score: "+ timer
}

let button= document.querySelector("#startButton")
button.addEventListener("click", start)

// function playMusic(){
//     let audio= new Audio("mainAudio.mp3")
//     audio.button()
//   }

function setTimer(){
  for (let i = 0; i < 10; i++) {
    timer=timer+i
    console.log(timer)
    setInterval(500)
  }
}

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
let bgMusic = new Audio("mainAudio.mp3");

function start(){
  bgMusic.play()
    goombaStart()
  document.body.onkeydown = function userData(e) {
      if( e.keyCode == 32 ) {
        jump();     
      }else if(e.keyCode==68){
          mario.classList.add("right")
          setTimeout(function(){mario.classList.remove("left")})
          goRight();
      }else if(e.keyCode==65){
          mario.classList.add("left")
          setTimeout(function(){mario.classList.remove("right")})
          goLeft();
      }
      enemyCollisionChecker()
      boxCollisioChecker()
      setLowestScore()
      getLowestScore()
      finish()
      setTimer()  
    }
        
    // playMusic()
  }
  
  


function jump() {
  // https://www.basedash.com/blog/how-to-change-an-image-src-with-javascript
    setTimeout(function(){
      document.getElementById("mario").src = "mario.webp";
   }, 500);
    document.getElementById("mario").src = "mario_jump.png";

    mario.classList.add("jump")
    setTimeout(function(){mario.classList.remove("jump")}, 500)
  }

    
function goRight() {
    locaAddRight()
    const test=document.getElementById("mario")
    test.style.left=loca + 'px'
    console.log("Right pressed")
  }

function goLeft() {
    locaAddLeft()
    const test=document.getElementById("mario")
    test.style.left=loca + 'px'
    console.log("Left pressed")
  }

// https://www.w3schools.com/js/js_htmldom_css.asp
function locaAddLeft(){
  loca= loca - 20
}

function locaAddRight(){
  loca=loca + 20
}

var locaGetter=function(){
  console.log("Loca: " + loca)
}
  // Bron: https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3 
function bomba_1_Loca(){
  clearInterval(interval_1);
  interval_1 = setInterval(frame, 15);
  function frame() {
    if (bombaAfstand_1 == -800) {
      bombaAfstand_1=-1520
    } else {
      bombaAfstand_1++; 
      enemy1.style.left = -bombaAfstand_1 + "px"; 
    }
  }
  if(bombaAfstand_1==loca){
    loca=loca-loca
  }
} 

function bomba_2_Loca(){
  clearInterval(interval_2);
  interval_2 = setInterval(frame, 15);
  function frame() {
    if (bombaAfstand_2 == 20) {
      bombaAfstand_2=-670
    } else {
      bombaAfstand_2++; 
      enemy2.style.left = -bombaAfstand_2 + "px"; 
    }
  }
}

function goombaStart(){
  bomba_1_Loca()
  bomba_2_Loca()
}

function boxCollisioChecker(){
  if(mario.x<=437){
    collisionCheckBox1()
  }else if(mario.x>437 && mario.x <812){
    collisionCheckBox0()
  }else if(mario.x>812 && mario.x < 1512){
    collisionCheckBox4()
  }else if(mario.x>1512){
    collisionCheckBox3()
  }
}

function enemyCollisionChecker(){
  if(mario.x<937){
    collisionCheckEnemy2()
  }else if(mario.x>937){
    collisionCheckEnemy1()
  }
}

function collisionCheckBox1(){

  if(mario.x > 337 + box1.offsetWidth ||
    mario.x + mario.offsetWidth < 337 ||
    mario.y > 611 + box1.offsetHeight ||
    mario.y + mario.offsetHeight < 611)

    {
      console.log("geen collision")
      setTimeout(function(){mario.classList.remove("block")}, 100)
    }else{
      console.log('Collision')
      mario.classList.add("block")
    }
  }

    function collisionCheckBox0(){

      if(mario.x > 537 + box0.offsetWidth ||
        mario.x + mario.offsetWidth < 537 ||
        mario.y > 611 + box0.offsetHeight ||
        mario.y + mario.offsetHeight < 611)
        {
          console.log("geen collision")
          setTimeout(function(){mario.classList.remove("block")}, 100)
        }else{
          console.log('Collision')
          mario.classList.add("block")
        }
        }



function collisionCheckBox3(){

  if(mario.x > 1612 + box3.offsetWidth ||
    mario.x + mario.offsetWidth < 1612 ||
    mario.y > 611 + box3.offsetHeight ||
    mario.y + mario.offsetHeight < 611)
    {
      console.log("geen collision")
      setTimeout(function(){mario.classList.remove("block")}, 100)
    }else{
      console.log('Collision')
      mario.classList.add("block")
    }


}
function collisionCheckBox4(){

  if(mario.x > 1412 + box4.offsetWidth ||
    mario.x + mario.offsetWidth < 1412 ||
    mario.y > 611 + box4.offsetHeight ||
    mario.y + mario.offsetHeight < 611)
    {
      console.log("geen collision")
      setTimeout(function(){mario.classList.remove("block")}, 100)

    }else{
      console.log('Collision')
      mario.classList.add("block")
    }


}

function collisionCheckEnemy2(){
  if(mario.x > enemy2.x + enemy2.offsetWidth ||
    mario.x + mario.offsetWidth < enemy2.x ||
    mario.y > enemy2.y + box1.offsetHeight ||
    mario.y + mario.offsetHeight < enemy2.y)
    {
      console.log("geen collision")
    }else{
      console.log('Collision')
      loca=loca-loca
    }

}
function collisionCheckEnemy1(){

  if(mario.x > enemy1.x + enemy1.offsetWidth ||
    mario.x + mario.offsetWidth < enemy1.x ||
    mario.y > enemy1.y + box1.offsetHeight ||
    mario.y + mario.offsetHeight < enemy1.y)
    {
      console.log("geen collision")
    }else{
      console.log('Collision')
      loca=loca-loca
    }

}

function finish(){
  if(loca==1400){
    loca=loca-loca
    if (timer < lowestScore) {
      lowestScore = timer;
    }
    timer=timer-timer
  }
}
