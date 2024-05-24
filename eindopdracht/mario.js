let locaMax=1460
let locaMin=0
let loca=0
let succes= 1000
bomba_1_loca=0
bomba_2_loca=0


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
      if( e.keyCode == 87 ) {
        addHit();
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
    }


var addHit = function() {
    // document.getElementById('mario').height="500";
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

function bombaLoca(){
  
  // for (let i = 0; i < 10; i++) {
  //   const bomba_1=document.getElementById("enemy1")
  //   stappenTeller=i*10
  //   bomba_1.style.left=stappenTeller+'px'
  //   console.log(stappenTeller);
  }


// if(loca==succes){
//   restartLoc()
// }

// function restartLoc(){
//   loca=loca-1000
// }