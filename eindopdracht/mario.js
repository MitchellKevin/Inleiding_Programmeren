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

let box1= document.querySelector(".box1");

  document.body.onkeydown = function userData(e) {
      if( e.keyCode == 32 ) {
        jump();
        // mario.classList.add("large")
        // setTimeout(function(){mario.classList.remove("large")}, 500)      
      }else if(e.keyCode==68){
          mario.classList.add("right")
          setTimeout(function(){mario.classList.remove("left")})
          goRight();
          // mario.classList.add("right")
      }else if(e.keyCode==65){
          mario.classList.add("left")
          setTimeout(function(){mario.classList.remove("right")})
          goLeft();
          // mario.classList.add("left")
      }
      collisionCheck()
      goombaStart()
      finish()
    }


var jump = function() {
  // https://www.basedash.com/blog/how-to-change-an-image-src-with-javascript
    // document.getElementById('mario').height="500";
    setTimeout(function(){
      document.getElementById("mario").src = "mario.webp";
   }, 500);
    document.getElementById("mario").src = "mario_jump.png";
    mario.classList.add("jump")
    setTimeout(function(){mario.classList.remove("jump")}, 500)
  }
  
  
var goRight = function() {
    // mario.classList.add("right")
    locaAddRight()
    const test=document.getElementById("mario")
    test.style.left=loca + 'px'
    // document.getElementById('mario').height="500";
    console.log("Right pressed")
    // setTimeout(function(){mario.classList.remove("right")}, 500)
  }
  
  
//   document.body.onkeyup = function(e) {
//     if( e.keyCode == 37 ) {
//       goLeft();
//       mario.classList.add("left")
//     //   setTimeout(function(){mario.classList.remove("right")}, 500)
      
//     }
//   }
var goLeft = function() {
    // document.getElementById('mario').height="500";
    // mario.classList.add("left")
    locaAddLeft()
    const test=document.getElementById("mario")
    test.style.left=loca + 'px'
    console.log("Left pressed")
    // setTimeout(function(){mario.classList.remove("left")}, 500)
  }



// function locaGet(){
//   console.log("Loca: " + loca)
// }
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
  console.log(bombaAfstand_1)
  console.log(loca)
  console.log(mario.y)
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
    // for (let i = 0; i < 10; i++) {
    //   const bomba_1=document.getElementById("enemy1")
    //   bombaAfstand=i*300
    //   bomba_1.style.left=bombaAfstand+'px' 
    // }

function collisionCheck(){
  collisionCheckBox1()
  collisionCheckEnemy1()
  collisionCheckEnemy2()
}

// if(loca==succes){
//   restartLoc()
// }

// function restartLoc(){
//   loca=loca-1000
// }

function collisionCheckBox1(){

  if(mario.x > 337 + box1.offsetWidth ||
    mario.x + mario.offsetWidth < 337 ||
    mario.y > 611 + box1.offsetHeight ||
    mario.y + mario.offsetHeight < 611)
    {
      console.log("geen collision")
    }else{
      console.log('Collision')
    }

}
function collisionCheckEnemy2(){
  
  // var mario={x:500, y:355, width:50, height:50};
  // var box1={x:260, y:325, width:30, height:30};

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
  
  // var mario={x:500, y:355, width:50, height:50};
  // var box1={x:260, y:325, width:30, height:30};

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
// Mario

// position: absolute;
// top: 355px;
// left: 500px;
// width: 50px;
// height: 50px;
// transition: all 0.2s;
// border: red 1px solid;

// box 1

// position: absolute;
// width: 30px;
// height: 30px;
// left: 260px;
// top: 325px;
// border: red 5px solid;

function finish(){
  if(loca==1400){
    loca=loca-loca
  }
}
