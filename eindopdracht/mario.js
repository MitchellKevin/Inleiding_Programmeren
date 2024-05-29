let locaMax=1460
let locaMin=0
let loca=0
let succes= 1000
bomba_1_loca=0
bomba_2_loca=0
let id_1 = null;
let id_2=null;
const enemy2 = document.getElementById("enemy2");   
let bombaAfstand_2 = -670;
const enemy1 = document.getElementById("enemy1");   
let bombaAfstand_1 = -1520;

// var pane = document.querySelector('#pane'),
//     mario = document.querySelector('#mario'),
//     maxValue = pane.clientWidth - mario.clientWidth,
//     keysPressed = {},
//     distancePerIteration = 5;

// function calculateNewValue(oldValue, keyCode1, keyCode2) {
//     var newValue = parseInt(oldValue, 10)
//                    - (keysPressed[keyCode1] ? distancePerIteration : 0)
//                    + (keysPressed[keyCode2] ? distancePerIteration : 0);
//     return newValue < 0 ? 0 : newValue > maxValue ? maxValue : newValue;
// }

// window.addEventListener("keydown", function(event) { keysPressed[event.which] = true; })
// window.addEventListener("keyup", function(event) { keysPressed[event.which] = false; })

// setInterval(function() {
//     mario.css({
//         left: function(eindopdracht ,oldValue) {
//             return calculateNewValue(oldValue, 37, 39);
//         },
//         top: function(eindopdracht, oldValue) {
//             return calculateNewValue(oldValue, 38, 40);
//         }
//     });
// }, 20);


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
      goombaStart()
    }


var jump = function() {
  // https://www.basedash.com/blog/how-to-change-an-image-src-with-javascript
    // document.getElementById('mario').height="500";
    setTimeout(function(){
      document.getElementById("mario").src = "mario.webp";
   }, 500);
    document.getElementById("mario").src = "mario_jump.png";
    console.log("Spacebar Pressed")
    mario.classList.add("jump")
    setTimeout(function(){mario.classList.remove("jump")}, 500)
  }
  
//   document.body.onkeyup = function(e) {
//     if( e.keyCode == 39 ) {
//       goRight();
//       mario.classList.add("right")
//     //   setTimeout(function(){mario.classList.remove("right")}, 500)
      
//     }
//   }
  
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
  clearInterval(id_1);
  id_1 = setInterval(frame, 15);
  function frame() {
    if (bombaAfstand_1 == -800) {
      bombaAfstand_1=-1520
    } else {
      bombaAfstand_1++; 
      enemy1.style.left = -bombaAfstand_1 + "px"; 
    }
  }
} 

function bomba_2_Loca(){
  clearInterval(id_2);
  id_2 = setInterval(frame, 15);
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
  collisionCheck()
  bomba_1_Loca()
  bomba_2_Loca()
}
    // for (let i = 0; i < 10; i++) {
    //   const bomba_1=document.getElementById("enemy1")
    //   bombaAfstand=i*300
    //   bomba_1.style.left=bombaAfstand+'px' 
    // }



// if(loca==succes){
//   restartLoc()
// }

// function restartLoc(){
//   loca=loca-1000
// }

function collisionCheck(){

  var mario={x:500, y:355, width:50, height:50};
  var box1={x:260, y:325, width:30, height:30};

  if(mario.x > box1.x + box1.width ||
    mario.x + mario.width < box1.x ||
    mario.y > box1.y + box1.height ||
    mario.y + mario.height < box1.y)
    {

    }else{
      console.log('Collision')
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
