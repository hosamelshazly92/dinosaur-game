let character = document.getElementById("character");
let block = document.getElementById("block");

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37:
      //   alert("left");
      break;
    case 38:
      jump();
      break;
    case 39:
      //   alert("right");
      break;
    case 40:
      //   alert("down");
      break;
  }
};

let checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    // block.style.animation = "none";
    // block.style.display = "none";
    // alert("game over");
  }
}, 10);
