let upperPart = document.querySelector(".product_upper_part");
let lowerPart = document.querySelector(".product_lower_part");
let bottonUp = document.querySelector(".product__button-toggle-anim_up");
let bottondown = document.querySelector(".product__button-toggle-anim_down");

function toDown() {
  upperPart.style.animation = "to-down 2s linear 1 normal 0s forwards";
  bottondown.disabled = true;
  bottonUp.disabled = false;
}

function toUp() {
  upperPart.style.animation = "to-up 2s linear 1 normal 0s forwards";
  bottonUp.disabled = true;
  bottondown.disabled = false;
}

bottondown.addEventListener("click", toDown);
bottonUp.addEventListener("click", toUp);
