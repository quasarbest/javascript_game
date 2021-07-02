// function to change the new webp picture format do not delete=========================================
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector("body").classList.add("webp");
   } else {
      document.querySelector("body").classList.add("no-webp");
   }
});
// function to change the new webp picture format do not delete=========================================

let $start = document.querySelector("#start");
let $stop = document.querySelector("#stop");
let $game = document.querySelector("#game");
let $time = document.querySelector("#time");
let minute = document.querySelector("#minute");
let allScore = document.querySelector("#result");
let allMiss = document.querySelector("#miss");
let gameStop = false;
let interval = true;
$start.addEventListener("click", startGame);
$game.addEventListener("click", handleBoxClick);

function startGame() {
   $start.style.display = "none";
   $stop.style.display = "flex";
   $game.style.cursor = "pointer";
   gameStop = true;
   allMiss.textContent = 0;
   allScore.textContent = 0;
   minute.textContent = 0;
   $time.textContent = 1;
   interval = setInterval(function () {
      let time = parseFloat($time.textContent);
      if (time <= 0) {
      } else {
         $time.textContent = time + 1;
         if (time === 60) {
            minute.textContent++;
            $time.textContent = 1;
         }
      }
   }, 1000);
   renderBox();
}

$stop.addEventListener("click", function () {
   gameStop = false;
   $start.style.display = "flex";
   $stop.style.display = "none";
   $game.innerHTML = "";
   clearInterval(interval);
});
function handleBoxClick(event) {
   if (!gameStop) {
      return;
   }
   if (event.target.dataset.box) {
      allScore.textContent++;
      renderBox();
   } else {
      allMiss.textContent++;
   }
}

function renderBox() {
   $game.innerHTML = "";
   let box = document.createElement("div");
   let boxSize = getRandom(25, 75);
   let gameSize = $game.getBoundingClientRect();
   let maxTop = gameSize.height - boxSize;
   let maxLeft = gameSize.width - boxSize;
   let color = (box.style.backgroundColor = "#000000");

   box.style.height = box.style.width = boxSize + "px";
   box.style.position = "absolute";
   box.style.backgroundColor = "#" + getRandom(0, maxTop);
   //   box.style.backgroundColor = '#000'
   box.style.top = getRandom(0, maxTop) + "px";
   box.style.left = getRandom(0, maxLeft) + "px";
   box.setAttribute("data-box", "true");
   $game.insertAdjacentElement("afterbegin", box);
}

function getRandom(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
}

// Change color functions ==========================================

let backGround = document.querySelector(".field");




document.querySelector(".btn_color__one")
   .addEventListener("click", function () {
     backGround.classList = "grey";
   });

document.querySelector(".btn_color__two")
   .addEventListener("click", function () {
      backGround.classList = "blue";
   });

document.querySelector(".btn_color__three")
   .addEventListener("click", function () {
      backGround.classList = "orange";
      
   });

document.querySelector(".btn_color__four")
   .addEventListener("click", function () {
      backGround.classList = "field";
     
   });
