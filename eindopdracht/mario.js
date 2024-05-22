
var pane = document.querySelector('#pane'),
    mario = document.querySelector('#mario'),
    maxValue = pane.clientWidth - mario.clientWidth,
    keysPressed = {},
    distancePerIteration = 5;

function calculateNewValue(oldValue, keyCode1, keyCode2) {
    var newValue = parseInt(oldValue, 10)
                   - (keysPressed[keyCode1] ? distancePerIteration : 0)
                   + (keysPressed[keyCode2] ? distancePerIteration : 0);
    return newValue < 0 ? 0 : newValue > maxValue ? maxValue : newValue;
}

window.addEventListener("keydown", function(event) { keysPressed[event.which] = true; })
window.addEventListener("keyup", function(event) { keysPressed[event.which] = false; })

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

document.body.onkeyup = function(e) {
    if( e.keyCode == 32 ) {
      addHit();
      mario.classList.add("large")
      setTimeout(function(){mario.classList.remove("large")}, 500)
      
    }else if(e.keyCode==39){
        goRight();
        mario.classList.add("right")
    }else if(e.keyCode==37){
        goLeft();
      mario.classList.add("left")
    }
  }
  
var addHit = function() {
    // document.getElementById('mario').height="500";
    console.log("Spacebar Pressed")
  }
  
//   document.body.onkeyup = function(e) {
//     if( e.keyCode == 39 ) {
//       goRight();
//       mario.classList.add("right")
//     //   setTimeout(function(){mario.classList.remove("right")}, 500)
      
//     }
//   }
  
var goRight = function() {
    // document.getElementById('mario').height="500";
    console.log("Right pressed")
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
    console.log("Left pressed")
  }


